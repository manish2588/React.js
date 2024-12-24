import { useDispatch, useSelector } from "react-redux";
import { updateInput, add_task,delete_task } from "./ToDoSlice";

function ToDoComponent() {
  const dispatch = useDispatch();
  const { tasks, task } = useSelector((state) => state.todo);

  return (
    <>
      <h1>TODO APP</h1>
      <div>
        <input
          type="text"
          onChange={(e) => dispatch(updateInput(e.target.value))}
          value={task}
        />
        <button onClick={() => dispatch(add_task())}>Add Task</button>
      </div>
      <div className="bg-slate-300 p-2 ">
        {tasks.length > 0 &&
          tasks.map((task, index) => {
            return <div key={index} className=" bg-blue-4oo p-2 flex space-x-4 ">
                <span>{task}</span>
                <span> <button className="bg-blue-500 p-1 rounded-lg" onClick={()=>dispatch(delete_task(index))}> Delete</button></span>
            </div>;
          })}
      </div>
    </>
  );
}

export default ToDoComponent;