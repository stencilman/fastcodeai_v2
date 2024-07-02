"use client";
import Button from "@/app/component/Button";
import React, { useState } from "react";
import { motion } from "framer-motion";
import HiringForm from "./HiringForm";

const OpenRolesForm = () => {
  const [showAccordion, setShowAccordion] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordion = (accordionNumber) => {
    setShowAccordion(accordionNumber);
  };
  //   setShowAccordion("")
  console.log("showAccordion", showAccordion);
  return (
    <div
      id="positions"
      className="w-full h-auto px-[20px] md:px-[50px] lg:px-[100px] py-[60px] bg-[#00081F] "
    >
      <h1 className="text-white text-center text-[8vw] leading-[8.5vw] md:text-[7vw] lg:text-5xl font-aeonik tracking-wide mb-[40px] md:mb-[60px]">
        Check out our open roles
      </h1>
      <div>
        <h1 className="text-white  text-[8vw] leading-[8.5vw] md:text-[7vw] lg:text-5xl font-aeonik tracking-wide mb-[40px] md:mb-[60px]">
          Operations
        </h1>
        <div className="flex flex-col ">
          {/* Accordion 1 */}
          <div className="group border-b-2 pb-[30px] border-[#AFC0FF] cursor-pointer w-[100%] flex-col ">
            <div className=" flex  flex-col mt-[30px] px-0 md:px-[32px] ">
              <div
                onClick={() => {
                  handleAccordion(0);
                  setIsOpen(!isOpen);
                }}
                className="flex justify-between items-center select-none"
              >
                <h1
                  className={`text-[7vw] md:text-[6vw] lg:text-4xl text-white font-aeonik transition-all duration-300 ease-in-out tracking-normal ${
                    showAccordion !== 0 ? "group-hover:scale-[1.1]" : ""
                  }`}
                >
                  ML Engineer
                </h1>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className=" py-3 px-4 focus:outline-none"
                >
                  <motion.div
                    animate={{
                      rotate: showAccordion === 0 && isOpen ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="transform"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={4}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </button>
              </div>
              <motion.div
                initial={false}
                animate={showAccordion === 0 && isOpen ? "open" : "closed"}
                variants={{
                  open: { opacity: 1, height: "auto" },
                  closed: { opacity: 0, height: 0, duration: 0.6 },
                }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden"
              >
                <div className="cursor-default">
                  <div className="flex w-[100%] justify-between md:items-center flex-col md:flex-row gap-[30px] md:gap-0">
                    <p className="text-[#9EB3CF] font-bwmss01 w-[100%] md:w-[61%] text-base md:text-lg pt-[25px]">
                      FastcodeAI is seeking Machine Learning Engineers to
                      innovate in AI technologies. Responsibilities include
                      developing advanced ML algorithms with a focus on computer
                      vision, and building robust data and ML pipelines using
                      C++ and Python. Candidates should have a BTech, MTech, or
                      PhD with at least one year of experience in computer
                      vision and ML pipeline design, and be proficient in
                      software engineering with tools like TensorFlow and
                      PyTorch. We value strong problem-solving skills and
                      excellent communication. Positions are open at junior,
                      mid-level, and senior levels with competitive salaries.
                      Join us to advance your career in a pioneering technology
                      environment!
                    </p>
                    <div className="max-w-[160px] mr-[60px]">
                      <Button name="Apply Now" to="/contact" />
                    </div>
                  </div>
                  <div className=" mt-[25px]">
                    <ul className="flex pl-[0px] flex-wrap gap-[15px] ">
                      <li className="text-white font-aeonik text-xl font-medium">
                        Bengaluru, India
                      </li>
                      <li className="text-white font-aeonik text-xl font-medium">
                        Fulltime
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Accordion 2 */}
          <div className="group border-b-2 pb-[30px] border-[#AFC0FF] cursor-pointer w-[100%] flex-col ">
            <div className=" flex  flex-col mt-[30px] px-0 md:px-[32px] ">
              <div
                onClick={() => {
                  handleAccordion(1);
                  setIsOpen(!isOpen);
                }}
                className="flex justify-between items-center select-none"
              >
                <h1
                  className={`text-[7vw] md:text-[6vw] lg:text-4xl text-white font-aeonik transition-all duration-300 ease-in-out tracking-normal ${
                    showAccordion !== 1 ? "group-hover:scale-[1.1]" : ""
                  }`}
                >
                  Flutter Developer
                </h1>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className=" py-3 px-4 focus:outline-none"
                >
                  <motion.div
                    animate={{
                      rotate: showAccordion === 1 && isOpen ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="transform"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={4}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </button>
              </div>
              <motion.div
                initial={false}
                animate={showAccordion === 1 && isOpen ? "open" : "closed"}
                variants={{
                  open: { opacity: 1, height: "auto" },
                  closed: { opacity: 0, height: 0, duration: 0.6 },
                }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden"
              >
                <div className="cursor-default">
                  <div className="flex w-[100%] justify-between md:items-center flex-col md:flex-row gap-[30px] md:gap-0">
                    <p className="text-[#9EB3CF] font-bwmss01 w-[100%] md:w-[61%] text-base md:text-lg pt-[25px]">
                    We are excited to offer a full-time role for a Flutter Developer with 2+ years of proven experience in Flutter development based in our Bengaluru office. As part of our dynamic team, you will be tasked with developing and maintaining state-of-the-art mobile applications using the Flutter framework. Your role will involve designing user interfaces, implementing functionality, testing, debugging, and collaborating with cross-functional teams to enhance application performance and user experience.
                    </p>
                    <div className="max-w-[160px] mr-[60px]">
                      <Button name="Apply Now" to="/contact" />
                    </div>
                  </div>
                  <div className=" mt-[25px]">
                    <ul className="flex pl-[0px] flex-wrap gap-[15px] ">
                      <li className="text-white font-aeonik text-xl font-medium">
                        Bengaluru, India
                      </li>
                      <li className="text-white font-aeonik text-xl font-medium">
                        Fulltime
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-[100px]">
        <HiringForm/>
      </div> */}
    </div>
  );
};

export default OpenRolesForm;
