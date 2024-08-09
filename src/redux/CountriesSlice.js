import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCountries: [],
  selectedCountries:
    JSON.parse(localStorage.getItem("selectedCountries")) || [],
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.allCountries = action.payload;
    },
    toggleSelectCountry: (state, action) => {
      const country = action.payload;
      const isSelected = state.selectedCountries.find(
        (c) => c.cca3 === country.cca3
      );
      if (isSelected) {
        state.selectedCountries = state.selectedCountries.filter(
          (c) => c.cca3 !== country.cca3
        );
      } else {
        state.selectedCountries.push(country);
      }
      localStorage.setItem(
        "selectedCountries",
        JSON.stringify(state.selectedCountries)
      );
    },
  },
});

export const { setCountries, toggleSelectCountry } = countriesSlice.actions;

export default countriesSlice.reducer;
