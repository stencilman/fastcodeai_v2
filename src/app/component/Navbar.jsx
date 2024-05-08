"use client";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import { useGlobalContext } from "../context/GlobalContext";
import Link from "next/link";

const Navbar = () => {
  // const [isActive, setIsActive] = useState(false);
  const { isActive, setIsActive } = useGlobalContext();
  const [scrollPosition, setScrollPosition] = useState(0);

  console.log("isActive",isActive)
  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    setIsActive(false);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = scrollPosition < 450 ? 1 : 0;
  const backdropBlur = `backdrop-filter: blur(${Math.min(
    scrollPosition / 4,
    20
  )}px);`;
  const backdropOpacity = Math.min(scrollPosition / 450, 1);
  return (
    <div
      className="bg-transparent w-full fixed z-20"
      // style={{ background: 'linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)' }}
      // style={{
      //   background: `linear-gradient(to top, rgba(0, 0, 0, ${backdropOpacity}) 0%, rgba(0, 0, 0, 0) 100%)`
      // }}
    >
      <div className="mx-[100px]  pt-[50px] flex items-center justify-between ">
        <div className="relative z-[1]">
          <Link href="/"> <Image priority="true" src="/logo1.png" alt="logo" width="290" height="68" /></Link>
        </div>
        <div className="flex items-center gap-[14px]">
          <button
            className="rounded-[28px] relative z-[1] flex items-center gap-[7px] bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] text-white p-[15px] text-lg "
            style={{
              transform: `scale(${scale})`,
              transition: "transform 0.5s",
            }}
          >
            <div>Get Started</div>
            <div>
              <Image
                className="inline "
                src="/arrowRight.svg"
                alt="arrow"
                width="16"
                height="13"
              />
            </div>
          </button>

          <button
            onClick={handleClick}
            className={`w-[56px] relative z-[3] h-[56px] ${
              isActive ? "bg-[#0E1E49]" : "bg-[#F3F3F3]"
            }  rounded-full flex flex-col justify-center items-center`}
          >
            <span
              className={` block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isActive
                        ? "rotate-45 translate-y-1 bg-white"
                        : "-translate-y-0.5 bg-black"
                    }`}
            ></span>
            <span
              className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
            ></span>
            <span
              className={` block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isActive
                        ? "-rotate-45 -translate-y-1 bg-white"
                        : "translate-y-0.5 bg-black"
                    }`}
            ></span>
          </button>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
      {/* <style jsx>{`
        .backdrop-blur {
          ${backdropBlur}
          transition: backdrop-filter 0.5s;
        }
      `}</style> */}
    </div>
  );
};

export default Navbar;
