import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  medicinesArray: [],
};

export const cartSliseReducer = createSlice({
  name: "cartSliseReducer",
  initialState,
  reducers: {
    addToMedicinesArray: (state, action) => {
      // const { title } = action.payload;
      // state.medicinesArray.push(title);
      state.medicinesArray.push(action.payload);
    },
    resetCherepSliseReducer: (state) => {
      state.cherepNormaNenormaText = "";
      state.cherepNormaNenormaArray = [];
    },
  },
});

export const { addToMedicinesArray, resetCherepSliseReducer } =
  cartSliseReducer.actions;

export default cartSliseReducer.reducer;
