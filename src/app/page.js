"use client"
import Image from "next/image";
import Hero from "./component/sections/Hero";
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


export default function Home() {
  const { setIsActive } = useGlobalContext();
  
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsActive(false)
  }, [])

  return (
    <>
      <Hero />
      <ScreenAbout />
      <Clients />
      {/* <Numbers /> */}
      <Experties />
      <Team />
      <OurWork />
      <WhyChooseUs />
      <HowWeDo />
      <Industries />
      <TestimonialsN />
      <Footer />

    </>
  )
}
