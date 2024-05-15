"use client";
import Button from "@/app/component/Button";
import React, { useState } from "react";

const OpenRolesForm = () => {
  const [showAccordion, setShowAccordion] = useState(1);
  const handleAccordion = (accordionNumber) => {
    setShowAccordion(accordionNumber);
  };
  //   setShowAccordion("")
  console.log("showAccordion", showAccordion);
  return (
    <div className="w-full h-auto px-[100px] py-[60px] bg-[#00081F] ">
      <h1 className="text-white text-center text-5xl font-aeonik tracking-wide mb-[60px]">
        Check out our open roles
      </h1>
      <div>
        <h1 className="text-white  text-5xl font-aeonik tracking-wide mb-[60px]">
          Operations
        </h1>
        <div className="flex flex-col ">
          {/* Accordion 1 */}
          <div
            onClick={() => handleAccordion(0)}
            className="group border-b-2 pb-[30px] border-[#AFC0FF] cursor-pointer w-[100%] flex-col "
          >
            <div className=" flex  flex-col mt-[30px] px-[32px] ">
              <div className="flex justify-between items-center">
                <h1
                  className={`text-4xl text-white font-aeonik transition-all duration-300 ease-in-out ${
                    showAccordion !== 0 ? "group-hover:scale-[1.1]" : ""
                  }`}
                >
                  Director of IT
                </h1>
                {/* <div
                 
                  className="text-white cursor-pointer "
                >
                  X
                </div> */}
              </div>
              {showAccordion === 0 && (
                <div className="cursor-default">
                  <div className="flex w-[100%] justify-between items-center ">
                    <p className="text-[#9EB3CF] font-bwmss01 w-[60%] text-[19px] leading-7 pt-[25px]">
                      Fast Code AI is a leading AI adoption partner that
                      collaborates with industry leaders to harness the power of
                      advanced intelligence. They specialize in developing AI
                      solutions for various domains, including computer vision,
                      trend forecasting, and targeted consumer insights. Ipsum
                      potenti at congue magna amet id egestas. Quisque imperdiet
                      feugiat ac sit est vitae cras. Amet ut ornare eu at
                    </p>
                    <div className="max-w-[200px] mr-[60px]">
                      <Button name="Apply Now" to="/career" />
                    </div>
                  </div>
                  <div className=" mt-[25px]">
                    <ul className="flex pl-[0px] gap-[40px]">
                      <li className="text-white font-aeonik text-xl font-medium">
                        Banglore,India
                      </li>
                      <li className="text-white font-aeonik text-xl font-medium">
                        Fulltime
                      </li>
                      <li className="text-white font-aeonik text-xl font-medium">
                        3 Years
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Accordion 2 */}
          <div
            onClick={() => handleAccordion(1)}
            className="group border-b-2 pb-[30px] relative border-[#AFC0FF] cursor-pointer w-[100%] flex-col "
          >
            <div className={` flex flex-col mt-[30px] px-[32px] `}>
              <div className="flex justify-between items-center">
                <h1
                  className={`text-4xl text-white font-aeonik transition-all duration-300 ease-in-out ${
                    showAccordion !== 1 ? "group-hover:scale-[1.1]" : ""
                  }`}
                >
                  Assistant Project Manager
                </h1>
                {/* <div className="text-white  ">X</div> */}
              </div>
              {showAccordion === 1 && (
                <div
                  className={`cursor-default `}
                >
                  <div className="flex w-[100%] justify-between items-center ">
                    <p className="text-[#9EB3CF] font-bwmss01 w-[60%] text-[19px] leading-7 pt-[25px]">
                      Fast Code AI is a leading AI adoption partner that
                      collaborates with industry leaders to harness the power of
                      advanced intelligence. They specialize in developing AI
                      solutions for various domains, including computer vision,
                      trend forecasting, and targeted consumer insights. Ipsum
                      potenti at congue magna amet id egestas. Quisque imperdiet
                      feugiat ac sit est vitae cras. Amet ut ornare eu at
                    </p>
                    <div className="max-w-[200px] mr-[60px]">
                      <Button name="Apply Now" to="/career" />
                    </div>
                  </div>
                  <div className=" mt-[25px]">
                    <ul className="flex pl-[0px] gap-[40px]">
                      <li className="text-white font-aeonik text-xl font-medium">
                        Banglore,India
                      </li>
                      <li className="text-white font-aeonik text-xl font-medium">
                        Fulltime
                      </li>
                      <li className="text-white font-aeonik text-xl font-medium">
                        3 Years
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenRolesForm;
