import React, { useState } from 'react';

function SelectAll() {
  const [isChecked, setIsChecked] = useState({
    cricket: false,
    basketball: false,
    football: false,
  });

  const handleCheck = (event) => {
    const { value, checked } = event.target;
    setIsChecked((prevState) => ({
      ...prevState,
      [value]: checked,
    }));
  };

  const handleSelectAll = () => {
    const allChecked = Object.values(isChecked).every((value) => value);
    const newState = Object.keys(isChecked).reduce((acc, hobby) => {
      acc[hobby] = !allChecked;
      return acc;
    }, {});
    setIsChecked(newState);
  };

  return (
    <div className='m-4'>
      <label>
        <input
          type='checkbox'
          name="hobby"
          value="cricket"
          checked={isChecked.cricket}
          onChange={handleCheck}
        />
        Cricket
      </label>
      <br />
      <label>
        <input
          type='checkbox'
          name="hobby"
          value="basketball"
          checked={isChecked.basketball}
          onChange={handleCheck}
        />
        Basketball
      </label>
      <br />
      <label>
        <input
          type='checkbox'
          name="hobby"
          value="football"
          checked={isChecked.football}
          onChange={handleCheck}
        />
        Football
      </label>
      <br />
      <button onClick={handleSelectAll} className='bg-blue-300 p-2 rounded-lg mt-2'>
        {Object.values(isChecked).every((value) => value) ? "Deselect All" : "Select All"}
      </button>
    </div>
  );
}

export default SelectAll;
