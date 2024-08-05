"use client";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Modal from "../Modal";
import footerLogo from "../../../../public/f_logo1.png";
import MagneticEffect from "../MagneticEffect";

const Footer = ({ showExtraSpace }) => {
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
      {showExtraSpace && (
        <div className="w-full relative h-[10vh] md:h-[20vh] bg-[#00081F]"></div>
      )}
      <div className="w-full relative h-[90vh] lg:h-[100vh]  ">
        <div
          className="relative z-[5] w-full h-[70vh] border-t border-[#1A2758]"
          style={{
            background:
              "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
          }}
        >
          <div className="flex h-full w-full pl-[20px] pr-[20px] md:pl-[50px] md:pr-[50px] lg:pl-[160px] lg:pr-[73px] justify-between">
            <div className="hidden md:flex w-[369px] h-[407px] rounded-[18px] bg-gradient-to-br from-[#000E32] to-[#000929]  items-center justify-center relative z-[6] top-[-120px]">
              <Image
                placeholder="blur"
                src={footerLogo}
                height="140"
                width="249"
                alt="logo"
              />
            </div>
            <div className="w-[100%] md:w-[58%] ml-0 md:ml-[80px] lg:ml-[120px] mr-0 md:mr-[10px] flex flex-col justify-around">
              {/* Nav */}
              <div className="w-full border-b border-[#AFC0FF] pb-[22px] mt-[52px]">
                <ul className="flex flex-wrap lg:flex-nowrap gap-[10px] lg:gap-0 justify-start md:justify-around w-full text-white font-aeonik text-[19px] pl-0">
                    <MagneticEffect>
                  <Link href="/" className="flink">
                      <li className="hover-underline-animation active:scale-90 transition-all duration-300 ease-in-out">
                        Home
                      </li>
                  </Link>
                    </MagneticEffect>
                    <MagneticEffect>
                  <Link href="/about" className="flink">
                      <li className="hover-underline-animation active:scale-90 transition-all duration-300 ease-in-out">
                        About
                      </li>
                  </Link>
                    </MagneticEffect>
                    <MagneticEffect>
                  <Link href="/expertise" className="flink">
                      <li className="hover-underline-animation active:scale-90 transition-all duration-300 ease-in-out">
                        Expertise
                      </li>
                  </Link>
                    </MagneticEffect>
                    <MagneticEffect>
                  <Link href="/career" className="flink">
                      <li className="hover-underline-animation active:scale-90 transition-all duration-300 ease-in-out">
                        Career
                      </li>
                  </Link>
                    </MagneticEffect>
                    <MagneticEffect>
                  <Link href="/blogs" className="flink">
                      <li className="hover-underline-animation active:scale-90 transition-all duration-300 ease-in-out">
                        Blog
                      </li>
                  </Link>
                    </MagneticEffect>
                    <MagneticEffect>
                  <Link href="/contact" className="flink">
                      <li className="hover-underline-animation active:scale-90 transition-all duration-300 ease-in-out">
                        Contact Us
                      </li>
                  </Link>
                    </MagneticEffect>
                </ul>
              </div>
              {/* Address */}
              <div className="w-full flex flex-col lg:flex-row">
                <div className="w-full lg:w-[50%]">
                  <ul className="pl-0">
                    <li className="text-[14px]  text-white font-bwss01 font-bold">
                      Head Office
                    </li>
                    <li className="text-sm text-[#9EB3CF] font-bwmss01 mt-[10px] md:mt-[19px]">
                      #48, Bhive Premium Church st,
                      <br /> Haridevpur, Shanthala Nagar,
                      <br /> Ashok Nagar, Bengaluru - 560001
                      <br />
                      Karnataka, India
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-[50%]">
                  <ul className="pl-0">
                    <li className="text-[14px]  text-white font-bwss01 font-bold">
                      Email
                    </li>
                    <li className="text-[#9EB3CF] font-bwmss01 text-2xl  pl-[4px]">
                      arjun@fastcode.ai
                    </li>
                    <li className="text-[14px]  text-white font-bwss01 font-bold mt-[8px]">
                      Phone
                    </li>
                    <li className="text-[#9EB3CF] font-bwmss01 text-2xl  pl-[4px]">
                      +91 85530 38132
                    </li>
                  </ul>
                </div>
              </div>
              {/* Copy R */}
              <div className="w-full flex-wrap md:flex-nowrap gap-[10px] md:gap-[0] border-t border-[#AFC0FF] pt-[22px] flex justify-between">
                <div>
                  <p className="text-[#9EB3CF] font-bwmss01 text-[12px]">
                    © Copyright Fast Code AI 2024. All Rights Reserved
                  </p>
                </div>
                <div className="flex gap-[27px]">
                  <Link href="/legal-notice">
                    <p className="text-[#9EB3CF] hover:text-white transition-all duration-300 font-bwmss01 text-[12px]">
                      Legal Notice
                    </p>
                  </Link>
                  <Link href="/privacy-policy">
                    <p className="text-[#9EB3CF] hover:text-white transition-all duration-300 font-bwmss01 text-[12px]">
                      Privacy Policy
                    </p>
                  </Link>
                  <Link href="/terms-conditions">
                    <p className="text-[#9EB3CF] hover:text-white transition-all duration-300 font-bwmss01 text-[12px] cursor-pointer">
                      Terms & Conditions
                    </p>
                  </Link>
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
          className="sticky bottom-0 left-0 z-[3] bg-[#00081F] h-[20vh] md:h-[23vh] lg:h-[30vh] w-full flex cursor-pointer"
        >
          <div className="flex items-center w-full relative overflow-hidden whitespace-nowrap ">
            <motion.h1
              initial={{ x: "0" }}
              animate={{ x: "-100%" }}
              transition={{ repeat: Infinity, ease: "linear", duration: 12 }}
              className="text-[9.5vw] leading-none font-medium  tracking-tight text-[#37446A]  w-full  "
            >
              {"Get Free Consult Now!"}
            </motion.h1>
            <motion.h1
              initial={{ x: "0" }}
              animate={{ x: "-100%" }}
              transition={{ repeat: Infinity, ease: "linear", duration: 12 }}
              className="text-[9.5vw] leading-none font-medium tracking-tight text-[#37446A]  w-full pl-[30px]"
            >
              {"Get Free Consult Now!"}
            </motion.h1>
          </div>
          {/* custom box-cursor */}
          <motion.div
            ref={cursor}
            variants={scaleAnimation}
            initial={"initial"}
            animate={active ? "open" : "close"}
            className="absolute pointer-events-none z-[999] w-[76px] h-[76px] md:w-[103px] md:h-[103px] cursor-pointer top-0 left-0"
          >
            <MagneticEffect>
              <div
                className={`w-[103px] h-[103px] bg-gradient-to-br absolute pointer-events-none cursor-pointer ${"from-[#1D8283] to-[#033577]"} bg-gradient-156deg bg-no-repeat bg-[0% 0%]  text-white font-aeonik flex justify-center items-center gap-[20px] flex-col`}
              >
                <div className=" text-[18px]">Say Hi!</div>
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
            </MagneticEffect>
          </motion.div>
        </Link>
      </div>
    </>
  );
};

export default Footer;
