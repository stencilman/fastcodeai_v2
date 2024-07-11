"use client"
import React, { useEffect } from 'react'
import Hero from './sections/Hero'
import Main from './sections/Main'
import Footer from '@/app/component/sections/Footer'
import Head from 'next/head';
import { usePathname } from 'next/navigation';

const Kans = () => {
    const path = usePathname();
    const blogName = path.split("/").pop();
    console.log("blogName", blogName)
    const currentUrl = `https://www.fastcode.ai/blogs/${blogName}`;
    useEffect(() => {
        window.scrollTo(0, 0);

    }, []);
    return (
        <>
            <Head>
                <title>{blogName} - FastCodeAI</title>
                <meta property="og:title" content={`${blogName} - FastCodeAI`} />
                <meta property="og:description" content="A brief description of your blog." />
                <meta property="og:image" content="https://www.fastcode.ai/blogs/your-image.jpg" />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:type" content="article" />
            </Head>
            <Hero />
            <Main />
            <Footer showExtraSpace={true} />
        </>
    )
}

export default Kans
