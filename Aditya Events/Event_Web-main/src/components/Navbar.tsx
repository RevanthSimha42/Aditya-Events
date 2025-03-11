import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logo from './public/favicon-96x96.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all ${
        scrolled
          ? "bg-white bg-opacity-90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
      style={{
        transition: "all 0.3s ease",
      }}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* <PartyPopper
                size={32}
                className="text-amber-500 mr-2"
                strokeWidth={1.5}
              /> */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src={logo}
                alt="logo"
              />
              <h3 className="text-xl font-serif font-bold text-gradient-amber-pink">
                Aditya Events
              </h3>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md-flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-all hover-text-amber-500 ${
                  location.pathname === link.path
                    ? "text-amber-500 border-b-2 border-amber-500"
                    : scrolled
                    ? "text-gray-800"
                    : "text-gray-800"
                }`}
                style={{
                  transition: "all 0.3s ease",
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn btn-primary text-lg hover-shadow-lg hover-scale-105"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md-hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus-outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md-hidden mt-4 bg-white rounded-lg shadow-lg p-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium px-4 py-2 rounded-md transition-colors ${
                    location.pathname === link.path
                      ? "bg-amber-50 text-amber-500"
                      : "text-gray-800 hover-bg-amber-50 hover-text-amber-500"
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{
                    transition: "all 0.3s ease",
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
