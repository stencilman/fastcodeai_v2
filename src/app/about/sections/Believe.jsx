"use client";
import React, { useState, useEffect, useRef } from "react";

const Believe = () => {
  const [activeMain, setActiveMain] = useState(null);
  const navRef = useRef(null);
  const mainRefs = {
    Inovation: useRef(null),
    Excellence: useRef(null),
    Collaboration: useRef(null),
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
            <div
              className="w-[65px] h-[70px] md:w-[82px] md:h-[82px] border border-[#1A2758] rounded-[14px] flex items-center justify-center "
              // style={{
              //   background:
              //     "transparent linear-gradient(360deg, #13224F 0%, #010D33 0%, #010D34 51%, #020B2A 100%) 0% 0% no-repeat padding-box",
              // }}
            >
              <h3 className="text-[#9EB3CF] text-[40px] md:text-[50px] font-aeonik font-thin tracking-wider">
                01
              </h3>
            </div>
            <div
              className="w-[65px] h-[70px] md:w-[82px] md:h-[82px] border border-[#1A2758] rounded-[14px] flex items-center justify-center"
              //   style={{
              //     background:
              //       "transparent linear-gradient(360deg, #13224F 0%, #010D33 0%, #010D34 51%, #020B2A 100%) 0% 0% no-repeat padding-box",
              //   }}
            >
              <h3 className="text-[#9EB3CF] text-[40px] md:text-[50px] font-aeonik font-thin tracking-wider">
                02
              </h3>
            </div>
            <div
              className="w-[65px] h-[70px] md:w-[82px] md:h-[82px] border border-[#1A2758] rounded-[14px] flex items-center justify-center"
              //   style={{
              //     background:
              //       "transparent linear-gradient(360deg, #13224F 0%, #010D33 0%, #010D34 51%, #020B2A 100%) 0% 0% no-repeat padding-box",
              //   }}
            >
              <h3 className="text-[#9EB3CF] text-[40px] md:text-[50px] font-aeonik font-thin tracking-wider">
                03
              </h3>
            </div>
            <div
              className="w-[65px] h-[70px] md:w-[82px] md:h-[82px] border border-[#1A2758] rounded-[14px] flex items-center justify-center"
              //   style={{
              //     background:
              //       "transparent linear-gradient(360deg, #13224F 0%, #010D33 0%, #010D34 51%, #020B2A 100%) 0% 0% no-repeat padding-box",
              //   }}
            >
              <h3 className="text-[#9EB3CF] text-[40px] md:text-[50px] font-aeonik font-thin tracking-wider">
                04
              </h3>
            </div>
          </div>
          {/* Text Content And Animation */}
          <div className="flex  w-[90%] ">
            <div className="pb-[20px] flex flex-col">
              <div
                className="h-[450px] w-[80%] pl-[30px] pr-[20px] flex flex-col justify-center"
                ref={mainRefs["Inovation"]}
                data-main="Inovation"
              >
                <h1 className="font-aeonik text-[8vw] lg:text-[3.5vw] text-white leading-[4vw] tracking-normal font-thin">
                  Inovation
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
                className="h-[450px] w-[80%] pl-[30px] pr-[20px] flex flex-col justify-center"
                ref={mainRefs["Excellence"]}
                data-main="Excellence"
              >
                <h1 className="font-aeonik text-[8vw] lg:text-[3.5vw] text-white leading-[4vw] tracking-normal font-thin">
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
                className="h-[450px] w-[80%] pl-[30px] pr-[20px] flex flex-col justify-center"
                ref={mainRefs["Collaboration"]}
                data-main="Collaboration"
              >
                <h1 className="font-aeonik text-[8vw] lg:text-[3.5vw] text-white leading-[4vw] tracking-normal font-thin">
                  Collaboration
                </h1>
                <p className="text-[#9EB3CF] font-bwmss01 text-base  mt-[15px]">
                  We believe that the best solutions come from working together.
                  By fostering a collaborative environment, we harness the
                  collective expertise and creativity of our team, partners, and
                  clients, ensuring that every voice is heard and valued.
                </p>
              </div>

              <div
                className="h-[auto] w-[80%] pl-[30px] pr-[20px] flex flex-col justify-center"
                ref={mainRefs["Integrity"]}
                data-main="Integrity"
              >
                <h1 className="font-aeonik text-[8vw] lg:text-[3.5vw] text-white leading-[4vw] tracking-normal font-thin">
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
