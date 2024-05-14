"use client"
import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import Hero from './sections/Hero';
import LatestBlogs from './sections/LatestBlogs';
import Footer from '../component/sections/Footer';

const Blogs = () => {
    const { setIsActive } = useGlobalContext();

    useEffect(() => {
      setIsActive(false)
    }, [])
  
  return (
    <>
      <Hero/>
      <LatestBlogs/>
      <Footer/>
    </>
  )
}

export default Blogs
