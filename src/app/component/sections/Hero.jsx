"use client";
import React, { useEffect, useState, useRef } from "react";

import { useInView } from "react-intersection-observer";
import Head from "next/head";
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });



  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/patents1.mp4"
          as="video"
          type="video/mp4"
        />
      </Head>
      <div className="w-full h-[100vh] relative bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83">
        {/* <Navbar /> */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            preload="auto"
            playsInline
            src="/patents1.mp4"
          />
          <div className="absolute inset-0 bg-black opacity-[0.65]"></div>
        </div>
        <div className="w-full bottom-[11rem] lg:bottom-28 absolute z-[1] text-center">
          <h1
            ref={ref}
            className={`text-[#F3F3F3] tracking-wide text-[8vw] md:text-[7vw] leading-[9vw] lg:leading-[1] lg:text-8xl pb-[20px] font-aeonik font-normal ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            } transition-transform duration-1000 ease-out`}
          >
            Accelerating Innovation
          </h1>
          <p
            ref={ref}
            className={`text-[#9EB3CF]  text-[1rem] leading-[1.2rem] px-[55px] md:px-[0px] md:leading-[1.75rem] md:text-lg items-center font-bwmss01 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }  transition-transform delay-100 duration-1000 ease-out`}
          >
            Expertly crafted AI solutions—designed with precision, built for
            reliability,
            <br className="hidden md:block"/> and committed to excellence.
            {/* <br /> to harness cutting edge intelligence */}
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
