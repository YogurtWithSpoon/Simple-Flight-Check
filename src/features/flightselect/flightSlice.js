import { createSlice } from "@reduxjs/toolkit";

export const fligthSlice = createSlice({
  name: "flights",
  initialState: {
    flightsList: [],
    favorite: {},
  },
  reducers: {
    getFlightList: () => {},
    setFlightList: (state, action) => {
      const flightsData = action.payload;
      return { ...state, flightsList: flightsData };
    },
    setFavorite: (state, action) => {
      let { cost, date, from, to, time } = action.payload;
      let currentFavorite = localStorage.getItem("favoriteFlights");
      currentFavorite = currentFavorite ? JSON.parse(currentFavorite) : {};
      if (currentFavorite[date] && currentFavorite[date][cost]) {
        delete currentFavorite[date][cost];
      } else {
        currentFavorite[date] = {
          ...currentFavorite[date],
          [cost]: { from, to, time },
        };
      }
      localStorage.setItem("favoriteFlights", JSON.stringify(currentFavorite));
    },
    getFavorite: (state) => {
      let currentFavorite = localStorage.getItem("favoriteFlights");
      currentFavorite = currentFavorite ? JSON.parse(currentFavorite) : {};
      return { ...state, favorite: currentFavorite };
    },
  },
});

export const {
  getFlightList,
  setFlightList,
  setFavorite,
  getFavorite,
} = fligthSlice.actions;

export const selectFlights = (state) => state.flights.flightsList;
export const selectFavorite = (state) => state.flights.favorite;

export default fligthSlice.reducer;
