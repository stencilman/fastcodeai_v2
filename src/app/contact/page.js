"use client"
import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import Hero from './sections/Hero';
import Form from './sections/Form';
import HowWeDo from '../component/sections/HowWeDo';
import Clients from '../component/sections/Clients';
import WhyChooseUs from '../component/sections/WhyChooseUs';
import Footer from '../component/sections/Footer';

const Contact = () => {
    const { setIsActive } = useGlobalContext();

    useEffect(() => {
        setIsActive(false)
    }, [])
    return (
        <>
            <Hero/>
            <Form/>
            <HowWeDo/>
            <Clients/>
            <WhyChooseUs/>
            <Footer/>
        </>
    )
}

export default Contact
