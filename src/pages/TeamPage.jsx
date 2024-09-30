import React, { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Award,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Zehua",
    role: "General Counselor",
    education: "Graduate of Columbia University, Mathematics and Statistics",
    experience: "Quantitative Researcher at SigTech",
    achievements: "Expertise in data-driven admissions strategies",
  },
  {
    name: "Malik",
    role: "General Counselor",
    education: "Graduate of NYU Stern School of Business, Finance",
    experience: "Investment Solutions Analyst at SigTech",
    achievements: "Specialized in finance-oriented applications",
  },
  {
    name: "Sabiq",
    role: "Essay Specialist",
    education: "Graduate of NYU, Economics and Journalism",
    experience: "Journalist at the Financial Times",
    achievements:
      "Award-winning writer with a keen eye for compelling narratives",
  },
  {
    name: "Anjali",
    role: "SAT/ACT Specialist",
    education:
      "Electrical Engineering student at the University of Pennsylvania",
    experience: "99th percentile SAT scorer",
    achievements: "Authored an award-winning college application essay",
  },
  {
    name: "Marc",
    role: "Academic Specialist",
    education: "Harvard University, Economics",
    experience: "Art Dealer at the Shin Gallery",
    achievements:
      "Expertise in blending academic excellence with unique extracurriculars",
  },
  {
    name: "Abiel",
    role: "Strategy Specialist",
    education: "Graduate of NYU Stern, Management",
    experience: "Currently working at LVMH",
    achievements: "Specialist in crafting standout application strategies",
  },
  {
    name: "Steven",
    role: "Interview Specialist",
    education: "Graduate of Cornell University",
    experience:
      "Former Investment Banker at Wells Fargo, Current Investment Associate at MIT Endowment",
    achievements: "Expert in preparing students for high-stakes interviews",
  },
];

const pageLinks = [
  { name: "Services", href: "/services" },
  { name: "Our Approach", href: "/approach" },
  { name: "Our Team", href: "/team" },
  { name: "Resources", href: "/resources" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const TeamMember = ({ member, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="p-6">
        <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
        <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
          {member.name}
        </h3>
        <p className="text-gray-600 text-center mb-4">{member.role}</p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full bg-gray-900 text-white px-4 py-2 rounded font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center"
        >
          {isExpanded ? "Show Less" : "Learn More"}
          <ChevronRight
            size={20}
            className={`ml-2 transition-transform ${
              isExpanded ? "rotate-90" : ""
            }`}
          />
        </button>
      </div>
      {isExpanded && (
        <div className="px-6 pb-6">
          <div className="flex items-center mb-2">
            <GraduationCap
              size={20}
              className="text-gray-900 mr-2 flex-shrink-0"
            />
            <p className="text-gray-600">{member.education}</p>
          </div>
          <div className="flex items-center mb-2">
            <Briefcase size={20} className="text-gray-900 mr-2 flex-shrink-0" />
            <p className="text-gray-600">{member.experience}</p>
          </div>
          <div className="flex items-center">
            <Award size={20} className="text-gray-900 mr-2 flex-shrink-0" />
            <p className="text-gray-600">{member.achievements}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const TeamPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white py-4 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">
            Ascend
          </a>
          <nav className="hidden md:flex space-x-6">
            {pageLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-gray-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 shadow-lg">
            <nav className="flex flex-col items-center py-4">
              <p className="text-xl font-bold mb-4">Ascend Consulting</p>
              {pageLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-gray-300 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Our Expert Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Meet our team of dedicated professionals from top-tier
              universities and prestigious organizations. With their diverse
              expertise and proven track records, they are committed to guiding
              you towards your academic goals.
            </motion.p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold mb-8 text-gray-900"
            >
              Our Collective Expertise
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-12 max-w-3xl mx-auto text-gray-600"
            >
              Our team's experience spans across prestigious organizations and
              institutions, including globally recognized financial powerhouses,
              elite academic institutions, and leading industries in fashion and
              art.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              href="/contact"
              className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all hover:shadow-lg inline-flex items-center group"
            >
              Work With Our Experts
              <ChevronRight
                size={20}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Ascend Consulting</h4>
              <p>
                Elevating academic futures through expert guidance and
                personalized strategies.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul>
                {pageLinks.map((link) => (
                  <li key={link.name} className="mb-2">
                    <a
                      href={link.href}
                      className="hover:text-gray-300 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p>123 Education Lane</p>
              <p>Knowledge City, KN 12345</p>
              <p>contact@ascendconsulting.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Facebook
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Ascend Consulting. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TeamPage;
