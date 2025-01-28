import { motion } from "framer-motion";

function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 2 } }} // Exit animation
      transition={{ duration: 0.5 }}
    >
      <h1>Our Services</h1>
    </motion.div>
  );
}

export default Services;