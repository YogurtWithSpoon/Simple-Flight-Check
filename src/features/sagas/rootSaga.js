import { takeLatest } from "redux-saga/effects";
import { handleFlightList } from "./handlers/flights";
import { getFlightList } from "../flightselect/flightSlice";

export function* watcherSaga() {
  yield takeLatest(getFlightList.type, handleFlightList);
}
