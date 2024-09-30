// src/components/CategoryFilter.jsx

import React from "react";
import PropTypes from "prop-types";

const CategoryFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-full border ${
            selectedCategory === category
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          } transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900`}
          aria-pressed={selectedCategory === category}
          aria-label={`Filter by ${category}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
};

// Use React.memo to prevent unnecessary re-renders if props don't change
export default React.memo(CategoryFilter);
