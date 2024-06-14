"use client";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Hero from "./sections/Hero";
import CaseStudies from "./sections/CaseStudies";
import Clients from "../component/sections/Clients";
import TestimonialsN from "../component/sections/TestimonialsN";
import Footer from "../component/sections/Footer";

const Potfolio = () => {
  const { setIsActive } = useGlobalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsActive(false);
  }, []);
  return (
    <>
      <Hero />
      <CaseStudies/>
      <Clients/>
      {/* <TestimonialsN/> */}
      {/* <div className="h-[100px] md:h-[160px] lg:h-[100px] bg-[#00081F]"></div> */}
      <Footer showExtraSpace={false}/>
    </>
  );
};

export default Potfolio;
