import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div className="bg-white p-6 rounded shadow-md w-80">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
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
            placeholder="Enter your password"
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      <p className="text-sm mt-4">
        Not registered?{' '}
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive ? 'text-green-500 font-bold' : 'text-blue-500 hover:underline'
          }
        >
          Sign Up
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
