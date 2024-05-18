"use client";
import React from "react";
import scringAnim from "../../../../public/animations/springs.json";
import Lottie from "lottie-react";
import Image from "next/image";

const ScreenAbout = () => {
  return (
    <div className="w-full h-[90vh] sm:h-[86vh] md:h-[87vh] lg:h-[100vh]  flex flex-col lg:flex-row relative lg:static gap-[20px] items-center bg-[#00081F]">
      <div className="absolute lg:relative left-0 top-[20vw] sm:top-[16vw] lg:top-0">
        <div className="w-[92vw] md:w-[70vw] h-[462px] lg:w-[600px] lg:h-[600px] transform scale-x-[-1]">
          <Lottie animationData={scringAnim} loop={true} />
        </div>
        <div className="absolute top-[21vw] md:top-[14vw] left-[39%]  lg:left-[240px] lg:top-[129px]">
          <Image
            className="w-[42vw] md:w-[32vw] lg:w-[270px]"
            src="./brain.svg"
            width="270"
            height="200"
            alt="img"
          />
        </div>
      </div>
      <div className="mb-[100px] absolute lg:static top-[60vw] text-center lg:text-left">
        <h1 className="text-[8vw] md:text-[7vw] lg:text-[51px] text-white font-aeonik tracking-normal relative lg:static top-[-50vw] lg:top-0 ">
          About FastCodeAI
        </h1>
        <p className="text-[#9EB3CF] text-base sm:text-lg w-[100%] lg:w-[80%] px-[10vw] lg:px-0 pt-[28vw] sm:pt-[25vw] md:pt-[8vw] lg:pt-[20px] font-bwmss01">
          As a leading AI adoption partner, we empower industry leaders to
          harness cutting-edge intelligence, scale and execute applications, and
          automate operations. We enhance safety, streamline experiences, and
          provide deep insights into machinery and manufacturing through
          advanced automation and data exchange. Our commitment to Excellence,
          Innovation, and Integrity drives every solution.
        </p>
      </div>
    </div>
  );
};

export default ScreenAbout;
