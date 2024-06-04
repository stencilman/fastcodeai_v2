"use client"
import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import Hero from './sections/Hero';
import Members from './sections/Members';
import WhyChooseUs from '../component/sections/WhyChooseUs';
import TestimonialsN from '../component/sections/TestimonialsN';
import Footer from '../component/sections/Footer';

const Team = () => {
    const { setIsActive } = useGlobalContext();

    useEffect(() => {
      window.scrollTo(0, 0);
      setIsActive(false)
    }, [])
  return (
    <>
      <Hero/>
      <div className="my-[50px]"></div>
      <Members/>
      {/* <WhyChooseUs/> */}
      {/* <TestimonialsN/> */}
      <Footer/>
    </>
  )
}

export default Team
