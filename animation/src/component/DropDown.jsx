import React, { useState } from "react";

function DropDown() {
  const [value, setValue] = useState("fruits");

  const categoryItems = {
    fruits: ["Mango", "Apple"],
    vegetables: ["Veg 1", "Veg 2"],
    mobiles: ["Iphone", "Samsung"],
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <label>DropDown </label>
      <select id="category" name="category" onChange={handleChange} value={value}>
        <option value="fruits">Fruits</option>
        <option value="vegetables">Vegetables</option>
        <option value="mobiles">Mobiles</option>
      </select>

      <div>
        <h1>Categories: {value}</h1>
        <ul>
          {categoryItems[value]?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default DropDown;
