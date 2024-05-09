import Image from "next/image";
import React from "react";

const Industries = () => {
  return (
    <div className="w-full h-[100vh] pl-[160px] pr-[127px] bg-[#00081F] flex flex-col justify-center   relative ">
      <div className="flex flex-col items-center">
        <h3 className="text-[42px] text-center leading-[45px] w-[50vw] font-bwmss01 text-white">
          Industries That Our AI Development Services Excel In
        </h3>
        <p className="text-[#9EB3CF] text-[19px] mt-[20px] text-center w-[70vw] font-bwmss01">
          OurAI developers specialize in integrating the best-in-class
          artificial intelligence services into your business offerings,
          processes, and growth strategies, regardless of your industry.
        </p>
      </div>
      <div className="flex pt-[120px] gap-[60px] justify-center">
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
