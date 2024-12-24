import { useReducer } from "react";

function UseReducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INC":
        return {...state,count:state.count+1}
      case "DEC":
        return {...state,count:Math.max(state.count-1,0)}
      default:
        return state
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });

  return (
    <>
      <div>
        <h1> Counter</h1>
        <p>{state.count}</p>

        <div>
          <button
            className="bg-blue-300 px-2"
            onClick={()=>dispatch({ type: "INC" })}
          >
            {" "}
            Increment
          </button>
          <button
            className="bg-blue-300 px-2"
            onClick={()=>dispatch({ type: "DEC" })}
          >
            {" "}
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default UseReducer;
