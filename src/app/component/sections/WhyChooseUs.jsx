"use client";
import Lottie from "lottie-react";
import React from "react";
import chooseUS from "../../../../public/animations/chooseUS.json";
import Image from "next/image";
import icon1 from "../../../../public/whychooseus/icon1.svg";
import icon2 from "../../../../public/whychooseus/icon2.svg";
import icon3 from "../../../../public/whychooseus/icon3.svg";

const WhyChooseUs = () => {
  return (
    <div className="w-full h-auto lg:min-h-[120vh] my-[75px] pl-[20px] pr-[20px] lg:pl-[120px] lg:pr-[100px] relative bg-[#00081F] flex flex-col justify-center ">
      <div className="absolute right-[10px]  w-[169px] h-[421px] blur-[50px] translate-y-[167px] scale-90  rounded-[50%] z-[4] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[100px]"></div>
      <h1 className="text-[8vw] md:text-[7vw] lg:text-5xl  text-white font-aeonik">
        Why Choose us?
      </h1>
      <div className="reltive z-10 grid grid-col-[1fr] lg:grid-cols-[0fr] grid-rows-4 lg:grid-rows-3 grid-flow-col gap-[27px] w-full h-[auto] mt-[61px]">
        <div className="col-span-3 lg:row-span-3 bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83 h-[auto] rounded-[18px] w-full lg:w-[413px]">
          <div className="w-full flex flex-col items-center gap-[35px] lg:gap-[125px]">
            <h3 className="text-[32px] w-[290px] text-white text-center font-aeonik pt-[60px] lg:pt-[94px]">
              <span className="font-bold ">Al</span> Adoption across diverse
              domains
            </h3>
            <div className="w-[300px] sm:w-[365px] md:w-[413px] h-[332px] relative left-[-29px] lg:left-[-38px]">
              <Lottie
                style={{ width: "117%" }}
                animationData={chooseUS}
                loop={true}
              />
            </div>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-2 bg-gradient-to-br from-[#000E32] to-[#000929] h-[auto] lg:h-[auto] rounded-[18px]">
          <div className="flex flex-col lg:flex-row py-[29px] px-[35px] gap-[30px] items-center justify-center lg:justify-normal w-full h-full">
            <div className="flex w-full lg:w-[50%] gap-[25px] lg:gap-0 items-center lg:justify-center">
              <Image
                className="w-[45px] md:w-[60px] lg:w-[70px] relative top-0 lg:top-[-20px]"
                src={icon1}
           
                width="40"
                height="55"
                alt="icon"
              />
              <h3 className="text-white tracking-normal text-[8vw] md:text-[7vw] font-aeonik lg:hidden leading-[8vw]">
                Handpicked Experts
              </h3>
            </div>
            <div className="text-white">
              <h3 className="hidden tracking-normal lg:block text-3xl font-aeonik">
                Handpicked Experts
              </h3>
              <p className="text-lg text-[#9EB3CF] font-bwmss01">
                Our team is composed of top-tier talent, meticulously selected
                from the best academic institutions in India. This ensures
                access to advanced knowledge and cutting-edge skills in
                technology, accelerating innovation for your organization.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-2 bg-gradient-to-br from-[#000E32] to-[#000929] h-[auto] lg:h-[auto] rounded-[18px]">
          <div className="flex flex-col lg:flex-row py-[29px] px-[35px] gap-[30px]  items-center justify-center lg:justify-normal w-full h-full">
            <div className="flex w-full lg:w-[50%] gap-[25px] lg:gap-0 items-center lg:justify-center">
              <Image
                className="w-[45px] md:w-[60px] lg:w-[70px] relative top-0 lg:top-[-20px]"
                src={icon2}
          
                width="40"
                height="55"
                alt="icon"
              />
              <h3 className="text-white tracking-normal text-[8vw] md:text-[7vw] font-aeonik lg:hidden leading-[8vw]">
                Our Process & Approach
              </h3>
            </div>
            <div className="text-white">
              <h3 className="hidden tracking-normal lg:block text-3xl font-aeonik">
                Our Process & Approach
              </h3>
              <p className="text-lg text-[#9EB3CF] font-bwmss01">
                We offer flexible engagement models tailored to each{" "}
                {"client's"} specific needs.W hether {"it's"} for Web, Mobile,
                IoT, or Edge devices, our approach ensures seamless execution
                from conception to deployment.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-2 bg-gradient-to-br from-[#000E32] to-[#000929] h-[auto] lg:h-[auto] rounded-[18px]">
          <div className="flex flex-col lg:flex-row py-[29px] px-[35px] gap-[30px]  items-center justify-center lg:justify-normal w-full h-full">
            <div className="flex lg:w-[50%] w-full gap-[25px] lg:gap-0 items-center lg:justify-center">
              <Image
                className="w-[45px]  md:w-[60px] lg:w-[70px] relative top-0 lg:top-[-20px]"
                src={icon3}
               
                width="40"
                height="55"
                alt="icon"
              />
              <h3 className="text-white tracking-normal text-[8vw] md:text-[7vw] font-aeonik lg:hidden leading-[8vw]">
                Strong R & D Expertise
              </h3>
            </div>
            <div className="text-white">
              <h3 className="hidden tracking-normal lg:block text-3xl font-aeonik">
                Strong R & D Expertise
              </h3>
              <p className="text-lg text-[#9EB3CF] font-bwmss01">
                Over ten years of pioneering AI innovations and multiple patents
                highlight our deep research and development capabilities. This
                expertise fuels our capacity to tackle complex challenges and
                deliver superior results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
