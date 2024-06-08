"use client";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Hero from "./sections/Hero";
import Dedication from "./sections/Dedication";
import Showcase from "./sections/Showcase";
import HowWeDo from "../component/sections/HowWeDo";
import Industries from "../component/sections/Industries";
import TechStack from "../about/sections/TechStack";
import Footer from "../component/sections/Footer";
import Cta from "../industries/sections/Cta";
import TestimonialsN from "../component/sections/TestimonialsN";

const Research = () => {
  const { setIsActive } = useGlobalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsActive(false);
  }, []);
  return (
    <>
      <Hero />
      <Dedication />
      <Showcase />
      {/* <HowWeDo /> */}
      {/* <Industries /> */}
      <div className="mt-[20vw] sm:mt-[10vw] md:mt-[10vw]"></div>
      {/* <TechStack /> */}
      {/* <TestimonialsN /> */}

      <Cta
        title="Got a groundbreaking idea?"
        quote="let's turn it into a patented innovation"
      />

      <Footer />
    </>
  );
};

export default Research;
