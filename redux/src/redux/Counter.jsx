import { useDispatch, useSelector } from "react-redux";


function Counter() {
  const count=useSelector((state)=>state.count);
  const dispatch=useDispatch();
  return (
   <>
    <h1> Count :{count}</h1>
    <button className="bg-blue-400 px-2 rounded-lg text-xl" onClick={()=>dispatch({type:"INC"})}> Increment</button>
    <button className="bg-blue-400 px-2 rounded-lg text-xl"onClick={()=>dispatch({type:"DEC"})}> Decrement</button>
   </>
  )
}

export default Counter;