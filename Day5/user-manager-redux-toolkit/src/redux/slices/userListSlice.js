import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    first_name: "Stefan",
    last_name: "Radusi",
    email: "radusi.stefan@gmail.com",
  },
  {
    id: 2,
    first_name: "Corina",
    last_name: "rus",
    email: "rus.corina@gmail.com",
  },
];

export const counterSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
