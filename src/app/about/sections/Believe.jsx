"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const Believe = () => {
  const [activeMain, setActiveMain] = useState(null);
  const navRef = useRef(null);
  const mainRefs = {
    "Handpicked Experts": useRef(null),
    "Our Process & Approach": useRef(null),
    "Strong R&D Expertise": useRef(null),
    Integrity: useRef(null),
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveMain(entry.target.dataset.main);
        }
      });
    }, observerOptions);

    Object.values(mainRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSetActiveMain = (main) => {
    setActiveMain(main);
    mainRefs[main].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full h-[auto] lg:h-[auto] pt-[100px] bg-[#00081F] flex flex-col justify-center">
      {/* Shadow */}
      <div className="absolute top-[-160px] left-0 w-full h-[150px] blur-[50px] translate-y-[30px] scale-90  rounded-[50%] z-[1] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[50px]"></div>
      <div className="flex flex-col justify-center items-center gap-[50px]">
        <div className="">
          <h1 className="font-aeonik text-[8vw] md:text-[7vw] lg:text-[5.5vw] text-white leading-[5.5vw] tracking-wide font-light">
            We Believe In
          </h1>
        </div>

        <div className="w-[90%] md:w-[60%] lg:w-[50%] flex  gap-[30px]">
          {/* Number */}
          <div
            className="pb-[20px] sticky top-[120px] h-fit w-[12%] flex flex-col gap-[15px]"
            ref={navRef}
          >
            {/* Number 1 */}

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-[65px]  h-[70px] md:w-[82px] md:h-[82px] border border-[#1A2758] rounded-[14px] flex items-center justify-center  relative ${
                activeMain === "Our Process & Approach" ? "beliveBg" : ""
              }`}
            >
              <h3 className="text-[#9EB3CF] text-[40px] md:text-[50px] font-aeonik font-thin tracking-wider relative z-10">
                01
              </h3>
              <AnimatePresence>
                {activeMain === "Our Process & Approach" && (
                  <motion.span
                    className="absolute inset-0 rounded-[14px]  beliveBg z-0"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  ></motion.span>
                )}
              </AnimatePresence>
            </motion.div>
            {/* Number 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-[65px] h-[70px] md:w-[82px] md:h-[82px] border border-[#1A2758] rounded-[14px] flex items-center justify-center  relative ${
                activeMain === "Handpicked Experts" ? "beliveBg" : ""
              }`}
            >
              <h3 className="text-[#9EB3CF] text-[40px] md:text-[50px] font-aeonik font-thin tracking-wider relative z-10">
                02
              </h3>
              <AnimatePresence>
                {activeMain === "Handpicked Experts" && (
                  <motion.span
                    className="absolute inset-0 rounded-[14px]  beliveBg z-0"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  ></motion.span>
                )}
              </AnimatePresence>
            </motion.div>
            {/* Number 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-[65px] h-[70px] md:w-[82px] md:h-[82px] border border-[#1A2758] rounded-[14px] flex items-center justify-center  relative ${
                activeMain === "Integrity" ? "beliveBg" : ""
              }`}
            >
              <h3 className="text-[#9EB3CF] text-[40px] md:text-[50px] font-aeonik font-thin tracking-wider relative z-10">
                03
              </h3>
              <AnimatePresence>
                {activeMain === "Integrity" && (
                  <motion.span
                    className="absolute inset-0 rounded-[14px]  beliveBg z-0"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  ></motion.span>
                )}
              </AnimatePresence>
            </motion.div>
            {/* Number 4 */}

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-[65px] h-[70px] md:w-[82px] md:h-[82px] border border-[#1A2758] rounded-[14px] flex items-center justify-center  relative ${
                activeMain === "Strong R&D Expertise" ? "beliveBg" : ""
              }`}
            >
              <h3 className="text-[#9EB3CF] text-[40px] md:text-[50px] font-aeonik font-thin tracking-wider relative z-10">
                04
              </h3>
              <AnimatePresence>
                {activeMain === "Strong R&D Expertise" && (
                  <motion.span
                    className="absolute inset-0 rounded-[14px]  beliveBg z-0"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  ></motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
          {/* Text Content And Animation */}
          <div className="flex  w-[90%] ">
            <div className="pb-[20px] flex flex-col gap-[120px] md:gap-[50px]">
              <div
                className="h-[auto] md:h-[300px] w-[98%] sm:w-[80%] pl-[13px] sm:pl-[30px] md:pr-[20px] md:pt-[50px] flex flex-col justify-center"
                ref={mainRefs["Our Process & Approach"]}
                data-main="Our Process & Approach"
              >
                <h1 className="font-aeonik text-[8vw] lg:text-[3.5vw] text-white leading-[8vw] md:leading-[4vw] tracking-normal font-thin">
                  Excellence
                </h1>
                <p className="text-[#9EB3CF] font-bwmss01 text-base  mt-[15px]">
                  Our commitment to excellence drives us to deliver the highest
                  quality products and services. We ensure that every project we
                  undertake meets the highest standards, from meticulous
                  planning and development to rigorous testing and deployment.
                </p>
              </div>
              <div
                className="h-[auto] md:h-[300px] mt-[70px] md:mt-0 w-[96%] sm:w-[80%] pl-[13px] sm:pl-[30px] md:pr-[20px] flex flex-col justify-center"
                ref={mainRefs["Handpicked Experts"]}
                data-main="Handpicked Experts"
              >
                <h1 className="font-aeonik text-[8vw] lg:text-[3.5vw] text-white leading-[8vw] md:leading-[4vw] tracking-normal font-thin">
                  Innovation
                </h1>
                <p className="text-[#9EB3CF] font-bwmss01 text-base  mt-[15px]">
                  We seek original approaches for achieving our goals, taking
                  advantage of creative communication for our outreach. By
                  embracing new ideas and technologies, we continuously strive
                  to push the boundaries of {"what's"} possible in the realm of
                  AI and software solutions.
                </p>
              </div>

              <div
                className="h-[auto] md:h-[300px] w-[98%] sm:w-[80%] pl-[13px] sm:pl-[30px] md:pr-[20px] flex flex-col justify-center"
                ref={mainRefs["Integrity"]}
                data-main="Integrity"
              >
                <h1 className="font-aeonik text-[8vw] lg:text-[3.5vw] text-white leading-[8vw] md:leading-[4vw] tracking-normal font-thin">
                  Integrity
                </h1>
                <p className="text-[#9EB3CF] font-bwmss01 text-base  mt-[15px]">
                  Integrity is at the core of everything we do. We maintain the
                  highest ethical standards in our business practices, ensuring
                  transparency, honesty, and accountability. Our clients trust
                  us to deliver on our promises, and we are committed to
                  upholding that trust in every aspect of our work.
                </p>
              </div>
              <div
                className="h-[auto] md:h-[300px] w-[98%] sm:w-[80%] pl-[13px] sm:pl-[30px] md:pr-[20px] flex flex-col justify-center"
                ref={mainRefs["Strong R&D Expertise"]}
                data-main="Strong R&D Expertise"
              >
                <h1 className="font-aeonik text-[8vw] lg:text-[3.5vw] text-white leading-[8vw] md:leading-[4vw] tracking-normal font-thin">
                  Collaboration
                </h1>
                <p className="text-[#9EB3CF] font-bwmss01 text-base  mt-[15px]">
                  We believe that the best solutions come from working together.
                  By fostering a collaborative environment, we harness the
                  collective expertise and creativity of our team, partners, and
                  clients, ensuring that every voice is heard and valued.
                </p>
              </div>
            </div>
            {/* Scroll */}
            <div className="pb-[20px] sticky top-[120px] h-fit w-[20%] md:w-[10%] flex flex-col justify-center">
              <div className="w-full min-w-[40px] h-[100px] border-2 border-[#9EB3CF] rounded-full flex justify-center pt-[5px] relative">
                <div className="chevronScroll"></div>
                <div className="chevronScroll"></div>
                <div className="chevronScroll"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[-70px] top-[30%] w-[169px] h-[351px] blur-[50px] translate-y-[167px] scale-90  rounded-[50%] z-[4] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[100px] opacity-[0.5]"></div>
    </div>
  );
};

export default Believe;
