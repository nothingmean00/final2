// src/App.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import AboutUsPage from "./pages/AboutUsPage";
import ApproachPage from "./pages/ApproachPage";
import ContactPage from "./pages/ContactPage";
import ResourcesPage from "./pages/ResourcesPage";
import ResourceDetailPage from "./pages/ResourceDetailPage";
import ServicesPage from "./pages/ServicesPage";
import TeamPage from "./pages/TeamPage";
import FAQPage from "./pages/FAQPage";
import NotFoundPage from "./pages/NotFoundPage"; // Ensure this component exists
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header"; // Ensure Header is correctly imported
import Footer from "./components/Footer"; // Ensure Footer is correctly imported
import ErrorBoundary from "./components/ErrorBoundary"; // Ensure ErrorBoundary is correctly imported

const App = () => {
  return (
    <>
      {/* Scroll Restoration */}
      <ScrollToTop />

      {/* Header */}
      <Header />

      {/* Main Content Wrapped with Error Boundary */}
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/approach" element={<ApproachPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/:id" element={<ResourceDetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* 404 Route */}
        </Routes>
      </ErrorBoundary>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
