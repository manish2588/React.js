import { useState } from "react";

function RenderingList() {
  const [arr, setArr] = useState(["A", "B", "C"]);
  
  const [checkvalue, setCheckedValue] = useState({});
  const handleDelete = (id) => {
    const newAry = arr.filter((_, index) => index !== id);
    const newCheckvalue = { ...checkvalue };
    delete newCheckvalue[id]; // Remove the checkbox state for the deleted item
    setArr(newAry);
    setCheckedValue(newCheckvalue);
  };
  const handleCheckbox = (index) => {
    setCheckedValue((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the checkbox state
      
    }));
   
  };
  return (
    <>
      <h1>Rendering List</h1>
      <div>
        <ul>
          {arr.map((item, index) => {
            return (
              <li key={index}>
                <input
                  type="checkbox"
                  onClick={() => handleCheckbox(index)}
                  checked={!!checkvalue[index]}
                />
                {item}
                {!!checkvalue[index] && (
                  <button onClick={() => handleDelete(index)}>Delete</button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default RenderingList;
