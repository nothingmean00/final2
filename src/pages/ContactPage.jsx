// src/pages/ContactPage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet';

import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import FAQItem from '../components/FAQItem';

// Sample FAQs data with unique IDs
const faqs = [
  {
    id: 1,
    question: 'How do I schedule a consultation?',
    answer:
      "You can schedule a consultation by filling out the contact form on this page or by emailing us directly at info@ascendconsulting.io. We'll get back to you within 24 hours to confirm your appointment.",
  },
  {
    id: 2,
    question: 'What services do you offer?',
    answer:
      'We offer a range of services including application strategy, essay development, interview preparation, extracurricular optimization, test preparation, and career guidance. Visit our Services page for more details.',
  },
  {
    id: 3,
    question: 'How much do your services cost?',
    answer:
      'Our pricing varies depending on the services you require. Please contact us directly to receive a customized quote tailored to your specific needs.',
  },
  {
    id: 4,
    question: 'Can you help with international admissions?',
    answer:
      'Yes, we specialize in assisting both domestic and international students with their college admissions process. We understand the unique challenges faced by international applicants and provide tailored support.',
  },
  {
    id: 5,
    question: 'What is your success rate?',
    answer:
      'We pride ourselves on our high success rate, with many of our clients gaining admission to top-tier universities. While individual results may vary, our personalized approach ensures that each student receives the best possible guidance.',
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact Us - Ascend Consulting</title>
        <meta
          name="description"
          content="Reach out to Ascend Consulting for personalized college admissions guidance. Schedule a consultation today to start your journey towards top-tier universities."
        />
      </Helmet>

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative pt-32 pb-12 flex items-center justify-center overflow-hidden text-center"
          style={{
            background: 'linear-gradient(135deg, #1F2937 0%, #374151 100%)',
          }}
          aria-labelledby="contact-hero-heading"
        >
          {/* Overlay for better text readability */}
          <div
            className="absolute inset-0 bg-black opacity-30"
            aria-hidden="true"
          ></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.h1
              id="contact-hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-4 text-white"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Get in touch with our team to start your journey towards academic
              excellence.
            </motion.p>
          </div>
        </section>

        {/* Contact and FAQ Section */}
        <section
          className="py-20 bg-gray-50"
          aria-labelledby="contact-faq-section-heading"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <ContactForm />
              </motion.div>

              {/* Contact Information and FAQs */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <ContactInfo />

                {/* FAQs */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {faqs.map((faq) => (
                      <FAQItem
                        key={faq.id}
                        id={faq.id}
                        question={faq.question}
                        answer={faq.answer}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section
          className="py-20 bg-gray-100"
          aria-labelledby="contact-cta-heading"
        >
          <div className="container mx-auto px-6 text-center">
            <motion.h3
              id="contact-cta-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold mb-8 text-gray-900"
            >
              Ready to Elevate Your Academic Journey?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-12 max-w-2xl mx-auto text-gray-700"
            >
              Contact us today to schedule a consultation and discover how our
              expertise can help you achieve your academic goals.
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

export default ContactPage;
