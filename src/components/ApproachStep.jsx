// src/components/ApproachStep.jsx

import React from "react";
import PropTypes from "prop-types";

const ApproachStep = ({ step }) => {
  const { icon: Icon, title, description, summaryPoints } = step;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
      {/* Icon and Title */}
      <div className="flex items-center mb-4">
        <Icon size={48} className="text-gray-900 mr-4" />
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
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
  );
};

ApproachStep.propTypes = {
  step: PropTypes.shape({
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    summaryPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ApproachStep;
