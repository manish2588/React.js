import { useContext } from "react";
import { DataContext } from "../context/UserContext";
function UseContextAPI() {
    const {name,obj} = useContext(DataContext);
  return (
   <>
   <h1>{name}</h1>
   <p>
    <span>
        Color : {obj.color}
    </span>
    <span>
        Price : {obj.price}
    </span>
   </p>
   </>
  )
}

export default UseContextAPI;