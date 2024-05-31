"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const HowWeDo = ({ pb }) => {
  const [showAccordion, setShowAccordion] = useState(0);
  const accordionRefs = useRef([]);

  const handleAccordion = (accordionNumber) => {
    setShowAccordion(accordionNumber);
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.1, duration: 1 } },
  };

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      // Only for mobile screens
      accordionRefs.current.forEach((ref, index) => {
        ScrollTrigger.create({
          trigger: ref,
          start: "top 50%",
          end: "top 50%",
          onEnter: () => setShowAccordion(index),
          onLeaveBack: () => setShowAccordion(index),
        });
      });
    }
  }, []);

  return (
    <div
      className={`w-full ${pb} h-auto lg:h-[auto] pl-[20px] md:pl-[50px] xl:pl-[100px] pr-[20px] md:pr-[50px] relative bg-[#00081F] flex flex-col justify-center mt-[100px] overflow-hidden`}
    >
      <div>
        <h1 className="text-5xl text-white font-aeonik tracking-normal">
          How We Do It
        </h1>
      </div>
      <div className="max-w-[100%] flex-col lg:flex-row sm:mt-[55px] flex">
        {[
          {
            number: "01",
            title: "Connect With Us",
            description:
              "Fill out our NDA-protected contact form, book a time on our calendar, and arrange an e-meeting with our expert team.",
            image: "/accordion/accb-1.png",
          },
          {
            number: "02",
            title: "Project Feasibility Consultation",
            description:
              "Discuss your project ideas in a consultation call with our team, to assess their feasibility and potential impact.",
            image: "/accordion/accb-1.png",
          },
          {
            number: "03",
            title: "Get a Detailed Cost Estimate",
            description:
              "We'll provide a comprehensive project proposal, including budget and timeline estimates, tailored to your specific requirements.",
            image: "/accordion/accb-1.png",
          },
          {
            number: "04",
            title: "Project Kickoff",
            description:
              "After finalizing the agreement, we initiate your project, committed to delivering excellence.",
            image: "/accordion/accb-1.png",
          },
        ].map((accordion, index) => (
          <div
            key={index}
            ref={(el) => (accordionRefs.current[index] = el)}
            onClick={() => handleAccordion(index)}
            className={`group ${
              showAccordion === index
                ? "h-[400px] sm:h-[520px] lg:h-[519px] "
                : "h-[200px] lg:h-[519px]"
            } lg:border-r-2 border-[#AFC0FF]  w-[100%] lg:w-[579px] flex cursor-pointer `}
          >
            {showAccordion === index && (
              <div className="w-[177px] h-[519px] hidden sm:block">
                <Image
                  className="w-full h-full"
                  src={accordion.image}
                  height="519"
                  width="177"
                  alt=""
                />
              </div>
            )}
            <div className=" flex flex-col mt-[60px] px-[32px] ">
              <h1
                className={`text-7xl text-white font-aeonik transition-all duration-300 ease-in-out ${
                  showAccordion !== index ? "lg:group-hover:scale-[1.1]" : ""
                }`}
              >
                {accordion.number}
              </h1>
              {showAccordion === index && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={descriptionVariants}
                  className="flex flex-col w-full sm:w-[333px]  "
                >
                  <h3
                    initial="hidden"
                    animate={showAccordion === index ? "visible" : "hidden"}
                    variants={titleVariants}
                    className="text-4xl w-full text-white font-aeonik pt-[20px]"
                  >
                    {accordion.title}
                  </h3>
                  <p
                    initial="hidden"
                    animate={showAccordion === index ? "visible" : "hidden"}
                    variants={descriptionVariants}
                    className="text-[#9EB3CF] font-bwmss01 text-[19px] leading-7 pt-[23px]"
                  >
                    {accordion.description}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeDo;
