// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const pageLinks = [
  { name: "Services", href: "/services" },
  { name: "Our Approach", href: "/approach" },
  { name: "About Us", href: "/about-us" }, // Updated href to "/about-us" for consistency
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
          <p className="text-gray-400">123 Education Lane</p>
          <p className="text-gray-400">Knowledge City, KN 12345</p>
          <p className="text-gray-400">info@ascendconsulting.io</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            {/* Replace '#' with actual URLs when available */}
            <a
              href="#"
              className="hover:text-gray-300 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
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
