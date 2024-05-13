import React from 'react'
import Hero from './sections/Hero'
import ClientAndInd from './sections/ClientAndInd'
import ProjectGoals from './sections/ProjectGoals'
import BusinessChlanges from './sections/BusinessChallenges'
import Soltions from './sections/Soltions'
import KeyFeatures from './sections/KeyFeatures'
import TechStack from '@/app/about/sections/TechStack'
import OurImpact from './sections/OurImpact'
import OurWork from '@/app/component/sections/OurWork'
import TestimonialsN from '@/app/component/sections/TestimonialsN'
import Footer from '@/app/component/sections/Footer'

const page = ({params}) => {
    console.log("car",params.cases)
  return (
    <>
     <Hero/>
     <ClientAndInd/>
     <ProjectGoals/>
     <BusinessChlanges/>
     <Soltions/>
     <KeyFeatures/>
     <TechStack/>
     <OurImpact/>
     <OurWork/>
     <TestimonialsN/>
     <Footer/>
    </>
  )
}

export default page
