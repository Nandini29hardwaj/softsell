import React, { useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/bg-hero.jpg";

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="home"
      className={`pt-24 min-h-screen flex flex-col justify-center items-center text-white text-center p-8 transition-all duration-700 ${
        hovered
          ? `bg-cover bg-center`
          : `bg-gradient-to-r from-blue-500 to-pink-400`
      }`}
      style={hovered ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Resell Unused Licenses in One Click
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl max-w-2xl mb-8 text-white/90"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Unlock the value of your unused software — simple, fast, and secure.
      </motion.p>

      <motion.button
        className="bg-indigo-700 text-white px-8 py-4 rounded-full text-lg shadow-xl hover:bg-indigo-800 transition transform"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Sell My Licenses
      </motion.button>
    </section>
  );
};

export default Hero;
