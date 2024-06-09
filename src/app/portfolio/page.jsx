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
    setIsActive(false);
  }, []);
  return (
    <>
      <Hero />
      <CaseStudies/>
      <Clients/>
      <TestimonialsN/>
      <Footer showExtraSpace={true}/>
    </>
  );
};

export default Potfolio;
