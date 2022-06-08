import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    setUsers(_, action) {
      return action.payload;
    },
    removeUser(state, action) {
      const { payload } = action;

      return state.filter((user) => user.id !== payload);
    },
    addUser(state, action) {
      const { payload } = action;
      state.push(payload);
    },
    updateUser(state, action) {
      const { payload } = action;
      const user = state.find((user) => user.id === payload.id);
      if (user) {
        for (const key of Object.keys(user)) {
          user[key] = payload[key];
        }
      }
    },
  },
});

export const { setUsers, removeUser, addUser, updateUser } =
  userListSlice.actions;

export default userListSlice.reducer;
