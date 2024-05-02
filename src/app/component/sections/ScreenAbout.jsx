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
        <p className="text-[#9EB3CF] text-[19px] w-[80%]">
          Fast Code AI is a leading AI adoption partner that collaborates with
          industry leaders to harness the power of advanced intelligence. They
          specialize in developing AI solutions for various domains, including
          computer vision, trend forecasting, and targeted consumer insights.
          Ipsum potenti at congue magna amet id egestas. Quisque imperdiet
          feugiat ac sit est vitae cras. Amet ut ornare eu at
        </p>
      </div>
    </div>
  );
};

export default ScreenAbout;
