import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  first_name: "",
  last_name: "",
  email: "",
};

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      const { payload } = action;

      for (const key of Object.keys(payload)) {
        state[key] = payload[key];
      }
    },
    setField(state, action) {
      const {
        payload: { name, value },
      } = action;

      state[name] = value;
    },
    resetCurrentUser(state) {
      for (const key of Object.keys(initialState)) {
        state[key] = initialState[key];
      }
    },
  },
});

export const { setField, setCurrentUser, resetCurrentUser } =
  currentUserSlice.actions;

export default currentUserSlice.reducer;
