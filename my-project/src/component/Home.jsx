import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 2 } }} // Exit animation
      transition={{ duration: 0.5 }}
      className="h-screen w-full bg-cover bg-center bg-[url('/images/BG.jpg')]"
    >
      {/* Home content */}
    </motion.div>
  );
}

export default Home;