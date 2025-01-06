import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { auth, db } from "./firebase"; // Ensure firebase.js is correctly configured
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          name: name,
        });

        toast.success("User registered successfully!", {
          position: "top-center",
        });

        setEmail("");
        setName("");
        setPassword("");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error(error.message, {
        position: "top-center",
      });
  return (
    <div className="bg-white p-6 rounded shadow-md w-80 mx-auto mt-10">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border px-3 py-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border px-3 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="Create a password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Sign Up
        </button>
      </form>
      <p className="text-sm mt-4">
        Already have an account?{" "}
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "text-green-500 font-bold"
              : "text-blue-500 hover:underline"
          }
        >
          Login
        </NavLink>
      </p>
    </div>
  );
};

export default SignUp;
