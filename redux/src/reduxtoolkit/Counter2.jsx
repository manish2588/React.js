import { useSelector, useDispatch } from "react-redux";
import { INC,DEC} from "./store_rtk"; 
function Counter2() {
    const dispatch = useDispatch();
    const { count } = useSelector((state) => state.taskReducer);
  
  return (
   <>
    <h1> Count :{count}</h1>
    <button className="bg-blue-400 px-2 rounded-lg text-xl" onClick={()=>dispatch(INC())}> Increment</button>
    <button className="bg-blue-400 px-2 rounded-lg text-xl"onClick={()=>dispatch(DEC())}> Decrement</button>
   </>
   
  )
}

export default Counter2;