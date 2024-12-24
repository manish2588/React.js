import { useSelector,useDispatch } from "react-redux"
import { increment,decrement } from "./CounterSlice"
function CounterComponent() {
    const dispatch = useDispatch();
    const {count}=useSelector((state)=>state.counter);
  return (
   <>
     <h1>Counter</h1>
        <h1>Count :{count}</h1>
        <button className="bg-blue-400 px-2 rounded-lg text-xl" onClick={()=>dispatch(increment())}>Increment</button>
        <button className="bg-blue-400 px-2 rounded-lg text-xl" onClick={()=>dispatch(decrement())}>Decrement</button>
   </>
  )
}

export default CounterComponent;