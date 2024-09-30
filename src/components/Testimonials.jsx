// src/components/Testimonials.jsx

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emily R.",
    role: "Stanford University Applicant",
    feedback:
      "“The Essay Writing Tips resource was a game-changer for me. My essays stood out, and I was accepted into Stanford!”",
  },
  {
    name: "Michael S.",
    role: "Harvard University Admitted Student",
    feedback:
      "“The College Application Checklist kept me organized throughout the process. Highly recommend Ascend's resources!”",
  },
  {
    name: "Sophia L.",
    role: "MIT Applicant",
    feedback:
      "“The Interview Preparation Guide boosted my confidence. I felt well-prepared and performed excellently in my interviews.”",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-center text-gray-900"
        >
          What Our Students Say
        </motion.h2>
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <Star size={24} className="text-yellow-500 mr-2" />
                <h4 className="text-xl font-semibold text-gray-900">
                  {testimonial.name}
                </h4>
              </div>
              <p className="text-gray-700 italic">{testimonial.feedback}</p>
              <p className="text-gray-500 mt-2">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
