// src/pages/FAQPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQItem from "../components/FAQItem";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer comprehensive college admissions consulting, including application strategy, essay development, interview preparation, and more.",
  },
  {
    question: "How can I schedule a consultation?",
    answer:
      "You can schedule a consultation by visiting our Contact page and filling out the form, or by clicking the 'Contact Us' button on any page.",
  },
  {
    question: "What is the cost of your services?",
    answer:
      "Our services are tailored to individual needs. Please contact us for a personalized quote.",
  },
  {
    question: "How long does the admissions process take?",
    answer:
      "The admissions process typically spans several months, starting from the initial assessment to the final application submission.",
  },
  {
    question: "Do you offer services for international students?",
    answer:
      "Yes, we provide specialized services for international students, including assistance with visa applications and understanding international admission requirements.",
  },
  // Add more FAQs as needed
];

const FAQPage = () => {
  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Find answers to the most common questions about our services and
              process.
            </motion.p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <FAQItem question={faq.question} answer={faq.answer} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold mb-8 text-gray-900"
            >
              Have More Questions?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-12 max-w-2xl mx-auto text-gray-700"
            >
              Feel free to reach out to us for any additional inquiries or
              personalized assistance.
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
              >
                Contact Us
                <ChevronRight
                  size={20}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;
