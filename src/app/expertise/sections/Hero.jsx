import Lottie from "lottie-react";
import React from "react";
import scringAnim from "/public/animations/springs.json";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[100vh] bg-[#00081F] pl-[100px] flex items-center">
      <div className="w-[60%]">
        <p className="text-[#9EB3CF] font-bwmss01 text-[19px]">Our Experties</p>
        <h1 className="text-white mt-[10px] font-aeonik tracking-wide font-normal text-[6vw] leading-[6vw]">Let us take you further than you’ve ever been.</h1>
      </div>
      <div className=" w-[40%] ">
        <div className="w-[full] relative h-[400px] ">
          <Lottie animationData={scringAnim} loop={true} />
          <div className="absolute top-[24%] left-[12%]">
            <Image src="./brain.svg" width="270" height="200" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
