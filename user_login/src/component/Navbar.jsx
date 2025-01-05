import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">MyWebsite</div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <button className="text-white focus:outline-none">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex space-x-6 text-white md:static absolute bg-blue-500 w-full md:w-auto left-0 top-full md:top-0 p-4 md:p-0`}
        >
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
          <a href="#order" className="hover:text-gray-300">
            Order
          </a>
          <a href="#login" className="hover:text-gray-300">
            Login
          </a>
          <a href="#signup" className="hover:text-gray-300">
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
