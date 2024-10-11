// src/components/ResourceCard.jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Clock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ResourceCard = ({ resource, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Generate an excerpt from the content (first 300 characters)
  const excerpt = resource.content.substring(0, 300) + '...';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
      }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform cursor-pointer hover:shadow-lg"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Header */}
      <div className="p-6">
        <h4 className="text-xl md:text-2xl font-semibold mb-2 leading-tight text-gray-900">
          {resource.title}
        </h4>
        <span className="inline-block bg-blue-100 text-blue-800 text-xs md:text-sm px-2 py-1 rounded-full mb-4">
          {resource.category}
        </span>
        <div className="flex items-center text-gray-500 mb-4">
          <Clock size={16} className="mr-2" aria-hidden="true" />
          <span className="text-sm md:text-base">{resource.readTime}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-900 font-semibold">Read More</span>
          <ChevronRight
            size={20}
            className={`transition-transform ${
              isExpanded ? 'rotate-90' : 'rotate-0'
            }`}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-6 text-gray-700"
        >
          <p className="text-sm md:text-base">{excerpt}</p>
          <Link
            to={`/resources/${resource.id}`}
            className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center mt-4"
            aria-label={`Read more about ${resource.title}`}
            onClick={(e) => e.stopPropagation()} // Prevent card toggle when clicking link
          >
            Go to Resource
            <ChevronRight size={16} className="ml-1" aria-hidden="true" />
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

ResourceCard.propTypes = {
  resource: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default React.memo(ResourceCard);
