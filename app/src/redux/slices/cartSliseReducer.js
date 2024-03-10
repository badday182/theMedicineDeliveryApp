import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  medicinesArray: [],
};

export const cartSliseReducer = createSlice({
  name: "cartSliseReducer",
  initialState,
  reducers: {
    addToMedicinesArray: (state, action) => {
      const titleToAdd = action.payload;
      // title chacking
      if (!state.medicinesArray.includes(titleToAdd)) {
        state.medicinesArray.push(titleToAdd);
      }
    },
    resetMedicinesArray: (state) => {
      state.medicinesArray = [];
    },
  },
});


export const { addToMedicinesArray, resetMedicinesArray } =
  cartSliseReducer.actions;

export default cartSliseReducer.reducer;
