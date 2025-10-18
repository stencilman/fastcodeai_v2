"use client";
import Image from "next/image";
import React from "react";
import Shadow from "../../Shadow";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import mbux from "../../../../../public//our-clients/mercedes.png";
import Bosch from "../../../../../public//our-clients/Bosch.png";
import fitlab from "../../../../../public//our-clients/fitlab.png";
import meta from "../../../../../public//our-clients/Meta.png";
import textiles from "../../../../../public//our-clients/textiles.png";
const ClientSlide = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-80%", "50%"]);

  const x2 = useTransform(scrollYProgress, [0, 1], ["30%", "-80%"]);

  const slider1 = [
    {
      src: textiles,
    },
    {
      src: mbux,
    },

    {
      src: Bosch,
    },

    {
      src: fitlab,
    },

    {
      src: meta,
    },
    {
      src: mbux,
    },
    {
      src: textiles,
    },
    {
      src: Bosch,
    },
    {
      src: fitlab,
    },
    {
      src: textiles,
    },
    {
      src: mbux,
    },
    // {
    //   src: fitlab,
    // },

    // {
    //   src: meta,
    // },
  ];

  const slider2 = [
    {
      src: meta,
    },

    {
      src: textiles,
    },

    {
      src: Bosch,
    },

    {
      src: mbux,
    },
    {
      src: meta,
    },

    {
      src: textiles,
    },

    {
      src: Bosch,
    },

    {
      src: mbux,
    },
    {
      src: textiles,
    },
    {
      src: meta,
    },

    {
      src: fitlab,
    },

    {
      src: Bosch,
    },

  ];

  return (
    <div
      ref={container}
      className="w-full min-h-[90vh] min-lg:h-[100vh] bg-[#00081F]  relative flex flex-col items-center justify-center"
    >
      {/* shadow */}
      {/* <div className="absolute bottom-[0px] left-0 w-full h-[150px] blur-[50px] translate-y-[30px] scale-90  rounded-[50%] z-[-1] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[50px]"></div> */}
      <Shadow />

      <div className="flex pt-[50px] sm:pt-0 flex-col gap-[60px] w-full items-center ">
        <div className=" h-auto w-[100%] text-center  ">
          <div className="w-full h-full flex flex-col justify-center">
            <h1 className="text-[8vw] md:text-[7vw] tracking-normal lg:text-[51px] text-white font-aeonik">
              Trusted by Industry Leaders
            </h1>
          </div>
        </div>
        {/* slidingImages */}
        <div className="w-[100%]  flex flex-col gap-[4vw] md:gap-[2vw] relative z-[1] overflow-x-hidden">
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
                    src={e.src}
                    width="122"
                    height="70"
                    alt="mercedesLogo"
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
            className="flex gap-[12px] sm:gap-[20px] ml-[0px] lg:ml-[0px] w-[250%]"
          >
            {slider2.map((e, i) => {
              return (
                <div
                  key={i}
                  className="border-[#1D2B4F] cursor-pointer transition border-color duration-500 hover:border-[#ffffff92] hover:border border rounded-[18px] min-w-[150px] w-[258px] h-[122px] md:h-[182px] flex items-center justify-center"
                >
                  <Image
                    src={e.src}
                    width="122"
                    height="70"
                    alt="mercedesLogo"
                    placeholder="blur"
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClientSlide;
