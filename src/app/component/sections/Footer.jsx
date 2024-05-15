"use client";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Modal from "../Modal";

const Footer = () => {
  const [active, setActive] = useState(false);
  const scaleAnimation = {
    initial: { scale: 0, x: "0%", y: "0%" },
    open: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    close: {
      scale: 0,
      x: "0%",
      y: "0%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };
  const cursor = useRef(null);
  const container = useRef(null);
  useEffect(() => {
    const mqrque = document.getElementById("marqEffCont");

    mqrque.addEventListener("mousemove", (e) => {
      const { left, top, width, height } = mqrque.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      cursor.current.style.left = `${x}px `;
      cursor.current.style.top = `${y}px`;
    });
  }, []);
  return (
    <>
      <div className="w-full relative h-[20vh] bg-[#00081F]"></div>
      <div className="w-full relative  h-[100vh]  ">
        <div
          className="relative z-[5] w-full h-[70vh] border-t border-[#1A2758]"
          style={{
            background:
              "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
          }}
        >
          <div className="flex h-full w-full pl-[160px] pr-[73px] justify-between">
            <div className="w-[369px] h-[407px] rounded-[18px] bg-gradient-to-br from-[#000E32] to-[#000929] flex items-center justify-center relative z-[6] top-[-120px]">
              <Image
                src="/footerlogo/logo1.png"
                height="140"
                width="249"
                alt="logo"
              />
            </div>
            <div className="w-[58%] ml-[120px] mr-[10px] flex flex-col justify-around">
              {/* Nav */}
              <div className="w-full border-b border-[#AFC0FF] pb-[22px] mt-[52px]">
                <ul className="flex justify-around w-full text-white font-aeonik text-[19px]">
                  <Link href="/">
                    <li>Home</li>
                  </Link>
                  <Link href="/about">
                    <li>About</li>
                  </Link>
                  <Link href="/experties">
                    <li>Experties</li>
                  </Link>
                  <Link href="/career">
                    <li>Career</li>
                  </Link>
                  <Link href="/blog">
                    <li>Blog</li>
                  </Link>
                  <Link href="/contact-us">
                    <li>Conatct Us</li>
                  </Link>
                </ul>
              </div>
              {/* Address */}
              <div className="w-full flex ">
                <div className="w-[50%]">
                  <ul>
                    <li className="text-[14px] font-bold text-white font-aeonik">
                      Head Office
                    </li>
                    <li className="text-sm text-[#9EB3CF] font-bwmss01 mt-[19px]">
                      #78, Ex-Servicemen Layout
                      <br /> 1st Main Road, 6th Cross, RK Hegde Nagar Bengaluru,
                      Karnataka 56007
                    </li>
                  </ul>
                </div>
                <div className="w-[50%]">
                  <ul>
                    <li className="text-[14px] font-bold text-white font-aeonik">
                      Email
                    </li>
                    <li className="text-[#9EB3CF] font-bwmss01 text-2xl  pl-[4px]">
                      arjun@fastcode.ai
                    </li>
                    <li className="text-[14px] font-bold text-white font-aeonik mt-[8px]">
                      Phone
                    </li>
                    <li className="text-[#9EB3CF] font-bwmss01 text-2xl  pl-[4px]">
                      +91 85530 38132
                    </li>
                  </ul>
                </div>
              </div>
              {/* Copy R */}
              <div className="w-full border-t border-[#AFC0FF] pt-[22px] flex justify-between">
                <div>
                  <p className="text-[#9EB3CF] font-bwmss01 text-[12px]">
                    © Copyright Fast Code AI 2024. All Rights Reserved
                  </p>
                </div>
                <div className="flex gap-[27px]">
                  <p className="text-[#9EB3CF] font-bwmss01 text-[12px]">
                    Legal Notice
                  </p>
                  <p className="text-[#9EB3CF] font-bwmss01 text-[12px]">
                    Privacy Policy
                  </p>
                  <p className="text-[#9EB3CF] font-bwmss01 text-[12px]">
                    Terms & Conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marque Effect */}

        <Link
          href="/contact"
          id="marqEffCont"
          ref={container}
          // animate={active ? "open" : "close"}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          className="sticky bottom-0 left-0 z-[3] bg-[#00081F] h-[30vh] w-full flex cursor-pointer"
        >
          <div className="flex  items-center w-full relative overflow-hidden whitespace-nowrap">
            <motion.h1
              initial={{ x: "0" }}
              animate={{ x: "-100%" }}
              transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
              className="text-[10vw] leading-none font-medium tracking-tight text-[#37446A]  w-full pr-[25px]"
            >
              {"Let's Discuss Today!"}
            </motion.h1>
            <motion.h1
              initial={{ x: "0" }}
              animate={{ x: "-100%" }}
              transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
              className="text-[10vw] leading-none font-medium tracking-tight text-[#37446A]  w-full pr-[25px]"
            >
              {"Let's Discuss Today!"}
            </motion.h1>
          </div>
          {/* custom box-cursor */}
          <motion.div
            ref={cursor}
            variants={scaleAnimation}
            initial={"initial"}
            animate={active ? "open" : "close"}
            className="absolute pointer-events-none z-[999] w-[103px] h-[103px] cursor-pointer top-0 left-0"
          >
            <div
              className={`w-[103px] h-[103px] bg-gradient-to-br absolute pointer-events-none cursor-pointer ${"from-[#1D8283] to-[#033577]"} bg-gradient-156deg bg-no-repeat bg-[0% 0%]  text-white font-aeonik flex justify-center items-center gap-[20px] flex-col`}
            >
              <div className="font-bold text-[18px]">Say Hi!</div>
              <div className="pr-[24px]">
                <Image
                  className="transform scale-x-[-1.5] "
                  src="/arrowRight.svg"
                  width="25"
                  height="25"
                  alt=""
                  style={{
                    transform: "matrix(0.71, -0.71, 0.71, 0.71, 0, 0)",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
    </>
  );
};

export default Footer;
