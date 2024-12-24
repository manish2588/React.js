import { PracContext } from "../context/Context_Two";
import { useContext } from "react";
function PracApi() {
    const { name, obj1 } = useContext(PracContext);
  return (
   <>
  <div>
  Name:{name}
    <br />
    Color:{obj1.color}
  </div>
   </>
  )
}

export default PracApi;