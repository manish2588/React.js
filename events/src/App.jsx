import { useState, useRef } from "react";

import HorizontalSlider from "./framerMotion/HorizontalSlider";
import LayoutAnimation from "./framerMotion/LayoutAnimation";
import ChildrenAnimation from "./framerMotion/ChildrenANimation";

function App() {
  const [bgColor, setBgColor] = useState("white");
  const [isPressed, setIsPressed] = useState(false);
  const startY = useRef(0);
  const lastY = useRef(0); // To store the last position to check the distance

  const colors = [
    "lightblue",
    "lightgreen",
    "lightcoral",
    "lightgoldenrodyellow",
  ];
  const [colorIndex, setColorIndex] = useState(0);

  const handleMouseDown = (e) => {
    setIsPressed(true);
    startY.current = e.clientY; // Initial mouse Y position
    lastY.current = e.clientY; // Reset last Y position
  };

  const handleMouseMove = (e) => {
    if (!isPressed) return;

    const distanceMoved = lastY.current - e.clientY; // Calculate the distance moved upwards

    if (distanceMoved >= 80) {
      // Change color only if moved at least 20px up
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      setBgColor(colors[(colorIndex + 1) % colors.length]);
      lastY.current = e.clientY; // Update last Y position
    }
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <div className="App">
      <h1>Mouse Long Press and Move Upwards Example</h1>
      <div
        style={{
          width: "300px",
          height: "200px",
          backgroundColor: bgColor,
          transition: "background-color 0.5s ease", // Smooth transition
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        Long press and move upward over me
      </div>
      <LayoutAnimation/>
      <ChildrenAnimation/>
      <HorizontalSlider/>
    </div>
  );
}

export default App;
