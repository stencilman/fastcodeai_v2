import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[100vh] bg-teamHero bg-cover bg-no-repeat flex pl-[176px] items-center relative ">
      <div className="flex flex-col gap-[30px] ">
        <p className="text-lg text-[#9EB3CF] font-bwmss01 ">Meet Our</p>
        <h1 className="text-[51px] text-white font-aeonik tracking-wide">
          Big Brains
        </h1>
        <p className="text-lg text-[#9EB3CF] font-bwmss01 ">
          {"We’re"} Group of ambitious Ai Experts and Coders
        </p>
      </div>
    </div>
  );
};

export default Hero;
