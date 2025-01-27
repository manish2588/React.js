import { motion } from "framer-motion";
import { useState } from "react";

export default function LayoutAnimation() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div   // layout props rakhepaxi transition smooth hunxa
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      style={{
        background: "lightblue",
        borderRadius: "10px",
        width: isExpanded ? 300 : 150,
        height: isExpanded ? 200 : 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      Click to {isExpanded ? "Shrink" : "Expand"}
    </motion.div>
  );
}
