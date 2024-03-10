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
    removeFromMedicinesArray: (state, action) => {
      const titleToRemove = action.payload;
      state.medicinesArray = state.medicinesArray.filter(item => item !== titleToRemove);
  },
    resetMedicinesArray: (state) => {
      state.medicinesArray = [];
    },
  },
});


export const { addToMedicinesArray, resetMedicinesArray, removeFromMedicinesArray } =
  cartSliseReducer.actions;

export default cartSliseReducer.reducer;
