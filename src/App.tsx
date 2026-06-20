/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Hero from "./components/Hero";
import WhyCamp from "./components/WhyCamp";
import LearningPath from "./components/LearningPath";
import ProgramCurriculum from "./components/ProgramCurriculum";
import MentorSection from "./components/MentorSection";
import Showcase from "./components/Showcase";
import ParentsSection from "./components/ParentsSection";
import TakeHomeDeliverables from "./components/TakeHomeDeliverables";
import ProgramDetails from "./components/ProgramDetails";
import FAQAccordion from "./components/FAQAccordion";
import LimitedSeat from "./components/LimitedSeat";
import StickyWhatsApp from "./components/StickyWhatsApp";
import StickyMobileCTA from "./components/StickyMobileCTA";
import Footer from "./components/Footer";

export default function App() {
  const handleScrollToRegister = () => {
    const registerSection = document.getElementById("learning-path");
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="landing-page-root" className="min-h-screen bg-white text-gray-800 antialiased selection:bg-primary selection:text-white pb-16 md:pb-0">
      {/* Decorative colored glow spheres in background */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />

      {/* 1. Hero Section */}
      <Hero onScrollToRegister={handleScrollToRegister} />

      {/* 2. Why This Camp? */}
      <WhyCamp />

      {/* 3. Learning Path & Pricing */}
      <LearningPath />

      {/* 4. Program Curriculum Tabs */}
      <ProgramCurriculum />

      {/* 3b. Meet the Mentors (Hidden for now as requested)
      <MentorSection />
      */}

      {/* 5. Final Project Showcase */}
      <Showcase />

      {/* 5. Why Parents Love This + 7. What Students Get (Checklist) */}
      <ParentsSection />

      {/* 5b. Take Home Deliverables */}
      <TakeHomeDeliverables />

      {/* 6. Program Details Grid */}
      <ProgramDetails />

      {/* 9. FAQ Section (10-questions accordions) */}
      <FAQAccordion />

      {/* 10. Limited Seat Section & 11. Final CTA */}
      <LimitedSeat />

      {/* Footer Branding */}
      <Footer />

      {/* Floating Interactive WhatsApp Assistant (Sticky CTA) */}
      <StickyWhatsApp />

      {/* Sticky Mobile WA registration bar */}
      <StickyMobileCTA />
    </div>
  );
}

