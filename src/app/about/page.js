"use client"
import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import Hero from './sections/Hero';
import WhoWeAre from './sections/WhoWeAre';
import Team from '../component/sections/Team';
import ArjunAndTeam from './sections/ArjunAndTeam';
import Believe from './sections/Believe';
import TechStack from './sections/TechStack';
import WhyChooseUs from '../component/sections/WhyChooseUs';
import Industries from '../component/sections/Industries';
import TestimonialsN from '../component/sections/TestimonialsN';
import Footer from '../component/sections/Footer';

const About = () => {
  const { setIsActive } = useGlobalContext();

  useEffect(() => { 
    window.scrollTo(0, 0);
    setIsActive(false)
  }, [])

  return (
    <>
      <Hero />
      <WhoWeAre />
      <ArjunAndTeam showTeam={true}/>
      <Believe/>
      {/* <TechStack/> */}
      {/* <WhyChooseUs/> */}
      {/* <Industries/> */}
      <TestimonialsN/>
      <Footer/>
    </>
  )
}

export default About
