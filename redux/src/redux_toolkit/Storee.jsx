// store.js (or wherever your store configuration is)
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";  // Import the reducer
import todoReducer from "./ToDoSlice"
export const store_3 = configureStore({
  reducer: {
    counter: counterReducer,  // Assign the reducer to the state key `counter`
    todo:todoReducer,
  },
});
