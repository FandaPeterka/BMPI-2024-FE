import React from "react";
import WelcomeSection from "./WelcomeSection";
import FeaturesSection from "./FeaturesSection";
import AboutSection from "./AboutSection";

const HomeContent = () => {
  return (
    <div className="home-container">
      <WelcomeSection />
      <FeaturesSection />
      <AboutSection />
    </div>
  );
};

export default HomeContent;