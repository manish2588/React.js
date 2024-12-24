import { configureStore, createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  task: "", // For holding the current input value
  tasks: [], // Array to store tasks
  count: 0,
};

// Task Slice
const taskSlice = createSlice({
  name: "taskManager",
  initialState,
  reducers: {
    UPDATE_INPUT: (state, action) => {
      state.task = action.payload; // Update the current input value
    },
    ADD_TASK: (state) => {
      if (state.task.trim()) {
        state.tasks.push(state.task); // Add the input task to the tasks array
        state.task = ""; // Clear the input field
      }
    },
    ADD_FETCHED_TASKS: (state, action) => {
      state.tasks = [...state.tasks, ...action.payload]; // Add fetched tasks
    },
    INC: (state) => {
      state.count = state.count + 1;
    },
    DEC: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { UPDATE_INPUT, ADD_TASK, INC, DEC } = taskSlice.actions;

// Configure Store
export const store2 = configureStore({
  reducer: {
    taskReducer: taskSlice.reducer,
  },
});
