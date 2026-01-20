import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/cryptoglancrlogo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll to adjust navbar styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FFFFFF]/90 shadow-md backdrop-blur-xl py-2"
          : "bg-[#CFE9FB] border-b border-[#E1EEF7] py-3"
      }`}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-6 w-full">
        {/* Logo */}
        <Link to="/">
          <motion.div
            className="flex items-center gap-2 cursor-pointer select-none"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <img
              src={logo}
              alt="CryptoGlance Logo"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 object-contain"
            />

            {/* Text Logo */}
            <span className="font-bold text-[15px] sm:text-[17px] md:text-[19px] tracking-tight text-[#04172C] leading-none">
              Crypto<span className="text-[#6CB6E8]">Glancr</span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation (placeholder for future links) */}
        <div className="hidden sm:flex items-center gap-6">
          {/* Example future links */}
          {/* 
          <Link className="text-[#04172C] hover:text-[#6CB6E8] transition">
            Features
          </Link>
          */}
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
            className="ml-1"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-[#04172C]" />
            ) : (
              <Menu className="w-6 h-6 text-[#04172C]" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-[#FFFFFF] border-t border-[#E1EEF7] shadow-md px-4 py-4"
          >
            <div className="flex flex-col gap-3">
              {/* Example future mobile links */}
              {/* 
              <Link
                to="/features"
                onClick={() => setMenuOpen(false)}
                className="text-[#04172C] font-medium"
              >
                Features
              </Link>
              */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

