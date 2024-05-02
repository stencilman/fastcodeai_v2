"use client"
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const Experties = () => {
  const [activeMain, setActiveMain] = useState(null);
  const navRef = useRef(null);
  const mainRefs = {
    "Consultation": useRef(null),
    "ML Software Solutions": useRef(null),
    "Niche Staffing": useRef(null),
    "Product Portfolio": useRef(null),
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
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
    mainRefs[main].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#00081F] w-full h-[100vh] overflow-x-hidden overflow-y-hidden sticky top-0">
      <div className="flex gap-[120px] pl-[170px] pr-[127px] w-full h-[100vh] relative justify-center pt-[250px]">
        {/* NAV */}
        <div className="flex flex-col gap-[15px]" ref={navRef}>
          {/* Consultation */}
          <div
            className={`w-[77px] h-[77px] rounded-full flex items-center justify-center ${
              activeMain === "Consultation"
                ? "bg-gradient-to-br from-[#2DC1C3] to-[#0268F2]"
                : "bg-gradient-to-br from-[#13224F] to-[#13224F]"
            }`}
            onClick={() => handleSetActiveMain("Consultation")}
          >
            <Image src="/experties/icon1.svg" width="44" height="44" alt="" />
          </div>
          {/* ML Software Solutions */}
          <div
            className={`w-[77px] h-[77px] rounded-full flex items-center justify-center ${
              activeMain === "ML Software Solutions"
                ? "bg-gradient-to-br from-[#2DC1C3] to-[#0268F2]"
                : "bg-gradient-to-br from-[#13224F] to-[#13224F]"
            }`}
            onClick={() => handleSetActiveMain("ML Software Solutions")}
          >
            <Image src="/experties/icon2.svg" width="44" height="44" alt="" />
          </div>
          {/* Niche Staffing */}
          <div
            className={`w-[77px] h-[77px] rounded-full flex items-center justify-center ${
              activeMain === "Niche Staffing"
                ? "bg-gradient-to-br from-[#2DC1C3] to-[#0268F2]"
                : "bg-gradient-to-br from-[#13224F] to-[#13224F]"
            }`}
            onClick={() => handleSetActiveMain("Niche Staffing")}
          >
            <Image src="/experties/icon3.svg" width="44" height="44" alt="" />
          </div>
          {/* Product Portfolio */}
          <div
            className={`w-[77px] h-[77px] rounded-full flex items-center justify-center ${
              activeMain === "Product Portfolio"
                ? "bg-gradient-to-br from-[#2DC1C3] to-[#0268F2]"
                : "bg-gradient-to-br from-[#13224F] to-[#13224F]"
            }`}
            onClick={() => handleSetActiveMain("Product Portfolio")}
          >
            <Image src="/experties/icon4.svg" width="44" height="44" alt="" />
          </div>
        </div>
        {/* Main */}
        <div className="w-full flex flex-col gap-[90px] relative overflow-scroll h-[250px]">
          {/* Consultation */}
          <div
            className="main-content"
            ref={mainRefs["Consultation"]}
            data-main="Consultation"
          >
            <div className="flex gap-[5%] w-full">
              <div className="w-[45%]">
                <h1 className="text-[42px] text-white">Consultation</h1>
                <p className="text-[#9EB3CF] text-[19px] font-light">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s.
                </p>
              </div>
              <div>
                <Image
                  src="/experties/consultation.png"
                  width="470"
                  height="244"
                  alt="consultation"
                />
              </div>
            </div>
          </div>
          {/* ML Software Solutions */}
          <div
            className="main-content"
            ref={mainRefs["ML Software Solutions"]}
            data-main="ML Software Solutions"
          >
            <div className="flex gap-[5%] w-full">
              <div className="w-[45%]">
                <h1 className="text-[42px] text-white">ML Software Solutions</h1>
                <p className="text-[#9EB3CF] text-[19px] font-light">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s.
                </p>
              </div>
              <div>
                <Image
                  src="/experties/consultation.png"
                  width="470"
                  height="244"
                  alt="consultation"
                />
              </div>
            </div>
          </div>
          {/* Niche Staffing */}
          <div
            className="main-content"
            ref={mainRefs["Niche Staffing"]}
            data-main="Niche Staffing"
          >
            <div className="flex gap-[5%] w-full">
              <div className="w-[45%]">
                <h1 className="text-[42px] text-white">Niche Staffing</h1>
                <p className="text-[#9EB3CF] text-[19px] font-light">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s.
                </p>
              </div>
              <div>
                <Image
                  src="/experties/consultation.png"
                  width="470"
                  height="244"
                  alt="consultation"
                />
              </div>
            </div>
          </div>
          {/* Product Portfolio */}
          <div
            className="main-content"
            ref={mainRefs["Product Portfolio"]}
            data-main="Product Portfolio"
          >
            <div className="flex gap-[5%] w-full">
              <div className="w-[45%]">
                <h1 className="text-[42px] text-white">Product Portfolio</h1>
                <p className="text-[#9EB3CF] text-[19px] font-light">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s.
                </p>
              </div>
              <div>
                <Image
                  src="/experties/consultation.png"
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
