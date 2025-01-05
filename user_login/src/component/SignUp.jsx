import React from 'react';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="bg-white p-6 rounded shadow-md w-80">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="Create a password"
            className="w-full border px-3 py-2 rounded"
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
        Already have an account?{' '}
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? 'text-green-500 font-bold' : 'text-blue-500 hover:underline'
          }
        >
          Login
        </NavLink>
      </p>
    </div>
  );
};

export default SignUp;
