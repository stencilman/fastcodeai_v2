import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-auto relative bg-[#00081F]">
      <div className="pt-[50%] md:pt-[40%] lg:pt-[20%] flex justify-center items-center flex-col">
        <p className="text-[#9EB3CF] font-bwmss01 text-[13px] md:text-[19px]">
          Potfolio
        </p>
        <h1 className="text-white mt-[10px] font-aeonik tracking-wide font-normal text-[6vw] leading-[6vw]">
          What {"we've"} done so far
        </h1>
      </div>
      
    </div>
  );
};

export default Hero;
