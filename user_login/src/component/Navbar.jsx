import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">MyWebsite</div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-6 text-white absolute md:static left-0 top-full md:top-0 w-full md:w-auto bg-blue-500 md:bg-transparent transition-all duration-300 ease-in-out p-4 md:p-0`}
        >
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? 'text-yellow-300 font-bold' : 'hover:text-gray-300'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-yellow-300 font-bold' : 'hover:text-gray-300'
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/order"
            className={({ isActive }) =>
              isActive ? 'text-yellow-300 font-bold' : 'hover:text-gray-300'
            }
          >
            Order
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? 'text-yellow-300 font-bold' : 'hover:text-gray-300'
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? 'text-yellow-300 font-bold' : 'hover:text-gray-300'
            }
          >
            Signup
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? 'text-yellow-300 font-bold' : 'hover:text-gray-300'
            }
          >
            Signup
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
