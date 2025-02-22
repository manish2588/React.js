import Course1 from "./course/Course1";
import Course2 from "./course/Course2";
import Course3 from "./course/Course3";
import { useState } from 'react';
import { motion } from "framer-motion"
function ReplacingDiv() {
  const [arr, setArr] = useState([<Course1 />, <Course2 />, <Course3 />]);
  const [selectedIdx, setSelectedIdx] = useState(0); // Track the currently selected index

  const handleClick = (index) => {
    if (index !== selectedIdx) { // Only swap if clicking a different element
      setSelectedIdx(index); // Update selected index
    }
  };

  return (
    <motion.main className="bg-blue-400 flex h-96 space-x-4 max-w-full">
      {arr.map((course, index) => (
        <motion.div
          key={index}
          layout
          layoutId={index}
          className={`
            ${index === selectedIdx && "bg-red-300 basis-3/6 cursor-not-allowed"} // Unclickable and large
            ${index !== selectedIdx && "bg-slate-200 basis-1/6 cursor-pointer"} // Clickable and small
          `}
          onClick={() => handleClick(index)}
        >
          {course}
        </motion.div>
      ))}
    </motion.main>
  );
}

export default ReplacingDiv;