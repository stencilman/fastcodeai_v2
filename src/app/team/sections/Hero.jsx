import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[70vh] md:h-[100vh] bg-teamHero bg-cover md:bg-cover bg-no-repeat flex pl-[20px] md:pl-[100px] lg:pl-[176px] md:items-center relative pt-[80px] md:pt-0">
              {/* <div className="absolute inset-0  bg-[#00000047] h-screen w-screen"></div> */}

      <div className="flex flex-col gap-[20px] justify-center md:justify-normal sm:gap-[20px] md:gap-[15px] lg:gap-[30px] ">
        {/* <p className="text-base md:text-lg text-[#9EB3CF] font-bwmss01 ">Meet Our</p> */}
        <h1 className="text-[8vw] leading-[8.5vw] md:text-[7vw] md:leading-[7.5vw] lg:text-5xl lg:w-[100%] text-white font-aeonik tracking-wide">
        Exceptional Teams <br/>Lead to <br/> Exceptional Results
         
        </h1>
        <p className="text-base md:text-lg text-[#9EB3CF] w-[90%] sm:w-[70%] md:w-[50%] lg:w-[46%] font-bwmss01 ">
        We are a group of ambitious AI experts and coders committed to delivering innovative solutions. Our passion for excellence drives us to redefine the boundaries of technology.
        </p>
      </div>
    </div>
  );
};

export default Hero;
