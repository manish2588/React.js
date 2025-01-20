import { createSlice } from "@reduxjs/toolkit";
export const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    task: "",
    edit_input:"",
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
    },
    edit_task:(state,action)=>{
      state.edit_input=action.payload;
    },
    edit_finally:(state,action)=>{
      state.tasks[action.payload]=state.edit_input;
    }
  },
});
export const { updateInput, add_task,delete_task,edit_task,edit_finally} = TodoSlice.actions;
export default TodoSlice.reducer;
