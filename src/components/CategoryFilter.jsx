// src/components/CategoryFilter.jsx

import React from 'react';
import PropTypes from 'prop-types';

/**
 * CategoryFilter Component
 * Renders a list of category buttons for filtering resources.
 *
 * Props:
 * - categories: Array of category names (strings).
 * - selectedCategory: Currently selected category (string).
 * - setSelectedCategory: Function to update the selected category.
 */

const CategoryFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Resource Categories"
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-full border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 ${
            selectedCategory === category
              ? 'bg-gray-900 text-white border-gray-900'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
          }`}
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
