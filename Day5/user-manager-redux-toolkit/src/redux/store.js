import { configureStore } from "@reduxjs/toolkit";
import popUpSliceReducer from "./slices/popUpSlice";
import userListReducer from "./slices/userListSlice";
import currentUserReducer from "./slices/currentUserSlice";
import loadingReducer from "./slices/loadingSlice";

export const store = configureStore({
  reducer: {
    userList: userListReducer,
    popUp: popUpSliceReducer,
    currentUser: currentUserReducer,
    loading: loadingReducer,
  },
});
