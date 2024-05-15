"use client"
import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import Hero from './sections/Hero';
import Form from './sections/Form';

const Contact = () => {
    const { setIsActive } = useGlobalContext();

    useEffect(() => {
        setIsActive(false)
    }, [])
    return (
        <>
            <Hero/>
            <Form/>
        </>
    )
}

export default Contact
