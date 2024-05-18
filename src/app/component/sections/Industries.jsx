import Image from "next/image";
import React from "react";

const Industries = () => {
  return (
    <div className="w-full h-auto lg:h-[100vh] pt-[100px] lg:pt-0 pl-[20px] pr-[20px] md:pl-[50px] md:pr-[20px] lg:pl-[160px] lg:pr-[127px] bg-[#00081F] flex flex-col justify-center relative ">
      <div className="flex flex-col items-center">
        <h3 className="text-[8vw] md:text-[7vw] lg:text-5xl tracking-normal  text-center leading-[7.6vw] w-[90vw] lg:w-[50vw] font-bwmss01 text-white">
          Industries That Our AI Development Services Excel In
        </h3>
        <p className="text-[#9EB3CF] text-lg mt-[20px] text-center w-[85vw] lg:w-[70vw] font-bwmss01">
          OurAI developers specialize in integrating the best-in-class
          artificial intelligence services into your business offerings,
          processes, and growth strategies, regardless of your industry.
        </p>
      </div>
      <div className="flex flex-wrap pt-[64px] lg:pt-[120px] gap-[24px] lg:gap-[60px] justify-center">
        <div
          className=" w-[172px] h-[182px] rounded-[18px] flex flex-col items-center justify-center gap-[42px] "
          style={{
            background:
              "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
          }}
        >
          <Image src="/industries/icon1.svg" alt="" width="38" height="19" />
          <p className="text-white text-[19px] font-aeonik ">Automibile</p>
        </div>
        <div
          className="shadow-lg border border-[#1A2758] w-[172px] h-[182px] rounded-[18px] flex flex-col items-center justify-center gap-[42px] "
          style={{
            background:
              "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
          }}
        >
          <Image src="/industries/icon2.svg" alt="" width="38" height="19" />
          <p className="text-white text-[19px] font-aeonik">Finance</p>
        </div>
        <div
          className="shadow-lg border border-[#1A2758]  w-[172px] h-[182px] rounded-[18px] flex flex-col items-center justify-center gap-[42px] "
          style={{
            background:
              "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
          }}
        >
          <Image src="/industries/icon5.svg" alt="" width="38" height="19" />
          <p className="text-white text-[19px] font-aeonik">eCommerce</p>
        </div>
        <div
          className="shadow-lg border border-[#1A2758]  w-[172px] h-[182px] rounded-[18px] flex flex-col items-center justify-center gap-[42px] "
          style={{
            background:
              "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
          }}
        >
          <Image src="/industries/icon4.svg" alt="" width="38" height="19" />
          <p className="text-white text-[19px] font-aeonik">Travel</p>
        </div>
        <div
          className="shadow-lg border border-[#1A2758]  w-[172px] h-[182px] rounded-[18px] flex flex-col items-center justify-center gap-[42px] "
          style={{
            background:
              "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
          }}
        >
          <Image src="/industries/icon3.svg" alt="" width="38" height="19" />
          <p className="text-white text-[19px] font-aeonik">Games</p>
        </div>
      </div>
    </div>
  );
};

export default Industries;
