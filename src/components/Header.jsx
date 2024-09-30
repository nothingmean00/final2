// src/components/Header.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const pageLinks = [
  { name: "Services", href: "/services" },
  { name: "Our Approach", href: "/approach" },
  { name: "About Us", href: "/about-us" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileMenuOpen ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className={`text-2xl font-bold ${
            mobileMenuOpen ? "text-gray-900" : "text-white"
          }`}
        >
          Ascend
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8" aria-label="Main Navigation">
          {pageLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`hover:text-gray-700 transition-colors ${
                mobileMenuOpen ? "text-gray-700" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden focus:outline-none ${
            mobileMenuOpen ? "text-gray-900" : "text-white"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden ${
              mobileMenuOpen ? "bg-white" : "bg-gray-800"
            } shadow-lg`}
          >
            <nav
              className="flex flex-col items-center py-4 space-y-2"
              aria-label="Mobile Navigation"
            >
              {pageLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-lg font-medium hover:text-gray-500 transition-colors ${
                    mobileMenuOpen ? "text-gray-700" : "text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
