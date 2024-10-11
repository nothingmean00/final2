// src/pages/TermsOfServicePage.jsx

import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <Helmet>
        <title>Terms of Service - Ascend Consulting</title>
        <meta
          name="description"
          content="Read the Terms of Service for Ascend Consulting to understand our policies and guidelines."
        />
      </Helmet>

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative pt-32 pb-12 flex items-center justify-center overflow-hidden text-center"
          style={{
            background: "linear-gradient(135deg, #1F2937 0%, #374151 100%)",
          }}
          aria-labelledby="terms-hero-heading"
        >
          {/* Overlay for better text readability */}
          <div
            className="absolute inset-0 bg-black opacity-30"
            aria-hidden="true"
          ></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.h1
              id="terms-hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Terms of Service
            </motion.h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg text-gray-700"
            >
              <h2>Introduction</h2>
              <p>
                Welcome to Ascend Consulting! These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
              </p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By using our website, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.
              </p>

              <h2>2. Use of Services</h2>
              <p>
                You agree to use our services only for lawful purposes and in accordance with these Terms of Service. You agree not to use the services:
              </p>
              <ul>
                <li>In any way that violates any applicable federal, state, or local law or regulation.</li>
                <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent.</li>
              </ul>

              <h2>3. Intellectual Property Rights</h2>
              <p>
                All content, features, and functionality on our website are and will remain the exclusive property of Ascend Consulting and its licensors.
              </p>

              {/* Continue adding more sections as needed */}
            </motion.div>
          </div>
        </section>

        {/* Back to Resources Link */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-6 text-center">
            <Link
              to="/resources"
              className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
              aria-label="Back to Resources"
            >
              Back to Resources
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TermsOfServicePage;
