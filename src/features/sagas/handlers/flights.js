import { call, put } from "redux-saga/effects";
import { setFlightList } from "../../flightselect/flightSlice";
import { requestGetFlights } from "../requests/flights";

// Делаем запрос и форматируем данные под наши необходимости

export function* handleFlightList(action) {
  try {
    const response = yield call(requestGetFlights, action.payload);
    const { data } = response;
    let flights = data.Quotes.map((item) => {
      let fulltime = item.OutboundLeg.DepartureDate.split("T");
      let date = fulltime[0];
      let time = fulltime[1].slice(0,5);
      let companyID = item.OutboundLeg.CarrierIds[0];
      let company;
      for (let carries of data.Carriers) {
        if (carries.CarrierId === companyID) {
          company = carries.Name;
        }
      }
      return {
        id: item.QuoteId,
        from: `${data.Places[1].CityName} (${data.Places[1].IataCode})`,
        to: `${data.Places[0].CityName} (${data.Places[0].IataCode})`,
        date,
        time,
        company,
        cost: item.MinPrice,
      };
    });
    yield put(setFlightList([...flights]));
  } catch (error) {
    yield put(setFlightList([]));
    console.log(error);
  }
}
