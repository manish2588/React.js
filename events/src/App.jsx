import { useState, useRef } from "react";
import { motion } from "framer-motion";
import HorizontalSlider from "./framerMotion/HorizontalSlider";
import LayoutAnimation from "./framerMotion/LayoutAnimation";
import ChildrenAnimation from "./framerMotion/ChildrenANimation";
import { LayoutGroup } from "framer-motion";
import LayoutId from "./framerMotion/LayoutId";
import Drag from "./framerMotion/Drag";
function App() {
  const [bgColor, setBgColor] = useState("white");
  const [isPressed, setIsPressed] = useState(false);
  const startY = useRef(0);
  const lastY = useRef(0); // To store the last position to check the distance
  const [isHovered, setIsHovered] = useState(false);
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
  <LayoutGroup>
      <motion.div
      className="App"
      layout // Ensure smooth transition for everything inside
      transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth transition for all layout changes
    >
      <h1>Mouse Long Press and Move Upwards Example</h1>
      <motion.div
        style={{
          width: "300px",
          height: "200px",
          backgroundColor: bgColor,
          transition: "background-color 0.5s ease", // Smooth transition for color change
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        layout // Apply layout here for smooth resizing
      >
        Long press and move upward over me
      </motion.div>

    
        {" "}
        <LayoutAnimation />
        {/* Ensure smooth transition for the content below */}
        <ChildrenAnimation />
        <HorizontalSlider />
      
    </motion.div>
    <LayoutId/>
    <div className="w-32 mb-16 relative">
      {/* Text */}
      <p className="relative w-full z-0">Contact</p>

      {/* Animated Background */}
      <motion.p
        className="absolute w-full h-full z-10 bg-blue-600 top-0 left-0"
        initial={{ scaleX: 1 }}
        animate={isHovered ? { scaleX: 0 } : { scaleX: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ transformOrigin: "right" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      />
    </div>
    <Drag/>
  </LayoutGroup>
  
  );
}

export default App;
