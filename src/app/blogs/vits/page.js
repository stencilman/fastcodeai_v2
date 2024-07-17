"use client"
import React,{useEffect} from 'react'
import Hero from './sections/Hero'
import Main from './sections/Main'
import Footer from '@/app/component/sections/Footer'

const Vits = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero/>
      <Main/>
      <Footer showExtraSpace={true}/>
    </>
  )
}

export default Vits 
