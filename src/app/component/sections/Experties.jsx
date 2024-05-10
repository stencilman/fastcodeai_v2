"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const Experties = () => {
  const [activeMain, setActiveMain] = useState(null);
  const navRef = useRef(null);
  const mainRefs = {
    "Artificial Intelligence": useRef(null),
    "Computer Vision": useRef(null),
    "Machine Learning": useRef(null),
    "Data Science": useRef(null),
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
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
    <div className="bg-[#00081F] w-full h-[100%]  relative pb-[250px]">
      <div className="grid grid-cols-12 gap-[0px] pl-[170px] pr-[127px] w-full h-[100%]  justify-center pt-[250px]">
        {/* NAV */}

        <div
          className="col-span-3 flex flex-col gap-[15px] sticky top-[10vw] h-fit"
          ref={navRef}
        >
          {/* Artificial Intelligence */}
          <div
            className={`w-[77px] h-[77px] rounded-full flex items-center justify-center ${
              activeMain === "Artificial Intelligence"
                ? "bg-gradient-to-br from-[#2DC1C3] to-[#0268F2]"
                : "bg-gradient-to-br from-[#13224F] to-[#13224F]"
            }`}
            onClick={() => handleSetActiveMain("Artificial Intelligence")}
          >
            <Image src="/experties/icon1.svg" width="44" height="44" alt="" />
          </div>
          {/* Computer Vision */}
          <div
            className={`w-[77px] h-[77px] rounded-full flex items-center justify-center ${
              activeMain === "Computer Vision"
                ? "bg-gradient-to-br from-[#2DC1C3] to-[#0268F2]"
                : "bg-gradient-to-br from-[#13224F] to-[#13224F]"
            }`}
            onClick={() => handleSetActiveMain("Computer Vision")}
          >
            <Image src="/experties/icon2.svg" width="44" height="44" alt="" />
          </div>
          {/* Machine Learning */}
          <div
            className={`w-[77px] h-[77px] rounded-full flex items-center justify-center ${
              activeMain === "Machine Learning"
                ? "bg-gradient-to-br from-[#2DC1C3] to-[#0268F2]"
                : "bg-gradient-to-br from-[#13224F] to-[#13224F]"
            }`}
            onClick={() => handleSetActiveMain("Machine Learning")}
          >
            <Image src="/experties/icon3.svg" width="44" height="44" alt="" />
          </div>
          {/* Data Science */}
          <div
            className={`w-[77px] h-[77px] rounded-full flex items-center justify-center ${
              activeMain === "Data Science"
                ? "bg-gradient-to-br from-[#2DC1C3] to-[#0268F2]"
                : "bg-gradient-to-br from-[#13224F] to-[#13224F]"
            }`}
            onClick={() => handleSetActiveMain("Data Science")}
          >
            <Image src="/experties/icon4.svg" width="44" height="44" alt="" />
          </div>
        </div>

        {/* Main */}
        <div className="col-span-9 w-full flex flex-col gap-[90px] relative overflow-scroll h-[100%]">
          {/* Artificial Intelligence */}
          <div
            className="main-content"
            ref={mainRefs["Artificial Intelligence"]}
            data-main="Artificial Intelligence"
          >
            <div className="flex gap-[5%] w-full">
              <div className="w-[45%]">
                <h1 className="text-[42px] text-white font-aeonik">Artificial Intelligence</h1>
                <p className="text-[#9EB3CF] text-[19px] font-light pt-[15px] font-bwmss01 ">
                Develop and implement bespoke AI solutions to rapidly advance your organizational goals. We collaborate with you to identify the optimal artificial intelligence strategies, tools and technologies.
                </p>
              </div>
              <div>
                <Image
                  src="/experties/ai.png"
                  width="470"
                  height="244"
                  alt="consultation"
                />
              </div>
            </div>
          </div>
          {/* Computer Vision */}
          <div
            className="main-content"
            ref={mainRefs["Computer Vision"]}
            data-main="Computer Vision"
          >
            <div className="flex gap-[5%] w-full">
              <div className="w-[45%]">
                <h1 className="text-[42px] text-white font-aeonik ">
                  Computer Vision
                </h1>
                <p className="text-[#9EB3CF] text-[19px] font-light pt-[15px] font-bwmss01">
                We develop custom software solutions using computer vision and deep learning to analyze images, videos, LiDAR, and live streams, helping businesses identify and track objects for enhanced decision-making.
                </p>
              </div>
              <div>
                <Image
                  src="/experties/computer_vesion.png"
                  width="470"
                  height="244"
                  alt="consultation"
                />
              </div>
            </div>
          </div>
          {/* Machine Learning */}
          <div
            className="main-content"
            ref={mainRefs["Machine Learning"]}
            data-main="Machine Learning"
          >
            <div className="flex gap-[5%] w-full">
              <div className="w-[45%]">
                <h1 className="text-[42px] text-white font-aeonik">Machine Learning</h1>
                <p className="text-[#9EB3CF] text-[19px] font-light pt-[15px] font-bwmss01">
                Design and implement innovative ML solutions rapidly — from foundational infrastructure to customer products. Our expert engineers will partner with you to advance innovation effectively within your company.
                </p>
              </div>
              <div>
                <Image
                  src="/experties/consultation2.png"
                  width="470"
                  height="244"
                  alt="consultation"
                />
              </div>
            </div>
          </div>
          {/* Data Science */}
          <div
            className="main-content"
            ref={mainRefs["Data Science"]}
            data-main="Data Science"
          >
            <div className="flex gap-[5%] w-full">
              <div className="w-[45%]">
                <h1 className="text-[42px] text-white font-aeonik">Data Science</h1>
                <p className="text-[#9EB3CF] text-[19px] font-light pt-[15px] font-bwmss01">
                Our full-stack data scientists excel in solving intricate data challenges, regardless of data volume or structure, enabling your business to significantly improve efficiency and increase profitability rapidly.
                </p>
              </div>
              <div>
                <Image
                  src="/experties/ds.png"
                  width="470"
                  height="244"
                  alt="consultation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experties;
