import { useDispatch, useSelector } from "react-redux";
import { updateInput, add_task, delete_task, edit_task, edit_finally } from "./ToDoSlice";
import { useState } from "react";

function ToDoComponent() {
  const dispatch = useDispatch();
  const [editingIndex, setEditingIndex] = useState(null); // Track which task is being edited
  const { tasks, task, edit_input } = useSelector((state) => state.todo);

  const handleEditClick = (index, currentTask) => {
    setEditingIndex(index); // Set the task being edited
    dispatch(edit_task(currentTask)); // Populate the edit input
  };

  const handleFinally = (index) => {
    if (edit_input.trim()) {
      dispatch(edit_finally(index));
      setEditingIndex(null); // Reset editing state
    }
  };

  return (
    <>
      <h1>TODO APP</h1>
      <div className="p-10">
        <input
          type="text"
          onChange={(e) => dispatch(updateInput(e.target.value))}
          value={task}
          className="border border-red-300"
          placeholder="Add a task..."
        />
        <button onClick={() => dispatch(add_task())}>Add Task</button>
      </div>
      <div className="bg-slate-300 p-10 m-10">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className="bg-blue-400 p-2 flex space-x-4">
              <span>{task}</span>
              <button
                className="bg-blue-500 p-1 rounded-lg"
                onClick={() => dispatch(delete_task(index))}
              >
                Delete
              </button>
              <button
                className="ml-4 bg-green-600 px-2 rounded-lg"
                onClick={() => handleEditClick(index, task)}
              >
                Edit
              </button>
              {editingIndex === index && (
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    className="border border-red-300"
                    value={edit_input}
                    onChange={(e) => dispatch(edit_task(e.target.value))}
                  />
                  <button
                    className="ml-4 bg-green-600 px-2 rounded-lg"
                    onClick={() => handleFinally(index)}
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No tasks available. Add some tasks!</p>
        )}
      </div>
    </>
  );
}

export default ToDoComponent;
