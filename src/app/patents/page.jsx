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
import Link from "next/link";

const Patents = () => {
  const { setIsActive } = useGlobalContext();

  useEffect(() => {
    setIsActive(false);
  }, []);
  return (
    <>
      <Hero />
      <Dedication />
      <Showcase />
      <HowWeDo />
      <Industries />
      <TechStack />
      <TestimonialsN />
      <Link href="/contact">
        <Cta
          title="Got a groundbreaking idea?"
          quote="let's turn it into a patented innovation"
        />
      </Link>
      <Footer />
    </>
  );
};

export default Patents;
