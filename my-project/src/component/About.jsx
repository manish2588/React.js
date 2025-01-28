import { motion } from "framer-motion";
import { NavLink, useLoaderData } from "react-router-dom";

function About() {
  const userData = useLoaderData();

  if (!userData) return <p className="text-center text-xl text-gray-500">Loading...</p>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 2 } }} // Exit animation
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Users</h1>
      <ul className="flex flex-col gap-6 w-[95%]">
        {userData.map((item) => (
          <li
            key={item.id}
            className="bg-white p-5 w-full rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
          >
            <p className="text-lg text-gray-700">
              User:{" "}
              <NavLink
                to={`/about/${item.id}`}
                className="text-indigo-500 hover:underline font-medium"
              >
                {item.name}
              </NavLink>
            </p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default About;