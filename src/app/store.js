import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "../features/sagas/rootSaga";
import authReducer from "../features/auth/authSlice";
import sliderReducer from "../features/slider/sliderSlicer";
import flightReducer from "../features/flightselect/flightSlice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  auth: authReducer,
  slider: sliderReducer,
  flights: flightReducer,
});

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(watcherSaga);
