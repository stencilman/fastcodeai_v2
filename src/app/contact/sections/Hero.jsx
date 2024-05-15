import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[100vh] bg-[#00081F] relative flex justify-center items-center">
      <div className="absolute left-[-80px] top-[-10px] w-[169px] h-[321px] blur-[50px] translate-y-[167px] scale-90  rounded-[50%] z-[4] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[100px]"></div>
      <video
      style={{mixBlendMode: "screen"}}
          className="absolute top-[20%] right-[10%]"
          type="video/mp4" 
          autoPlay
          muted
          loop
          playsInline
          width="517" height="576"
          src="/contact/bgVideo.mp4"
        />
      <div className="w-[60%]">
        <h1 className="text-white font-aeonik tracking-wide text-center font-thin leading-[86px] text-[93px]">
          {"Let's"} Create <br />{" "}
          <b className="text-white text-center leading-[86px] font-aeonik font-bold text-[93px]">
            Something Greate Together
          </b>
        </h1>
        <p className="text-[#9EB3CF] text-center mt-[35px] font-bwmss01 text-lg">
          Contact us and lets bring your vision to life
        </p>
      </div>
    </div>
  );
};

export default Hero;
