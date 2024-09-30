// src/pages/NotFoundPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFoundPage = () => {
  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            404
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl mb-8"
          >
            Page Not Found
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/"
              className="bg-gray-900 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Go to Home
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFoundPage;
