"use client";
import React from "react";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <div
      className="w-full h-[100vh] relative bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83
    "
    >
      {/* <Navbar /> */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="w-full  h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/vdo4.mp4"
        />
         <div className="absolute inset-0 bg-black opacity-[0.65]"></div>
      </div>
      <div className="w-full bottom-28 absolute z-[1] text-center ">
        <h1 className="text-[#F3F3F3] text-8xl pb-[20px]">
        Accelerating Innovation
        </h1>
        <p className="text-[#9EB3CF] text-lg items-center">
        Expertly engineered tailored AI solutions—precision, reliability, <br />  and unrelenting excellence

          {/* <br /> to harness cutting edge intelligence */}
        </p>
      </div>
    </div>
  );
};

export default Hero;
