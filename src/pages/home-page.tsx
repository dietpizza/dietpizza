import React from "react";
import { HeroBanner, InfoSection, NavBar } from "../components";

export const HomePage: React.FC = () => {
  return (
    <div className="pt-2 min-h-screen max-w-screen bg-background">
      <NavBar />
      <HeroBanner />
      <InfoSection />
    </div>
  );
};
