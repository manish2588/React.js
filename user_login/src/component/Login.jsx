import { useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "./firebase"; // Import Firebase auth instance
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth"; // Firebase sign-in methods
import { toast, ToastContainer } from "react-toastify"; // Toastify for notifications
import "react-toastify/dist/ReactToastify.css"; // Toastify CSS for styles
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      navigate("/profile");
      console.log("Login successful:", user);
      toast.success("Login successful!", { position: "top-center" });
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Invalid email or password!", { position: "top-center" });
    }

    setEmail("");
    setPassword("");
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider(); // Google Auth provider
    try {
      const result = await signInWithPopup(auth, provider); // Sign in with Google
      const user = result.user; // Get the signed-in user

      console.log("Google sign-in successful:", user);
      navigate("/profile");
      toast.success("Login with Google successful!", {
        position: "top-center",
      });
    } catch (error) {
      console.error("Error during Google sign-in:", error.message);
      toast.error("Google sign-in failed. Please try again.", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-80 mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
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
            placeholder="Enter your password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      {/* Google Sign-In Button */}
      <button
        onClick={handleGoogleSignIn}
        className="w-full bg-red-500 text-white py-2 mt-4 rounded hover:bg-red-600"
      >
        Sign In with Google
      </button>
      <ToastContainer /> {/* Required for displaying toast messages */}
      <p className="text-sm mt-4">
        Not registered?{" "}
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive
              ? "text-green-500 font-bold"
              : "text-blue-500 hover:underline"
          }
        >
          Sign Up
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
