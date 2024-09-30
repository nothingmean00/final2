// src/components/DetailedServiceCard.jsx

import React from "react";
import { Link } from "react-router-dom";

const DetailedServiceCard = ({
  icon: Icon,
  label,
  description,
  summaryPoints,
}) => {
  return (
    <Link to="/contact" className="block">
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col hover:shadow-xl transition-shadow cursor-pointer">
        {/* Icon and Title */}
        <div className="flex items-center mb-4">
          <Icon size={48} className="text-gray-900 mr-4" />
          <h3 className="text-2xl font-semibold text-gray-900">{label}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4">{description}</p>

        {/* Summary Points */}
        {summaryPoints && summaryPoints.length > 0 && (
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            {summaryPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
};

export default DetailedServiceCard;
