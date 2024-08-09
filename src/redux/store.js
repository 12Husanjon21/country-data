import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./CountriesSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});
