"use client";
import RevealX from "../../component/RevealX";
import RevealY from "../../component/RevealY";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  return (
    <div className="w-full h-[100vh] bg-[#00081F] relative flex justify-center items-center ">
      <div className="absolute left-[-80px] top-[-10px] w-[169px] h-[321px] blur-[50px] translate-y-[167px] scale-90  rounded-[50%] z-[4] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[100px]"></div>
      <video
        style={{ mixBlendMode: "screen" }}
        className="absolute top-[20%] right-[10%] w-[200px] h-[200px] md:w-[517px] md:h-[576px]"
        type="video/mp4"
        autoPlay
        muted 
        loop
        playsInline
        width="517" 
        height="576"
        src="/contact/bgVideo.mp4"
      />
      <div className="w-[60%]">
        <RevealY>
          <h1 className="text-white font-aeonik tracking-wide text-center font-thin lg:leading-[86px] text-[50px] leading-[52px] lg:text-[93px]">
            <b className="text-white text-center lg:leading-[86px] font-aeonik  text-[50px] leading-[52px] lg:text-[93px]">
              Unleash {"AI's"}
              <br /> Creative Potential
            </b>
          </h1>
        </RevealY>
        <RevealX>
          <p className="text-[#9EB3CF] text-center mt-[35px] font-bwmss01 text-lg">
            Unlock the intriguing possibilities of AI for innovation and
            creativity.
            <br /> Let AI be your partner in crafting captivating solutions.
          </p>
        </RevealX>
      </div>
    </div>
  );
};

export default Hero;
