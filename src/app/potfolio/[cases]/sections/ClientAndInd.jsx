import Image from "next/image";
import React from "react";

function ClientAndInd() {
  return (
    <div className="relative w-full h-auto py-[150px] bg-[#00081F] px-[20px] md:px-[50px] lg:px-[100px]  flex flex-col gap-[150px] justify-center items-center">
      <div className="flex w-full gap-[50px]">
        <div className="w-[65%] flex flex-col gap-[80px]">
          <h1 className="text-white font-aeonik tracking-wide font-normal text-[6vw] leading-[6vw]">
            Client and Industry
          </h1>
          <p className="text-[#9EB3CF] font-bwmss01 text-lg pr-[85px]">
            A premier German OEM, recognized as a market leader that places
            quality above all, and epitomizes the pinnacle of luxury and
            innovation in the automotive sector. Known for its relentless
            pursuit of excellence, the brand has consistently introduced
            pioneering technologies and luxurious vehicles, setting the gold
            standard for safety, performance, and design.
          </p>
        </div>
        <div className="w-[36%] flex flex-wrap gap-[55px] items-center">
          <div>
            <p className="text-white text-lg font-bwmss01 font-thin">
              Industry
            </p>
            <h6 className="text-white font-bwmss01 text-2xl ">
              Automotive OEM
            </h6>
          </div>
          <div>
            <p className="text-white text-lg font-bwmss01 font-thin">
              Business Type
            </p>
            <h6 className="text-white font-bwmss01 text-2xl ">Enterprise</h6>
          </div>
          <div>
            <p className="text-white text-lg font-bwmss01 font-thin">
              Services
            </p>
            <h6 className="text-white font-bwmss01 text-2xl ">
              Research, <br />
              Development & <br />
              Deployment
            </h6>
          </div>
        </div>
      </div>

      <div className="flex w-full">
        <div className="w-[40%] flex flex-col gap-[60px] ml-[80px]">
          <div className="flex gap-[40px] items-center ">
            <div
              className="flex justify-center items-center border border-[#1A2758] rounded-full p-[10px] mb-[10px] w-[90px] h-[90px]"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <Image
                src="/potfolio/case-studies/research.svg"
                height="50"
                width="50"
                className=""
                alt="icosn"
              />
            </div>
            <div>
              <p className="text-[#FFFFFF] font-bwmss01 text-2xl">Research</p>
            </div>
          </div>
          <div className="flex gap-[40px] items-center ">
            <div
              className="flex justify-center items-center border border-[#1A2758] rounded-full p-[10px] mb-[10px] w-[90px] h-[90px]"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <Image
                src="/potfolio/case-studies/development.svg"
                height="50"
                width="50"
                className=""
                alt="icosn"
              />
            </div>
            <div>
              <p className="text-[#FFFFFF] font-bwmss01 text-2xl">
                Development
              </p>
            </div>
          </div>
          <div className="flex gap-[40px] items-center ">
            <div
              className="flex justify-center items-center border border-[#1A2758] rounded-full p-[10px] mb-[10px] w-[90px] h-[90px]"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <Image
                src="/potfolio/case-studies/deployment.svg"
                height="50"
                width="50"
                className=""
                alt="icosn"
              />
            </div>
            <div>
              <p className="text-[#FFFFFF] font-bwmss01 text-2xl">Deployment</p>
            </div>
          </div>
        </div>
        <div className="w-[60%] flex items-center">
          <div className="flex flex-col gap-[80px]">
            <h1 className="text-white font-aeonik tracking-wide font-normal text-[6vw] leading-[6vw]">
              Our Role
            </h1>
            <p className="text-[#9EB3CF] font-bwmss01 text-lg pr-[85px]">
              FastCode partnered with German Automotive OEM to redefine the way
              drivers interact with their vehicles, through an intelligent
              system that provides a deeply personalised user experience via
              body pose and gesture recognition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientAndInd;
