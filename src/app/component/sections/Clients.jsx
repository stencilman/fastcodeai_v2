"use client";
import Image from "next/image";
import React from "react";
import Shadow from "../Shadow";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Clients = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-50%", "10%"]);

  const x2 = useTransform(scrollYProgress, [0, 1], ["10%", "-50%"]);

  const slider1 = [
    {
      src: "/our-clients/mercedes.png",
    },

    {
      src: "/our-clients/Bosch.png",
    },

    {
      src: "/our-clients/fitlab.png",
    },

    {
      src: "/our-clients/Meta.png",
    },
    {
      src: "/our-clients/mercedes.png",
    },

    {
      src: "/our-clients/Bosch.png",
    },

    {
      src: "/our-clients/fitlab.png",
    },

    {
      src: "/our-clients/Meta.png",
    },
  ];

  const slider2 = [
    {
      src: "/our-clients/Meta.png",
    },

    {
      src: "/our-clients/textiles.png",
    },

    {
      src: "/our-clients/Bosch.png",
    },

    {
      src: "/our-clients/mercedes.png",
    },
    {
      src: "/our-clients/Meta.png",
    },

    {
      src: "/our-clients/textiles.png",
    },

    {
      src: "/our-clients/Bosch.png",
    },

    {
      src: "/our-clients/mercedes.png",
    },
  ];
  return (
    <>
      <div
        ref={container}
        className="w-full h-[100vh] bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83 relative flex flex-col items-center justify-center"
      >
        {/* shadow */}
        {/* <div className="absolute bottom-[0px] left-0 w-full h-[150px] blur-[50px] translate-y-[30px] scale-90  rounded-[50%] z-[-1] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[50px]"></div> */}
        <Shadow />

        <div className="flex gap-[10px]  w-full items-center z-[3]">
          <div className="relative z-[5] h-full pl-[100px] w-[40%] ">
            <div className="w-full h-full flex flex-col justify-center">
              <h1 className="text-[51px] text-white">Our Clients</h1>
              <p className="text-[#9EB3CF] pl-[20px] text-[19px] font-light mt-[30px]">
                {"We've "}worked with a diverse clientele - from Forbes 500
                Enterprise firms to Sillicon Valley startups, across various
                industries.
              </p>
            </div>
          </div>
          {/* slidingImages */}
          <div className="w-[60%] flex flex-col gap-[2vw] relative z-[1] overflow-x-hidden">
            <div className="absolute left-[-65px] w-[80px] h-full  bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83 z-20 blur-[10px]"></div>
            {/* slider */}
            <motion.div style={{ x: x1 }} className="flex relative gap-[20px] w-[250%]">
              {slider1.map((e, i) => {
                return (
                  <div
                    key={i}
                    className="border-[#1D2B4F] cursor-pointer transition border-color duration-500 hover:border-[#ffffff92] hover:border border rounded-[18px] w-[258px] h-[182px] flex items-center justify-center"
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
              style={{ x: x2 }}
              className="flex gap-[20px] ml-[120px] w-[250%]"
            >
              {slider2.map((e, i) => {
                return (
                  <div
                    key={i}
                    className="border-[#1D2B4F] cursor-pointer transition border-color duration-500 hover:border-[#ffffff92] hover:border border rounded-[18px] w-[258px] h-[182px] flex items-center justify-center"
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

export default Clients;
