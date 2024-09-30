// src/pages/ApproachPage.jsx

import React from "react";
import {
  ChevronRight,
  Target,
  Users,
  Sparkles,
  Briefcase,
  ChartBar,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import ApproachStep from "../components/ApproachStep";

const ApproachPage = () => {
  const approachSteps = [
    {
      title: "Personalized Assessment",
      description:
        "We begin by understanding your unique strengths, aspirations, and areas for growth through comprehensive evaluations and in-depth discussions.",
      icon: Target,
      summaryPoints: [
        "Identify key strengths",
        "Pinpoint areas for improvement",
        "Clarify academic and career goals",
      ],
    },
    {
      title: "Tailored Strategy Development",
      description:
        "Our experts craft a customized roadmap that aligns with your goals and maximizes your chances of admission to top-tier universities.",
      icon: ChartBar,
      summaryPoints: [
        "Customized application strategy",
        "School selection guidance",
        "Timeline and milestone planning",
      ],
    },
    {
      title: "Holistic Profile Enhancement",
      description:
        "We work with you to develop a well-rounded profile that showcases your academic achievements, extracurricular activities, and personal growth.",
      icon: Users,
      summaryPoints: [
        "Academic performance optimization",
        "Strategic extracurricular involvement",
        "Leadership skill development",
      ],
    },
    {
      title: "Application Mastery",
      description:
        "Our team guides you through every aspect of the application process, from crafting compelling essays to preparing for interviews.",
      icon: Sparkles,
      summaryPoints: [
        "Standout application materials",
        "Interview preparation",
        "Recommendation letter strategy",
      ],
    },
    {
      title: "Ongoing Support and Mentorship",
      description:
        "We provide continuous guidance and support throughout your academic journey, adapting our approach as needed to ensure your success.",
      icon: Clock,
      summaryPoints: [
        "Regular progress check-ins",
        "Adaptive strategy refinement",
        "Mental health and well-being support",
      ],
    },
    {
      title: "Future-Focused Preparation",
      description:
        "Beyond admissions, we help you develop skills and perspectives that will serve you well in your future academic and professional endeavors.",
      icon: Briefcase,
      summaryPoints: [
        "Career exploration and guidance",
        "Networking skill development",
        "Long-term success planning",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Our Approach - Ascend Consulting</title>
        <meta
          name="description"
          content="Discover Ascend Consulting's holistic and personalized approach to college admissions, designed to maximize your chances of success."
        />
      </Helmet>

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative pt-32 pb-12 flex items-center justify-center overflow-hidden text-center"
          style={{
            background: "linear-gradient(135deg, #1F2937 0%, #374151 100%)",
          }}
          aria-labelledby="approach-hero-heading"
        >
          {/* Overlay for better text readability */}
          <div
            className="absolute inset-0 bg-black opacity-30"
            aria-hidden="true"
          ></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.h1
              id="approach-hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-4 text-white"
            >
              Our Approach
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              At Ascend, we believe in a holistic, personalized approach to
              college admissions consulting. Our methodology is designed to
              bring out the best in each student and maximize their chances of
              success.
            </motion.p>
          </div>
        </section>

        {/* Approach Steps Section */}
        <section
          id="approach-steps"
          className="py-20 bg-white"
          aria-labelledby="approach-steps-heading"
        >
          <div className="container mx-auto px-6">
            <h2
              id="approach-steps-heading"
              className="text-3xl font-bold mb-12 text-center text-gray-900"
            >
              Our Methodology
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {approachSteps.map((step, index) => (
                <ApproachStep key={index} step={step} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section
          className="py-20 bg-gray-100"
          aria-labelledby="approach-cta-heading"
        >
          <div className="container mx-auto px-6 text-center">
            <motion.h3
              id="approach-cta-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold mb-8 text-gray-900"
            >
              Ready to Experience Our Approach?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-12 max-w-2xl mx-auto text-gray-700"
            >
              Let us guide you through your college admissions journey with our
              proven methodology and personalized strategies.
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
                aria-label="Schedule a Consultation with Ascend Consulting"
              >
                Schedule a Consultation
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

export default ApproachPage;
