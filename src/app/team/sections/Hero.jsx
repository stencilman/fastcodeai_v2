import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[59vh] lg:h-[100vh] bg-teamHero bg-contain md:bg-cover bg-no-repeat flex pl-[20px] md:px:[50px] lg:pl-[176px] md:items-center relative pt-[80px] md:pt-0">
      <div className="flex flex-col gap-[0px] sm:justify-center md:justify-normal sm:gap-[20px] md:gap-[15px] lg:gap-[30px] ">
        <p className="text-base md:text-lg text-[#9EB3CF] font-bwmss01 ">Meet Our</p>
        <h1 className="text-[8vw] md:text-[7vw] lg:text-[51px] text-white font-aeonik tracking-wide">
          Big Brains
        </h1>
        <p className="text-base md:text-lg text-[#9EB3CF] font-bwmss01 ">
          {"We’re"} Group of ambitious Ai Experts and Coders
        </p>
      </div>
    </div>
  );
};

export default Hero;
