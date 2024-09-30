// src/components/CoreValue.jsx

import React from "react";

const CoreValue = ({ value }) => {
  const Icon = value.icon;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
      <Icon size={48} className="text-gray-900 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {value.title}
      </h3>
      <p className="text-gray-700">{value.description}</p>
    </div>
  );
};

export default CoreValue;
