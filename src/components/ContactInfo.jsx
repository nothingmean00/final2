// src/components/ContactInfo.jsx

import React from "react";
import PropTypes from "prop-types";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
      <address className="not-italic space-y-4">
        {/* Email */}
        <div className="flex items-center">
          <Mail
            className="text-gray-900 mr-4"
            size={24}
            aria-hidden="true"
            aria-label="Email"
          />
          <a
            href="mailto:info@ascendconsulting.io"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            info@ascendconsulting.io
          </a>
        </div>
        {/* Phone */}
        <div className="flex items-center">
          <Phone
            className="text-gray-900 mr-4"
            size={24}
            aria-hidden="true"
            aria-label="Phone"
          />
          <a
            href="tel:+15551234567"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            +1 (555) 123-4567
          </a>
        </div>
        {/* Address */}
        <div className="flex items-center">
          <MapPin
            className="text-gray-900 mr-4"
            size={24}
            aria-hidden="true"
            aria-label="Address"
          />
          <span className="text-gray-700">
            123 Education Lane, New York, NY 10001
          </span>
        </div>
      </address>

      {/* Google Maps Embed */}
      <motion.div
        className="mt-6 rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <iframe
          title="Ascend Consulting Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.910123456789!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3167c4b7b1%3A0x1a2b3c4d5e6f7g8h!2s123%20Education%20Lane%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1615555555555!5m2!1sen!2sus"
          width="100%"
          height="200"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
        <a
          href="https://www.google.com/maps/place/123+Education+Lane,+New+York,+NY+10001"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mt-2 text-blue-600 hover:text-blue-800 transition-colors text-sm"
        >
          View on Google Maps
        </a>
      </motion.div>
    </motion.div>
  );
};

ContactInfo.propTypes = {
  // No props currently, but define if needed in the future
};

export default ContactInfo;
