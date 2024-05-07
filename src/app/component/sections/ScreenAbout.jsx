"use client";
import React from "react";
import scringAnim from "../../../../public/animations/springs.json";
import Lottie from "lottie-react";
import Image from "next/image";

const ScreenAbout = () => {
  return (
    <div className="w-full h-[100vh]  flex gap-[20px] items-center bg-[#00081F]">
      <div className="relative">
        <div className="w-[600px]  h-[600px] transform scale-x-[-1]">
          <Lottie animationData={scringAnim} loop={true} />
        </div>
        <div className="absolute left-[240px] top-[129px]">
          <Image src="./brain.svg" width="270" height="200" alt="img" />
        </div>
      </div>
      <div className="mb-[100px]">
        <h1 className="text-[51px] text-white">About FastCodeAI</h1>
        <p className="text-[#9EB3CF] text-[19px] w-[80%] pt-[20px]">
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
