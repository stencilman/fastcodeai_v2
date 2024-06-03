"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

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
    <div className="w-full h-[100vh] relative bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/career.mp4"
        />
        <div className="absolute inset-0 bg-black opacity-[0.65]"></div>
      </div>
      <div className="w-full  pl-[20px] md:pl-[110px]">
        <h1
          ref={ref}
          className={`text-[#F3F3F3] tracking-wide text-[8vw] md:text-[7vw] leading-[9vw] lg:leading-[1] lg:text-8xl pb-[20px] font-aeonik font-normal top-[30%] absolute z-[1] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          } transition-transform duration-1000 ease-out`}
        >
          Lead the future <br />
          with us.
        </h1>
        <p
          ref={ref}
          className={`text-[#9EB3CF] text-[8vw] md:text-[7vw] leading-[9vw]  lg:text-6xl items-center bottom-[25%] absolute font-aeonik z-[1] right-[15%] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }  transition-transform delay-100 duration-1000 ease-out`}
        >
          We are thinkers
        </p>
      </div>
    </div>
  );
};

export default Hero;
