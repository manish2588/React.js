import { useReducer } from "react";

function ToDoList() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_INPUT":
        return { ...state, task: action.value };
      case "ADD_TASK":
        return { ...state, tasks: [...state.tasks, state.task], task: "" };
      case "SET_EDIT_INDEX":
        return { ...state, editingIndex: action.index, editValue: state.tasks[action.index] };
      case "UPDATE_EDIT_VALUE":
        return { ...state, editValue: action.value };
      case "SAVE_EDIT":
        const updatedTasks = [...state.tasks];
        updatedTasks[state.editingIndex] = state.editValue;
        return { ...state, tasks: updatedTasks, editingIndex: null, editValue: "" };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    task: "",
    tasks: [],
    editingIndex: null,
    editValue: "",
  });

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_INPUT",
      value: e.target.value,
    });
  };

  const handleAddTask = () => {
    if (state.task.trim() !== "") {
      dispatch({ type: "ADD_TASK" });
    }
  };

  const handleEditChange = (e) => {
    dispatch({
      type: "UPDATE_EDIT_VALUE",
      value: e.target.value,
    });
  };

  const handleSaveEdit = () => {
    dispatch({ type: "SAVE_EDIT" });
  };

  return (
    <div className="bg-slate-300 mt-2 flex flex-col space-y-4 p-4">
      <div>
        <h1 className="font-medium text-2xl text-center mt-3">TODO APP</h1>
      </div>
      <div className="flex space-x-4 px-2">
        <input
          type="text"
          placeholder="Add Task"
          value={state.task}
          onChange={handleChange}
          className="border rounded p-2 flex-grow"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white p-2 font-medium rounded-lg"
        >
          Add Task
        </button>
      </div>
      <div>
        <h2 className="text-lg font-medium text-center mt-4">Tasks</h2>
        <ul className="list-disc list-inside mt-2">
          {state.tasks.map((task, index) => (
            <li key={index} className="text-gray-700 flex items-center space-x-4">
              {state.editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={state.editValue}
                    onChange={handleEditChange}
                    className="border rounded p-2 flex-grow"
                  />
                  <button
                    onClick={handleSaveEdit}
                    className="bg-green-500 text-white px-2 rounded-md"
                  >
                    OK
                  </button>
                </>
              ) : (
                <>
                  <span>{task}</span>
                  <button
                    onClick={() => dispatch({ type: "SET_EDIT_INDEX", index })}
                    className="bg-blue-200 px-2 rounded-md"
                  >
                    Edit
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
