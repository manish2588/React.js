import { useRef, useState } from "react";

const UseRef = () => {
  const clickCount = useRef(0);
  const [visibleClicks, setVisibleClicks] = useState(0);

  const handleClick = () => {
    clickCount.current += 1; // Update ref without causing re-render
    setVisibleClicks(clickCount.current); // Show the updated count
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>Total Clicks: {visibleClicks}</p>
    </div>
  );
};

export default UseRef;
