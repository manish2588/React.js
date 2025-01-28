import { motion } from "framer-motion";
import { useLoaderData } from "react-router-dom";

function User() {
  const userData = useLoaderData();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 2 } }} // Exit animation
      transition={{ duration: 0.5 }}
    >
      <h1>User Details</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </motion.div>
  );
}

export default User;