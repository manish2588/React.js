import { createSlice } from "@reduxjs/toolkit";
export const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    task: "",
    tasks: [],
  },
  reducers: {
    updateInput: (state, action) => {
      state.task = action.payload;
    },
    add_task: (state) => {
      if (state.task.trim()) {
        state.tasks.push(state.task);
        state.task = "";
      }
    },
    delete_task:(state,action)=>{
       state.tasks=state.tasks.filter((item,index)=>(index!==action.payload))
      
    }
  },
});
export const { updateInput, add_task,delete_task } = TodoSlice.actions;
export default TodoSlice.reducer;
