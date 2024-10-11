// src/pages/ResourceDetailPage.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, Clock } from "lucide-react";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Optional: For GitHub Flavored Markdown

// Removed Header and Footer imports
import resources from "../data/Resources.js"; // Ensure correct path and casing

const ResourceDetailPage = () => {
  const { id } = useParams();
  const resource = resources.find((res) => res.id === parseInt(id, 10));

  if (!resource) {
    return (
      <div className="font-sans text-gray-900 bg-white min-h-screen flex flex-col">
        {/* Removed Header */}
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-3xl font-bold mb-4">Resource Not Found</h2>
            <Link
              to="/resources"
              className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
              aria-label="Back to Resources"
            >
              <ChevronLeft size={16} className="mr-1" />
              Back to Resources
            </Link>
          </div>
        </main>
        {/* Removed Footer */}
      </div>
    );
  }

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen flex flex-col">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{resource.title} - Ascend Consulting</title>
        <meta
          name="description"
          content={`Read our comprehensive guide on ${resource.title} to enhance your college application process.`}
        />
      </Helmet>

      <main className="flex-grow">
        {/* Resource Detail Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            >
              {resource.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center space-x-4 mb-4"
            >
              <span className="inline-block bg-blue-100 text-blue-800 text-xs md:text-sm px-2 py-1 rounded-full">
                {resource.category}
              </span>
              <span className="text-gray-500 text-sm md:text-base flex items-center">
                <Clock size={16} className="inline mr-1" aria-hidden="true" />
                {resource.readTime}
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="prose prose-lg text-gray-700"
            >
              {/* Render the article content using ReactMarkdown */}
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {resource.content}
              </ReactMarkdown>
            </motion.div>
            <Link
              to="/resources"
              className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center mt-8"
              aria-label="Back to Resources"
            >
              <ChevronLeft size={16} className="mr-1" />
              Back to Resources
            </Link>
          </div>
        </section>
      </main>

      {/* Footer is rendered globally via App.jsx */}
    </div>
  );
};

export default ResourceDetailPage;
