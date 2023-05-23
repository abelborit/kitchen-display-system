import { SectionTable } from "@/modals";
import { createSlice } from "@reduxjs/toolkit";

const initialState: SectionTable = { numberTable: 0 };

export const kdsSectionTableSlice = createSlice({
  name: "kdsSectionTable",

  initialState: initialState,

  reducers: {
    addTableNumber: (state, action) => {
      state.numberTable = action.payload + 1;
    },

    restTableNumber: (state, action) => {
      state.numberTable = action.payload === 0 ? 0 : action.payload - 1;
    },

    removeTableNumber: (state) => {
      state.numberTable = 0;
    },
  },
});

export const { addTableNumber, restTableNumber, removeTableNumber } =
  kdsSectionTableSlice.actions;
