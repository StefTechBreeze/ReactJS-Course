import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

export const popUpSlice = createSlice({
  name: "pop-up",
  initialState,
  reducers: {
    show: (state) => {
      state.show = true;
    },
    hide: (state) => {
      state.show = false;
    },
  },
});

export const { show, hide } = popUpSlice.actions;

export default popUpSlice.reducer;
