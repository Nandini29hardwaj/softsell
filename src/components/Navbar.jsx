import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa"; 
import logo from "../assets/icon.jpg"; // Update path if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for hamburger toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="bg-gradient-to-r from-indigo-700 to-purple-700 p-4 shadow-lg fixed w-full top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center relative">
        {/* Logo and title */}
        <div className="flex items-center space-x-3">
          <div className="text-white font-bold text-2xl">SoftSell</div>
          {/* Logo image */}
          <img
            src={logo}
            alt="SoftSell Logo"
            className="w-10 h-10 rounded-full"
          />
        </div>

        {/* Hamburger Icon for Small Screen */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl z-50">
            <FaBars />
          </button>
        </div>

        {/* Navigation Links (for larger screens) */}
        <ul
          className={`lg:flex space-x-6 text-white text-lg ${
            isOpen ? "flex" : "hidden"
          } absolute lg:static top-0 left-0 right-0  lg:bg-transparent lg:flex-row lg:space-x-6 lg:mt-0 mt-16 p-4 z-40`}
        >
          {["home", "how", "why", "testimonials", "contact"].map((id, i) => (
            <motion.li
              key={id}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full"
            >
              <a
                href={`#${id}`}
                className="block py-2 text-center hover:underline capitalize"
              >
                {id === "how" ? "How It Works" : id === "why" ? "Why Us" : id}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
