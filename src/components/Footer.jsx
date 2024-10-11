// src/components/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
// Removed social media imports as they're no longer needed
// import { Facebook, Twitter, Linkedin } from "lucide-react";

// Existing Quick Links
const pageLinks = [
  { name: "Services", href: "/services" },
  { name: "Our Approach", href: "/approach" },
  { name: "About Us", href: "/about-us" }, // Updated href to "/about-us" for consistency
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
  { name: "Terms of Service", href: "/terms" }, // Added Terms of Service
];

// Featured Resources with Shorter Titles
const featuredResources = [
  {
    id: 1,
    title: "Choosing the Right College",
  },
  {
    id: 2,
    title: "Planning Your High School Years",
  },
  {
    id: 3,
    title: "Navigating Standardized Testing",
  },
  {
    id: 4,
    title: "Crafting Your Personal Essay",
  },
  {
    id: 5,
    title: "Letters of Recommendation",
  },
  {
    id: 6,
    title: "Extracurricular Activities",
  },
  {
    id: 7,
    title: "Filling Out the Application",
  },
  {
    id: 8,
    title: "Mastering the College Interview",
  },
];

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Ascend Consulting</h4>
          <p className="text-gray-400">
            Elevating academic futures through expert guidance and personalized
            strategies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul>
            {pageLinks.map((link) => (
              <li key={link.name} className="mb-2">
                <Link
                  to={link.href}
                  className="hover:text-gray-300 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-gray-400">606 West 57th</p>
          <p className="text-gray-400">New York, NY 10019</p>
          <p className="text-gray-400">info@ascendconsulting.io</p>
        </div>

        {/* Featured Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Featured Resources</h4>
          <ul>
            {featuredResources.map((resource) => (
              <li key={resource.id} className="mb-2">
                <Link
                  to={`/resources/${resource.id}`}
                  className="hover:text-gray-300 transition-colors"
                >
                  {resource.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="mt-8 border-t border-gray-800 pt-8 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Ascend Consulting. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
