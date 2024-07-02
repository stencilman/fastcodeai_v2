import Lottie from "lottie-react";
import React from "react";
import scringAnim from "/public/animations/springs.json";
import Image from "next/image";
import RevealX from "@/app/component/RevealX";
import RevealY from "@/app/component/RevealY";

const Hero = () => {
  return (
    <div className="w-full h-[50vh] lg:h-[80vh] bg-[#00081F] pl-[20px] md:pl-[50px] lg:pl-[100px] flex items-center">
      <div className="w-[60%]">
        <p className="text-[#9EB3CF] font-bwmss01 text-[13px] md:text-[19px]">
          <RevealX>Our Expertise</RevealX>
        </p>
        <h1 className="text-white mt-[10px] font-aeonik tracking-wide font-normal text-[6vw] leading-[6vw]">
          <RevealY>Let us take you further than you’ve ever been.</RevealY>
        </h1>
      </div>
      <div className=" w-[40%] ">
        <div className="w-[100%] relative  ">
          {/* <RevealY> */}
            <Lottie animationData={scringAnim} loop={true} />
            <div className="absolute top-[26%] left-[17.5%] md:top-[24%]  lg:left-[12%] xl:left-[16%]">
              <Image
                src="./brain.svg"
                className="sm:w-[100px] md:w-[140px] lg:w-[220px] xl:w-[18vw]"
                width="60"
                height="200"
                alt="img"
              />
            </div>
          {/* </RevealY> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
