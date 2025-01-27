import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5, // Delay before child animations start
      staggerChildren: 0.2, // Time between each child's animation
    },
  },
};

const item = {
    hidden: { opacity: 0, scaleX: 0, originX: 0 },
    visible: { opacity: 1, scaleX: 1, originX: 0 },
  };

export default function ChildrenAnimation() {
  return (
    <motion.div
     layout
      variants={container}
      initial="hidden"
      animate="visible"
       style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          variants={item}
          style={{
            background: "lightblue",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          Item {i}
        </motion.div>
      ))}
    </motion.div>
  );
}
