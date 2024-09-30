// src/components/StatCard.jsx

import React from "react";

const StatCard = ({ icon: Icon, label }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
      {/* Icon */}
      {Icon && (
        <div className="flex items-center justify-center mb-4">
          <Icon size={48} className="text-gray-900" />
        </div>
      )}

      {/* Label */}
      <p className="text-xl font-semibold text-center">{label}</p>
    </div>
  );
};

export default StatCard;
