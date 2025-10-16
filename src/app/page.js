"use client";
import Image from "next/image";
// import Hero from "./component/sections/Hero";
import ScreenAbout from "./component/sections/ScreenAbout";
import Clients from "./component/sections/Clients";
import WhyChooseUs from "./component/sections/WhyChooseUs";
import Team from "./component/sections/Team";
import Industries from "./component/sections/Industries";
import Experties from "./component/sections/Experties";
import OurWork from "./component/sections/OurWork";
import HowWeDo from "./component/sections/HowWeDo";
import Testimonials from "./component/sections/Testimonials";
import Footer from "./component/sections/Footer";
import Numbers from "./component/sections/Numbers";
import TestimonialsN from "./component/sections/TestimonialsN";
import { useGlobalContext } from "./context/GlobalContext";
import { useEffect, useState } from "react";
import JoinTeam from "./component/sections/JoinTeam";

// V2
import Hero from "./component/v2/sections/Hero";
import IndustryLeaders from "./component/v2/sections/IndustryLeaders";
import CaseStudies from "./component/v2/sections/CaseStudies";
import CeoDesk from "./component/v2/sections/CeoDesk";

export default function Home() {
  const { setIsActive } = useGlobalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsActive(false);
  }, []);

  return (
    <>
      {/* V1/}
      {/*
      <Hero />
      <ScreenAbout />
      <Clients />
      <JoinTeam/>
      <Numbers /> // circle
      <Experties />
      <Team />
      <OurWork />
      <WhyChooseUs />
      <HowWeDo />
      <Industries />
      <TestimonialsN />
      <Footer showExtraSpace={true}/> */}
      <Hero />
      <IndustryLeaders />
      <CaseStudies />
      <CeoDesk/>
      <TestimonialsN />
      <Footer showExtraSpace={true} />
    </>
  );
}
