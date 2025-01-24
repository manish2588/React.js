import { duration } from "@mui/material";
import { motion } from "framer-motion";

function FirstAnimation() {
  return (
    <>
   <main>
   <motion.h1 className="text-center text-2xl"
   initial={{ scale: 0 }} animate={{ scale: 1 }}
   >Animation</motion.h1>
      <motion.div
      initial={{ scale: 0, x: 0 }} // Initial state
      animate={{ scale: 1, x: 0 }} // End state after animation
      whileTap={{
        x: [0, 50, 0], // Moves to 50px and back to 0 during tap
        transition: { duration: 1 }, // Smooth transition for the whileTap effect
      }}
      className="h-40 w-36 bg-red-300"
    >
      {/* Add content here if needed */}
    </motion.div>
    
   </main>
    </>
  )
}

export default FirstAnimation;