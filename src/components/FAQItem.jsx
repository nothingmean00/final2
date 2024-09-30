// src/components/FAQItem.jsx

import React, { useState } from "react";
import PropTypes from "prop-types";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ id, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function
  const toggleFAQ = () => {
    setIsOpen((prev) => !prev);
  };

  // Handle keyboard accessibility
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFAQ();
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <button
        className="w-full flex justify-between items-center text-left focus:outline-none"
        onClick={toggleFAQ}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
        id={`faq-question-${id}`}
        tabIndex={0}
      >
        <h3 className="text-xl font-semibold">{question}</h3>
        {isOpen ? (
          <ChevronUp size={24} aria-hidden="true" />
        ) : (
          <ChevronDown size={24} aria-hidden="true" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${id}`}
            className="mt-4 text-gray-600"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            role="region"
            aria-labelledby={`faq-question-${id}`}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

FAQItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FAQItem;
