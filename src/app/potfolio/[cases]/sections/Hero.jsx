import Image from "next/image";
import React from "react";

const Hero = ({ heroData }) => {
  return (
    <div className="w-full h-[100vh] bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83 relative">
      <div className="w-full h-[50vh]">
        <Image
          className="w-full h-full"
          src="/potfolio/mbenz/hero/main1-2.png"
          width="1538"
          height="598"
          alt=""
        />
      </div>
      <div className="w-full h-[50vh] px-[20px] md:px-[50px] lg:px-[100px] flex items-center justify-between gap-[5%]">
        <div className="flex h-full  w-[80%] items-center justify-around">
          <div className="w-[20%]">
            <Image
              src={heroData[0]?.logo}
              height="89"
              width="155"
              alt="logo"
            />
          </div>
          <div className="w-[500px] flex flex-col gap-[25px] justify-center items-center">
            <h3 className="text-white text-center font-aeonik font-light tracking-normal text-[30px]">
             {heroData[0]?.title}
            </h3>
            <p className="text-[#9EB3CF] font-bwmss01 text-lg text-center">
              {heroData[0]?.description}
            </p>
            <div className="py-[12px] px-[35px] rounded-[30px] border-[#FFFFFF] border maxw-[160px] text-[#9EB3CF]">
              {heroData[0]?.industry}
            </div>
          </div>
        </div>
        <div className="h-full w-[20%] flex flex-wrap items-center justify-center">
          <h2 className="text-white text-[48px] font-aeonik tracking-wide">
            {heroData[0]?.year}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;