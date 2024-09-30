// src/components/TeamMember.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Briefcase,
  Award,
} from "lucide-react";

const TeamMember = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileHover={{ scale: 1.02 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:shadow-xl cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Header */}
      <div className="p-6 flex flex-col items-center">
        {/* Member Image */}
        <div className="w-32 h-32 mb-4">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <h3 className="text-xl font-semibold text-gray-900 text-center mb-1">
          {member.name}
        </h3>
        <p className="text-gray-600 text-center mb-2">{member.role}</p>

        {/* Expand/Collapse Indicator */}
        <div className="flex justify-center">
          {isExpanded ? (
            <ChevronUp size={24} className="text-gray-600" />
          ) : (
            <ChevronDown size={24} className="text-gray-600" />
          )}
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-6"
        >
          {member.education && (
            <div className="flex items-start mb-2">
              <GraduationCap
                size={20}
                className="text-gray-900 mr-2 flex-shrink-0 mt-1"
              />
              <p className="text-gray-700">{member.education}</p>
            </div>
          )}
          {member.experience && (
            <div className="flex items-start mb-2">
              <Briefcase
                size={20}
                className="text-gray-900 mr-2 flex-shrink-0 mt-1"
              />
              <p className="text-gray-700">{member.experience}</p>
            </div>
          )}
          {member.achievements && (
            <div className="flex items-start">
              <Award
                size={20}
                className="text-gray-900 mr-2 flex-shrink-0 mt-1"
              />
              <p className="text-gray-700">{member.achievements}</p>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default TeamMember;
