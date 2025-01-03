import { createSlice } from "@reduxjs/toolkit";
export const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count =Math.max(0,state.count-1);
    },
  },
});

export const { increment, decrement } = CounterSlice.actions;

export default CounterSlice.reducer;
