import axios from "axios";
export function requestGetFlights(date) {
  const API_KEY = process.env.REACT_APP_SKYSCANNER_API;
  let options = {
    method: "GET",
    url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/RU/RUB/ru-RU/SVO-sky/JFK-sky/${date}`,
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host":
        "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    },
  };
  return axios.request(options);
}
