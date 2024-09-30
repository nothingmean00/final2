// src/components/ServiceCard.jsx

import React, { useState } from "react";
import { ChevronRight, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ServiceCard = ({ icon: Icon, label, description, benefits }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Link to="/services" className="block">
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all flex flex-col cursor-pointer">
        {/* Icon */}
        <Icon size={48} className="text-gray-900 mx-auto mb-4" />

        {/* Label */}
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{label}</h3>

        {/* Description */}
        <p className="text-gray-700 mb-4">{description}</p>

        {/* Expandable Benefits */}
        {benefits && benefits.length > 0 && (
          <div className="mt-auto">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsExpanded(!isExpanded);
              }}
              className="flex items-center text-gray-900 font-semibold focus:outline-none hover:text-gray-700 transition-colors"
            >
              {isExpanded ? (
                <>
                  <span>Hide Details</span>
                  <ChevronUp size={16} className="ml-1" />
                </>
              ) : (
                <>
                  <span>See Details</span>
                  <ChevronRight size={16} className="ml-1" />
                </>
              )}
            </button>
            <AnimatePresence>
              {isExpanded && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="list-disc list-inside text-gray-700 mt-4 space-y-2 overflow-hidden"
                >
                  {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ServiceCard;
