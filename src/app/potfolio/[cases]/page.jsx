import React from "react";
import Hero from "./sections/Hero";
import ClientAndInd from "./sections/ClientAndInd";
import ProjectGoals from "./sections/ProjectGoals";
import BusinessChlanges from "./sections/BusinessChallenges";
import Soltions from "./sections/Soltions";
import KeyFeatures from "./sections/KeyFeatures";
import TechStack from "@/app/about/sections/TechStack";
import OurImpact from "./sections/OurImpact";
import OurWork from "@/app/component/sections/OurWork";
import TestimonialsN from "@/app/component/sections/TestimonialsN";
import Footer from "@/app/component/sections/Footer";

const page = ({ params }) => {
  console.log("path", params.cases);

  const heroDataMap = {
    mbux: [
      {
        logo: "/potfolio/mbenz/hero/logo.png",
        title: "Gesture Recognition based User Experience",
        description:
          "Enhance interaction between driver and car by detecting driver hand gesture for superior level driver experience with Mercedes Benz User Experience - MBUX System.",
        industry: "Automotive OEM",
        year: "2021",
      },
    ],
    bosch: [
      {
        logo: "/potfolio/bosch/hero/logo.png",
        title: "Vulnerable Roadside User Protection System",
        description:
          "Accurate, low footprint detection with vulnerable roadside users (VRUs) and road signs covered in the Bosch-Daimler autonomous driving initiative.",
        industry: " Automotive Tier 1",
        year: "2022",
      },
    ],
    // Add more paths and corresponding data as needed
  };

  // Get the hero data based on the current path
  const heroData = heroDataMap[params.cases] || [];
  return (
    <>
      <Hero heroData={heroData} />
      <ClientAndInd />
      <ProjectGoals />
      <BusinessChlanges />
      <Soltions />
      <KeyFeatures />
      <TechStack />
      <OurImpact />
      <OurWork />
      <TestimonialsN />
      <Footer />
    </>
  );
};

export default page;
