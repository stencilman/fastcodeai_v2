"use client";
import Lottie from "lottie-react";
import React from "react";
import chooseUS from "../../../../public/animations/chooseUS.json";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="w-full h-[100vh] pl-[160px] pr-[127px] relative bg-[#00081F] flex flex-col justify-center ">
      <div className="absolute right-[10px]  w-[169px] h-[421px] blur-[50px] translate-y-[167px] scale-90  rounded-[50%] z-[4] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[100px]"></div>
      <h1 className="text-5xl text-white">Why Choose us?</h1>
      <div className="reltive z-10 grid grid-rows-3 grid-flow-col gap-[27px] w-full h-[506px] mt-[61px]">
        <div className="row-span-3 bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83 h-[506px] rounded-[18px] w-[413px]">
          <div className="w-full flex flex-col items-center">
            <h3 className="text-[32px] w-[290px] text-white text-center pt-[54px]">
              <span className="font-bold">Al</span> Adoption across diverse
              domains
            </h3>
            <div className="w-[413px] h-[332px] relative left-[-38px]">
              <Lottie
                style={{ width: "120%" }}
                animationData={chooseUS}
                loop={true}
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-gradient-to-br from-[#000E32] to-[#000929] h-[156px] rounded-[18px]">
          <div className="flex py-[29px] px-[35px] gap-[30px]">
            <Image
              className="relative top-[-20px]"
              src="/whychooseus/icon1.svg"
              width="40"
              height="55"
              alt="icon"
            />
            <div className="text-white">
              <h3 className="text-3xl">Handpicked Experts</h3>
              <p className="text-lg text-[#9EB3CF]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-gradient-to-br from-[#000E32] to-[#000929] h-[156px] rounded-[18px]">
          <div className="flex py-[29px] px-[35px] gap-[30px]">
            <Image
              className="relative top-[-20px]"
              src="/whychooseus/icon2.svg"
              width="40"
              height="55"
              alt="icon"
            />
            <div className="text-white">
              <h3 className="text-3xl">Our Process & Approach</h3>
              <p className="text-lg text-[#9EB3CF]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-gradient-to-br from-[#000E32] to-[#000929] h-[156px] rounded-[18px]">
          <div className="flex py-[29px] px-[35px] gap-[30px]">
            <Image
              className="relative top-[-20px]"
              src="/whychooseus/icon3.svg"
              width="40"
              height="55"
              alt="icon"
            />
            <div className="text-white">
              <h3 className="text-3xl">Strong R & D Expertise</h3>
              <p className="text-lg text-[#9EB3CF]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
