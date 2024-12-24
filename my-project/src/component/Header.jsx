import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="flex flex-row">
      <ul className="flex flex-row space-x-6 justify-between">
        <li className="p-2 font-medium">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "text-blue-500 font-bold" : "text-gray-700"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="p-2 font-medium">
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? "text-blue-500 font-bold" : "text-gray-700"
            }
          >
            About
          </NavLink>
        </li>
        <li className="p-2 font-medium">
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              isActive ? "text-blue-500 font-bold" : "text-gray-700"
            }
          >
            Services
          </NavLink>
        </li>
        <li className="p-2 font-medium">
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? "text-blue-500 font-bold" : "text-gray-700"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
