import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

const initialState = {
  task: "",
  tasks: [], 
  count: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_INPUT":
      return { ...state, task: action.value };
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, state.task], task: "" };
    case "INC":
      return { ...state, count: state.count + 1 };
    case "DEC":
      return { ...state, count: state.count - 1 };
    case "ADD_FETCHED_TASKS":
      return { ...state, tasks: [...state.tasks, ...action.payload] };
    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const fetchTasks = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
      const data = await response.json();
      const taskTitles = data.map((task) => task.title); // Extract task titles
      dispatch({ type: "ADD_FETCHED_TASKS", payload: taskTitles });
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };
};
