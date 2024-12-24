import { useSelector, useDispatch } from 'react-redux';
 // Import the thunk action
import { fetchTasks } from './Store';
const TaskManager = () => {
  const task = useSelector((state) => state.task);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch({ type: 'UPDATE_INPUT', value: e.target.value });
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      dispatch({ type: 'ADD_TASK' });
    }
  };

  const handleFetchTasks = () => {
    dispatch(fetchTasks());
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Task Manager</h1>
      <div className="mb-4">
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Enter a task"
          className="border p-2 mr-2"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 mr-2"
        >
          Add Task
        </button>
        <button
          onClick={handleFetchTasks}
          className="bg-green-500 text-white px-4 py-2"
        >
          Fetch Tasks
        </button>
      </div>
      <ul className="list-disc pl-5">
        {tasks.map((t, index) => (
          <li key={index} className="mb-1">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
