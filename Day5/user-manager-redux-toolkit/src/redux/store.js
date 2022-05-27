import { configureStore } from "@reduxjs/toolkit";
import popUpSliceReducer from "./slices/popUpSlice";
import userListReducer from "./slices/userListSlice";

export const store = configureStore({
  reducer: {
    userList: userListReducer,
    popUp: popUpSliceReducer,
  },
});
