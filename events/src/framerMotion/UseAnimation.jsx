import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function App() {
  const controls = useAnimation();

  useEffect(() => {
    async function sequence() {
      await controls.start({ x: 100 ,scale:1});
      await controls.start({ y: 100,scale:0.5 });
      await controls.start({ x: 200 ,scale:1 });
      await controls.start({ y: 200,scale:0.5 });
    }

    sequence();
  }, [controls]);

  return (
    <motion.div
      layout
      transition={{duration:0.5}}
      animate={controls}
      initial={{ x: 0, y: 0, scale: 1 }}
      style={{
        background: "lightblue",
        width: 100,
        height: 100,
        borderRadius: 10,
      }}
    />
  );
}
