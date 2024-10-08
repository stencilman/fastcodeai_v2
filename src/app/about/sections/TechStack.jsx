"use client";
import Image from "next/image";
import React from "react";
import Shadow from "../../component/Shadow";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";


const TechStack = ({ z }) => { 
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-80%", "50%"]);

  const x2 = useTransform(scrollYProgress, [0, 1], ["30%", "-80%"]);

  const slider1 = [
    {
      src: "/tech_stacks/icon2.svg",
      w: "120",
      sm: "90",
    },

    {
      src: "/tech_stacks/icon5.svg",
      w: "120",
      sm: "90",
    },

    {
      src: "/tech_stacks/icon10.svg",
      w: "120",
      sm: "90",
    },

    {
      src: "/tech_stacks/icon3.svg",
      w: "100",
      sm: "50",
    },
    {
      src: "/tech_stacks/icon2.svg",
      w: "120",
      sm: "90",
    },

    {
      src: "/tech_stacks/icon4.svg",
      w: "140",
      sm: "97",
    },
    {
      src: "/tech_stacks/icon5.svg",
      w: "120",
      sm: "90",
    },

    {
      src: "/tech_stacks/icon2.svg",
      w: "120",
      sm: "90",
    },
  ];

  const slider2 = [
    {
      src: "/tech_stacks/icon8.svg",
      w: "120",
      sm: "90",
    },

    {
      src: "/tech_stacks/icon6.svg",
      w: "140",
      sm: "100",
    },

    {
      src: "/tech_stacks/icon7.svg",
      w: "130",
      sm: "95",
    },

   {
      src: "/tech_stacks/icon4.svg",
      w: "140",
      sm: "97",
    },

    {
      src: "/tech_stacks/icon5.svg",
      w: "120",
      sm: "90",
    },

    {
      src: "/tech_stacks/icon1.svg",
      w: "120",
      sm: "90",
    },
    {
      src: "/tech_stacks/icon6.svg",
      w: "120",
      sm: "90",
    },
    {
      src: "/tech_stacks/icon7.svg",
      w: "130",
      sm: "95",
    },
  ];
  return (
    <>
      <div
        ref={container}
        className={`w-full h-[90vh] lg:h-[100vh] bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83 relative flex flex-col items-center justify-center ${z}`}
      >
        {/* shadow */}
        {/* <div className="absolute bottom-[0px] left-0 w-full h-[150px] blur-[50px] translate-y-[30px] scale-90  rounded-[50%] z-[-1] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[50px]"></div> */}
        {/* <Shadow /> */}

        <div className="flex flex-col lg:flex-row gap-[10vh] lg:gap-[10px]  w-full items-center z-[3]">
          <div className="relative z-[5] h-auto lg:h-full pl-[20px] md:pl-[50px] lg:pl-[100px] w-[100%] lg:w-[40%] ">
            <div className="w-full h-full flex flex-col justify-center">
              <h1 className="text-[8vw] md:text-[7vw] tracking-normal lg:text-[51px] text-white font-aeonik">
                Tech Stack
              </h1>
              <p className="text-[#9EB3CF] pr-[20px] text-base md:text-lg font-light mt-[4vw] lg:mt-[30px] font-bwmss01">
                {"We've "}worked with a diverse clientele - from Forbes 500
                Enterprise firms to Silicon Valley startups, across various
                industries.
              </p>
            </div>
          </div>
          {/* slidingImages */}
          <div className="w-[100%] lg:w-[60%] flex flex-col gap-[4vw] md:gap-[2vw] relative z-[1] overflow-x-hidden">
            <div className="absolute top-[-19px] lg:top-0 left-[-60px] md:left-[] lg:left-[-65px] w-[80px] h-[107%] lg:h-[100%]  bg-gradient-to-br from-[#000a2b] to-[#000b2c] opacity-83 z-20 blur-[10px]"></div>
            <div className="absolute lg:hidden top-[-19px] lg:top-0 right-[-60px] md:right-[] lg:right-[-65px] w-[80px] h-[107%] lg:h-[100%]  bg-gradient-to-br from-[#000a2b] to-[#000b2c] opacity-83 z-20 blur-[10px]"></div>
            {/* slider */}
            <motion.div
              style={{
                x: x1,
                transition: { duration: 0.5, type: "spring", stiffness: 100 },
              }}
              className="flex relative gap-[12px] sm:gap-[20px] w-[250%]"
            >
              {slider1.map((e, i) => {
                return (
                  <div
                    key={i}
                    className="border-[#1D2B4F] cursor-pointer transition border-color duration-500 hover:border-[#ffffff92] hover:border border rounded-[18px] min-w-[150px] w-[258px] h-[122px] md:h-[182px] flex items-center justify-center"
                  >
                    <Image
                      className={`w-[${e.sm}px] md:w-[${e.w}px]`}
                      src={e.src}
                      width={e.w}
                      height="70"
                      alt="Logo"
                    />
                  </div>
                );
              })}
            </motion.div>
            {/* slider */}
            <motion.div
              style={{
                x: x2,
                transition: { duration: 0.5, type: "spring", stiffness: 100 },
              }}
              className="flex gap-[12px] sm:gap-[20px] ml-[0px] lg:ml-[120px] w-[250%]"
            >
              {slider2.map((e, i) => {
                return (
                  <div
                    key={i}
                    className="border-[#1D2B4F] cursor-pointer transition border-color duration-500 hover:border-[#ffffff92] hover:border border rounded-[18px] min-w-[150px] w-[258px] h-[122px] md:h-[182px] flex items-center justify-center"
                  >
                    <Image
                      className={`w-[${e.sm}px] md:w-[${e.w}px]`}
                      src={e.src}
                      width={e.w}
                      height="70"
                      alt="Logo"
                    />
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* <div className="w-full h-[100vh]  bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83 flex gap-[10px] items-center relative z-[-2]">
          <div className="pl-[100px] w-[40%] ">
            <h1 className="text-[51px] text-white">Out Clients</h1>
            <p className="text-[#9EB3CF] text-[19px] font-light ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions
              of Lorem Ipsum.
            </p>
          </div>
          <div className="w-[60%]">
            <div className="flex gap-[20px] ">
              <div className="border-[#1D2B4F] cursor-pointer transition border-color duration-500 hover:border-[#ffffff92] hover:border border rounded-[18px] w-[258px] h-[182px] flex items-center justify-center">
                <Image
                  src="/mercedesLogo.png"
                  width="122"
                  height="70"
                  alt="mercedesLogo"
                />
              </div>
              <div className="border-[#1D2B4F] cursor-pointer transition border-color duration-500 hover:border-[#ffffff92] hover:border border rounded-[18px] w-[258px] h-[182px] flex items-center justify-center">
                <Image
                  src="/mercedesLogo.png"
                  width="122"
                  height="70"
                  alt="mercedesLogo"
                />
              </div>
              <div className="border-[#1D2B4F] cursor-pointer transition border-color duration-500 hover:border-[#ffffff92] hover:border border rounded-[18px] w-[258px] h-[182px] flex items-center justify-center">
                <Image
                  src="/mercedesLogo.png"
                  width="122"
                  height="70"
                  alt="mercedesLogo"
                />
              </div>
              <div className="border-[#1D2B4F] cursor-pointer transition border-color duration-500 hover:border-[#ffffff92] hover:border border rounded-[18px] w-[258px] h-[182px] flex items-center justify-center">
                <Image
                  src="/mercedesLogo.png"
                  width="122"
                  height="70"
                  alt="mercedesLogo"
                />
              </div>
            </div>
            <div className="flex gap-[20px] mt-[20px] ml-[54px]">
              <div className="border-[#1D2B4F] cursor-pointer transition border-color duration-500 hover:border-[#ffffff92] hover:border border rounded-[18px] w-[258px] h-[182px] flex items-center justify-center ">
                <Image
                  src="/mercedesLogo.png"
                  width="122"
                  height="70"
                  alt="mercedesLogo"
                />
              </div>
              <div className="border-[#1D2B4F] cursor-pointer transition border-color duration-500 hover:border-[#ffffff92] hover:border border rounded-[18px] w-[258px] h-[182px] flex items-center justify-center">
                <Image
                  src="/mercedesLogo.png"
                  width="122"
                  height="70"
                  alt="mercedesLogo"
                />
              </div>
              <div className="border-[#1D2B4F] cursor-pointer transition border-color duration-500 hover:border-[#ffffff92] hover:border border rounded-[18px] w-[258px] h-[182px] flex items-center justify-center">
                <Image
                  src="/mercedesLogo.png"
                  width="122"
                  height="70"
                  alt="mercedesLogo"
                />
              </div>
              <div className="border-[#1D2B4F] cursor-pointer transition border-color duration-500 hover:border-[#ffffff92] hover:border border rounded-[18px] w-[258px] h-[182px] flex items-center justify-center">
                <Image
                  src="/mercedesLogo.png"
                  width="122"
                  height="70"
                  alt="mercedesLogo"
                />
              </div>
            </div>
          </div>
        </div> */}
    </>
  );
};

export default TechStack;
