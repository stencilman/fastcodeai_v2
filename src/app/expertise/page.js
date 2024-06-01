"use client"
import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import Hero from './sections/Hero';
import CustomerSolutions from './sections/CustomerSolutions';
import Experties from '../component/sections/Experties';
import ExpertiseSlide from './sections/ExpertiseSlide';
import HowWeDo from '../component/sections/HowWeDo';
import ArjunAndTeam from '../about/sections/ArjunAndTeam';
import TechStack from '../about/sections/TechStack';
import OurWork from '../component/sections/OurWork';
import Footer from '../component/sections/Footer';
import CtaToContacts from '../component/CtaToContacts';


const Expertise = () => {
    const { setIsActive } = useGlobalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsActive(false)
  }, [])
  return (
    <>
      <Hero/>
      <CustomerSolutions/>
      <ExpertiseSlide/>
      <HowWeDo pb="pb-[250px]"/>
      <ArjunAndTeam/>
      <TechStack z="z-[5]"/>
      <OurWork/>
      {/* <CtaToContacts/> */}
      <Footer/>
    </>
  )
}

export default Expertise
