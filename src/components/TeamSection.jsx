// src/components/TeamSection.jsx

import React from "react";
import { teamMembers } from "../data/teamMembers";
import TeamMember from "./TeamMember";

const TeamSection = () => {
  return (
    <section className="py-20 bg-white" aria-labelledby="team-section-heading">
      <div className="container mx-auto px-6">
        <h2
          id="team-section-heading"
          className="text-4xl font-bold mb-12 text-center text-gray-900"
        >
          Our Team
        </h2>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>

        {/* About Us Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto text-lg">
            Our team’s experience spans across prestigious organizations and
            institutions, as represented by the logos below. From globally
            recognized financial powerhouses to elite academic institutions and
            leading industries in fashion and art.
          </p>

          {/* Logos */}
          <div className="flex flex-wrap justify-center items-center space-x-6">
            {/* Replace with actual logo images and paths */}
            <img
              src="https://via.placeholder.com/100x50"
              alt="Columbia University"
              className="h-12 my-4"
            />
            <img
              src="https://via.placeholder.com/100x50"
              alt="NYU"
              className="h-12 my-4"
            />
            <img
              src="https://via.placeholder.com/100x50"
              alt="Harvard University"
              className="h-12 my-4"
            />
            <img
              src="https://via.placeholder.com/100x50"
              alt="Cornell University"
              className="h-12 my-4"
            />
            <img
              src="https://via.placeholder.com/100x50"
              alt="Financial Times"
              className="h-12 my-4"
            />
            <img
              src="https://via.placeholder.com/100x50"
              alt="SigTech"
              className="h-12 my-4"
            />
            <img
              src="https://via.placeholder.com/100x50"
              alt="LVMH"
              className="h-12 my-4"
            />
            <img
              src="https://via.placeholder.com/100x50"
              alt="MIT Endowment"
              className="h-12 my-4"
            />
            <img
              src="https://via.placeholder.com/100x50"
              alt="Shin Gallery"
              className="h-12 my-4"
            />
            {/* Add more logos as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
