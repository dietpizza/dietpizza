import React from "react";
import { AboutSection, HeroBanner, InfoSection, NavBar } from "../components";

export const HomePage: React.FC = () => {
  return (
    <div className="pt-2 min-h-screen max-w-screen bg-background">
      <NavBar />
      <HeroBanner />
      <InfoSection />
      <AboutSection />
    </div>
  );
};
