// src/pages/ResourcesPage.jsx

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Search, Clock, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import CategoryFilter from "../components/CategoryFilter"; // Import the CategoryFilter component

// Sample data for resource categories
const resourceCategories = [
  "All",
  "Application Guides",
  "Essay Writing Tips",
  "Test Preparation",
  "University Profiles",
  "Admissions Timeline",
  // Add more categories as needed
];

// Sample data for resources
const allResources = [
  {
    id: 1,
    title: "Crafting a Standout Common App Essay",
    category: "Essay Writing Tips",
    readTime: "8 min read",
    content: "Detailed content for crafting a standout Common App Essay...",
  },
  {
    id: 2,
    title: "SAT vs ACT: Which Test is Right for You?",
    category: "Test Preparation",
    readTime: "10 min read",
    content: "Comprehensive comparison between SAT and ACT...",
  },
  {
    id: 3,
    title: "Building a Compelling Extracurricular Profile",
    category: "Application Guides",
    readTime: "12 min read",
    content: "Strategies for developing a strong extracurricular profile...",
  },
  // Add more resources here
];

// Resource Card Component
const ResourceCard = ({ resource, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileHover={{ scale: 1.02 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform cursor-pointer hover:shadow-xl"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Header */}
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-2">{resource.title}</h4>
        <p className="text-gray-600 mb-4">{resource.category}</p>
        <div className="flex items-center text-gray-500 mb-4">
          <Clock size={16} className="mr-2" aria-hidden="true" />
          <span>{resource.readTime}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-900 font-semibold">Read More</span>
          <ChevronRight
            size={20}
            className={`transition-transform ${
              isExpanded ? "rotate-90" : "rotate-0"
            }`}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-6 text-gray-700"
        >
          <p>{resource.content}</p>
          <Link
            to={`/resources/${resource.id}`}
            className="text-gray-900 font-semibold hover:text-gray-700 inline-flex items-center mt-4"
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

// Main Resources Page Component
const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResources = allResources.filter(
    (resource) =>
      (selectedCategory === "All" || resource.category === selectedCategory) &&
      resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Resources - Ascend Consulting</title>
        <meta
          name="description"
          content="Explore our comprehensive collection of college admission resources to help you navigate your academic journey with confidence."
        />
      </Helmet>

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative pt-32 pb-12 flex items-center justify-center overflow-hidden text-center"
          style={{
            background: "linear-gradient(135deg, #1F2937 0%, #374151 100%)",
          }}
          aria-labelledby="resources-hero-heading"
        >
          {/* Overlay for better text readability */}
          <div
            className="absolute inset-0 bg-black opacity-30"
            aria-hidden="true"
          ></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.h2
              id="resources-hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Resources
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Explore our comprehensive collection of college admission
              resources to help you navigate your academic journey with
              confidence.
            </motion.p>
          </div>
        </section>

        {/* Search and Category Section */}
        <section
          className="py-20 bg-gray-50"
          aria-labelledby="resources-search-category-heading"
        >
          <div className="container mx-auto px-6">
            {/* Search Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12 max-w-2xl mx-auto"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  aria-label="Search resources"
                />
                <Search
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={20}
                  aria-hidden="true"
                />
              </div>
            </motion.div>

            {/* Category Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              id="resources-search-category-heading"
            >
              <h3 className="text-2xl font-bold mb-6">Categories</h3>
              <CategoryFilter
                categories={resourceCategories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </motion.div>

            {/* Resource Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              aria-labelledby="resources-cards-heading"
            >
              <h3
                id="resources-cards-heading"
                className="text-2xl font-bold mb-6"
              >
                {filteredResources.length > 0
                  ? "Filtered Resources"
                  : "No Resources Found"}
              </h3>
              {filteredResources.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResources.map((resource, index) => (
                    <ResourceCard
                      key={resource.id}
                      resource={resource}
                      index={index}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 text-center">
                  No resources match your search criteria.
                </p>
              )}
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section
          className="py-20 bg-gray-100"
          aria-labelledby="resources-cta-heading"
        >
          <div className="container mx-auto px-6 text-center">
            <motion.h3
              id="resources-cta-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold mb-8 text-gray-900"
            >
              Ready to Start Your Journey?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-12 max-w-2xl mx-auto text-gray-700"
            >
              Contact us today to schedule a consultation and discover how our
              resources can help you achieve your academic goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all hover:shadow-lg inline-flex items-center group"
                aria-label="Get Started with Ascend Consulting"
              >
                Get Started
                <ChevronRight
                  size={20}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ResourcesPage;
