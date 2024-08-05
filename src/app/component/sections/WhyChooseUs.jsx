"use client";
import Lottie from "lottie-react";
import React, { useEffect, useRef } from "react";
import chooseUS from "../../../../public/animations/chooseUS.json";
import Image from "next/image";
import icon1 from "../../../../public/whychooseus/icon1.png";
import icon2 from "../../../../public/whychooseus/icon2.png";
import icon3 from "../../../../public/whychooseus/icon3.png";
import { motion, useInView, useAnimation } from "framer-motion";
import RevealX from "../RevealX";
import RevealY from "../RevealY";

const WhyChooseUs = () => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  // const mainControls = useAnimation();

  // useEffect(() => {
  //   console.log("isInView", isInView);
  //   if (isInView) {
  //     mainControls.start("visible");
  //   }
  // }, [isInView]);

  return (
    <div className="w-full h-auto lg:min-h-[120vh] my-[75px] pl-[20px] pr-[20px] lg:pl-[120px] lg:pr-[100px] relative bg-[#00081F] flex flex-col justify-center ">
      <div className="absolute right-[10px]  w-[169px] h-[421px] blur-[50px] translate-y-[167px] scale-90  rounded-[50%] z-[4] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[100px]"></div>
      <h1 className="text-[8vw] md:text-[7vw] lg:text-5xl  text-white font-aeonik">
        Why Choose Us?
      </h1>
      <div className="relative z-10 flex flex-col lg:flex-row   gap-[27px] w-full h-[auto] mt-[61px]">
        {/* <div ref={ref} className="relative flex-1  overflow-hidden w-full h-[auto]">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
          > */}
         
            <div className="flex-1 bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83 h-[auto] rounded-[18px] w-full ">
              <div className="w-full flex flex-col items-center gap-[35px] lg:gap-[125px]">
                <h3 className="text-[32px]  w-[290px] text-white text-center font-aeonik pt-[60px] lg:pt-[94px]">
                  <span className="font-bold font-bwmss01">Al</span> Adoption across diverse
                  domains
                </h3>
                <div className="w-[300px] sm:w-[365px] md:w-[413px] h-[250px] md:h-[332px] relative left-[-29px] lg:left-[-38px]">
                  <Lottie
                    style={{ width: "117%" }}
                    animationData={chooseUS}
                    loop={true}
                  />
                </div>
              </div>
            {/* </div>
          </motion.div> */}
        </div>
        <div className="flex gap-[27px] flex-col">
          <RevealY>
          <div className=" bg-gradient-to-br from-[#000E32] to-[#000929] h-[auto] lg:h-[auto] rounded-[18px]">
            <div className="flex flex-col lg:flex-row py-[29px] px-[35px] gap-[30px] items-center justify-center lg:justify-normal w-full h-full">
              <div className="flex w-full lg:w-[200px] gap-[25px] lg:gap-0 items-center lg:justify-center">
                <Image
                  className="w-[45px] md:w-[60px] lg:w-[70px] lg:mt-[20px] relative top-0 lg:top-[-20px]"
                  src={icon1}
                  width="40"
                  height="55"
                  alt="icon"
                />
                <h3 className="text-white tracking-normal text-[30px] sm:text-[35px] leading-[40px] font-aeonik lg:hidden ">
                  Handpicked Experts
                </h3>
              </div>
              <div className="text-white">
                <h3 className="hidden tracking-normal lg:block text-3xl font-aeonik">
                  Handpicked Experts
                </h3>
                <p className="text-lg text-[#9EB3CF] font-bwmss01">
                  Comprised of elite professionals sourced from {"India's"}{" "}
                  finest academic institutions, our team offers unparalleled
                  expertise to catalyze your innovation.
                </p>
              </div>
            </div>
          </div>
          </RevealY>
          <RevealY>
          <div className=" bg-gradient-to-br from-[#000E32] to-[#000929] h-[auto] lg:h-[auto] rounded-[18px]">
            <div className="flex flex-col lg:flex-row py-[29px] px-[35px] gap-[30px] items-center justify-center lg:justify-normal w-full h-full">
              <div className="flex w-full lg:w-[200px] gap-[25px] lg:gap-0 items-center lg:justify-center">
                <Image
                  className="w-[45px] md:w-[60px] lg:w-[70px] lg:mt-[20px] relative top-0 lg:top-[-20px]"
                  src={icon2}
                  width="40"
                  height="55"
                  alt="icon"
                />
                <h3 className="text-white tracking-normal text-[30px] sm:text-[35px] leading-[40px] font-aeonik lg:hidden ">
                  Our Process & Approach
                </h3>
              </div>
              <div className="text-white">
                <h3 className="hidden tracking-normal lg:block text-3xl font-aeonik">
                  Our Process & Approach
                </h3>
                <p className="text-lg text-[#9EB3CF] font-bwmss01">
                  Tailored engagement models for Web, Mobile, IoT, and Edge
                  computing ensure fluid project progression from initial
                  concept to full deployment.
                </p>
              </div>
            </div>
          </div>
          </RevealY>
          <RevealY>
          <div className=" bg-gradient-to-br from-[#000E32] to-[#000929] h-[auto] lg:h-[auto] rounded-[18px]">
            <div className="flex flex-col lg:flex-row py-[29px] px-[35px] gap-[4vw] items-center justify-center lg:justify-normal w-full h-full">
              <div className="flex w-full lg:w-[200px] gap-[25px] lg:gap-0 items-center lg:justify-center">
                <Image
                  className="w-[45px] md:w-[60px] lg:w-[70px] lg:mt-[20px] relative top-0 lg:top-[-20px]"
                  src={icon3}
                  width="40"
                  height="55"
                  alt="icon"
                />
                <h3 className="text-white tracking-normal text-[30px] sm:text-[35px] leading-[40px] font-aeonik lg:hidden ">
                  Strong R & D Expertise
                </h3>
              </div>
              <div className="text-white">
                <h3 className="hidden tracking-normal lg:block text-3xl font-aeonik">
                  Strong R & D Expertise
                </h3>
                <p className="text-lg text-[#9EB3CF] font-bwmss01">
                  A decade of leading AI innovation, underscored by numerous
                  patents and publications, showcases our robust research and
                  development prowess, equipped to resolve complex challenges
                  and excel in delivery.
                </p>
              </div>
            </div>
          </div>
          </RevealY>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
