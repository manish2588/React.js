
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_INPUT, ADD_TASK } from "./store_rtk"; // Adjust path as needed

const TodoApp = () => {
  const dispatch = useDispatch();
  const { task, tasks } = useSelector((state) => state.taskReducer);

  const handleInputChange = (e) => {
    dispatch(UPDATE_INPUT(e.target.value)); // Update input value
  };

  const handleAddTask = () => {
    dispatch(ADD_TASK()); 
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
