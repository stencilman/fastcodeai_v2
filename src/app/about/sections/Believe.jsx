import React from "react";

const Believe = () => {
  return (
    <div className="w-full h-[100vh]  relative bg-[#00081F] flex flex-col justify-center">
      {/* Shadow */}
      <div className="absolute top-[-160px] left-0 w-full h-[150px] blur-[50px] translate-y-[30px] scale-90  rounded-[50%] z-[1] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[50px]"></div>
      <div className="flex flex-col justify-center items-center gap-[50px]">
        <div className="">
          <h1 className="font-aeonik text-[5.5vw] text-white leading-[5.5vw] tracking-wide font-light">
            We Believe In
          </h1>
        </div>

        <div className="w-[80%] md:w-[60%] lg:w-[50%]  flex items-end">
          {/* Number */}
          <div className="h-full  w-[12%] flex flex-col gap-[15px]">
            <div
              className="w-[82px] h-[82px] border border-[#1A2758] rounded-[14px] flex items-center justify-center"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #010D33 0%, #010D34 51%, #020B2A 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <h3 className="text-[#9EB3CF] text-[50px] font-aeonik font-thin tracking-wider">
                01
              </h3>
            </div>
            <div
              className="w-[82px] h-[82px] border border-[#1A2758] rounded-[14px] flex items-center justify-center"
              //   style={{
              //     background:
              //       "transparent linear-gradient(360deg, #13224F 0%, #010D33 0%, #010D34 51%, #020B2A 100%) 0% 0% no-repeat padding-box",
              //   }}
            >
              <h3 className="text-[#9EB3CF] text-[50px] font-aeonik font-thin tracking-wider">
                02
              </h3>
            </div>
            <div
              className="w-[82px] h-[82px] border border-[#1A2758] rounded-[14px] flex items-center justify-center"
              //   style={{
              //     background:
              //       "transparent linear-gradient(360deg, #13224F 0%, #010D33 0%, #010D34 51%, #020B2A 100%) 0% 0% no-repeat padding-box",
              //   }}
            >
              <h3 className="text-[#9EB3CF] text-[50px] font-aeonik font-thin tracking-wider">
                03
              </h3>
            </div>
            <div
              className="w-[82px] h-[82px] border border-[#1A2758] rounded-[14px] flex items-center justify-center"
              //   style={{
              //     background:
              //       "transparent linear-gradient(360deg, #13224F 0%, #010D33 0%, #010D34 51%, #020B2A 100%) 0% 0% no-repeat padding-box",
              //   }}
            >
              <h3 className="text-[#9EB3CF] text-[50px] font-aeonik font-thin tracking-wider">
                04
              </h3>
            </div>
          </div>
          {/* Text Content */}
          <div className="h-full w-[80%] pl-[30px] pr-[20px] flex flex-col justify-center">
            <h1 className="font-aeonik text-[3.5vw] text-white leading-[4vw] tracking-normal font-thin">
              Inovation
            </h1>
            <p className="text-[#9EB3CF] font-bwmss01 text-[19px] leading-[23px] mt-[15px]">
              We Seek Original Approaches For Achieving Our Goals, Taking
              Advantages Of Creative Communication For Our Outreach
            </p>
          </div>
          {/* Scroll */}
          <div className="h-full  w-[10%] pl-[20px] flex flex-col justify-center">
            <div className="w-full h-[100px] border-2 border-[#9EB3CF] rounded-full flex justify-center pt-[5px] relative">
              <div className="chevronScroll"></div>
              <div className="chevronScroll"></div>
              <div className="chevronScroll"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[-70px] top-[30%] w-[169px] h-[351px] blur-[50px] translate-y-[167px] scale-90  rounded-[50%] z-[4] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[100px] opacity-[0.5]"></div>
    </div>
  );
};

export default Believe;
