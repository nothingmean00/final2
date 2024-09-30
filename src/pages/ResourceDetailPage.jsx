// src/pages/ResourceDetailPage.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Helmet } from "react-helmet";

import Header from "../components/Header"; // Assuming you have a Header component
import Footer from "../components/Footer"; // Assuming you have a Footer component

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

const ResourceDetailPage = () => {
  const { id } = useParams();
  const resource = allResources.find((res) => res.id === parseInt(id));

  if (!resource) {
    return (
      <div className="font-sans text-gray-900 bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Resource Not Found</h2>
            <Link
              to="/resources"
              className="text-gray-900 font-semibold hover:text-gray-700 inline-flex items-center"
              aria-label="Back to Resources"
            >
              <ChevronLeft size={16} className="mr-1" />
              Back to Resources
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen flex flex-col">
      <Helmet>
        <title>{resource.title} - Ascend Consulting</title>
        <meta
          name="description"
          content={`Read our comprehensive guide on ${resource.title} to enhance your college application process.`}
        />
      </Helmet>
      <Header />

      <main className="flex-grow">
        {/* Resource Detail Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-4"
            >
              {resource.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-600 mb-4"
            >
              Category: {resource.category}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-600 mb-8"
            >
              Read Time: {resource.readTime}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="prose prose-lg text-gray-700"
            >
              <p>{resource.content}</p>
              {/* Add more detailed content as needed */}
            </motion.div>
            <Link
              to="/resources"
              className="text-gray-900 font-semibold hover:text-gray-700 inline-flex items-center mt-8"
              aria-label="Back to Resources"
            >
              <ChevronLeft size={16} className="mr-1" />
              Back to Resources
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ResourceDetailPage;
