import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[59vh] lg:h-[100vh] bg-teamHero bg-cover md:bg-cover bg-no-repeat flex pl-[20px] md:pl-[100px] lg:pl-[176px] md:items-center relative pt-[80px] md:pt-0">
      <div className="flex flex-col gap-[20px] justify-center md:justify-normal sm:gap-[20px] md:gap-[15px] lg:gap-[30px] ">
        <p className="text-base md:text-lg text-[#9EB3CF] font-bwmss01 ">Meet Our</p>
        <h1 className="text-[8vw] leading-[8.5vw] md:text-[7vw] md:leading-[7.5vw] lg:text-5xl lg:w-[60%] text-white font-aeonik tracking-wide">
        Exceptional teams leads to exceptional results
        </h1>
        <p className="text-base md:text-lg text-[#9EB3CF] font-bwmss01 ">
          {"We’re"} a Group of ambitious Ai Experts and Coders
        </p>
      </div>
    </div>
  );
};

export default Hero;
