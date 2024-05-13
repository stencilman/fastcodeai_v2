import Image from "next/image";
import React from "react";

const OurImpact = () => {
  return (
    <div className="w-full h-auto pt-[100px] pb-[170px] bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83 pl-[20px] md:pl-[50px] lg:pl-[100px] pr-[0px] relative z-[2]">
      <div className="pb-[70px] px-[40px]">
        <h1 className="text-white text-8xl font-aeonik tracking-wide mb-[8px]">
          Our Impact
        </h1>
      </div>
      <div className="flex w-full">
        <div className="flex  w-[100%] relative">
          <div className="flex flex-col gap-[50px]">
            <div className="flex gap-[5px]">
              <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                {/* {i < 9 ? "0" + (i + 1) : i + 1}. */}
                01.
              </p>
              <p className="text-[#9EB3CF] text-lg font-bwmss01 mt-[10px]">
                {/* {e}. */}
                The OEM was honored with 4 prestigious Automotive INNOVATIONS
                awards, notably one for “Most Innovative Premium Brand -
                Interface & Connectivity”. These awards, presented by
                PricewaterhouseCoopers (PwC) in collaboration with Prof. Dr.
                Stefan Bratzel and the Center of Automotive Management (CAM),
                showcase the {"brand’s"} unwavering dedication to pushing
                boundaries in the automotive industry
              </p>
            </div>
            <div className="flex gap-[5px]">
              <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                {/* {i < 9 ? "0" + (i + 1) : i + 1}. */}
                02.
              </p>
              <p className="text-[#9EB3CF] text-lg font-bwmss01 mt-[10px]">
                {/* {e}. */}
                As a result of our collaboration, the OEM developed one of the
                best ML teams in India.
              </p>
            </div>
            <div className="flex gap-[5px]">
              <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                {/* {i < 9 ? "0" + (i + 1) : i + 1}. */}
                03.
              </p>
              <p className="text-[#9EB3CF] text-lg font-bwmss01 mt-[10px]">
                {/* {e}. */}
                The OEM integrated advanced Deep Learning models directly into
                their vehicles for the first time, setting a precedent in the
                industry.
              </p>
            </div>
            <div className="flex gap-[5px]">
              <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                {/* {i < 9 ? "0" + (i + 1) : i + 1}. */}
                04.
              </p>
              <p className="text-[#9EB3CF] text-lg font-bwmss01 mt-[10px]">
                {/* {e}. */}
                This leap forward inspired numerous competitors to follow suit,
                creating a new industry standard. The game changer was
                innovating away from the traditional left-right button for
                rearview mirror adjustments, in favor of adjusting based on the{" "}
                {"driver's"} head pose, showcasing the {"brand's"} commitment to
                intuitive design and functionality.
              </p>
            </div>
          </div>
          {/* img */}
          <div className="relative right-[0px] ">
            <Image
              className="opacity-60 mix-blend-screen"
              src="/potfolio/impact/img1-2.png"
              width="752"
              height="563"
              alt=""
            />
            <div className="flex gap-[30px] justify-end pr-[20px]">
              <div
                className="px-[20px] py-[28px] border border-[#1A2758] rounded-[18px] flex justify-center items-center max-w-[278px] gap-[14px]"
                style={{
                  background:
                    "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
                }}
              >
                <div
                  className="rounded-[14px] border-[#1A2758] p-[6px]"
                  style={{
                    background:
                      "transparent linear-gradient(360deg, #13224F 0%, #010D33 0%, #010D34 51%, #020B2A 100%) 0% 0% no-repeat padding-box",
                  }}
                >
                  <b className="text-white font-aeonik text-5xl">100%</b>
                </div>
                <p className="text-center text-white text-2xl font-bwmss01">
                  Success Rate
                </p>
              </div>
              <div
                className="px-[20px] py-[28px] border border-[#1A2758] rounded-[18px] flex justify-center items-center max-w-[278px] gap-[14px]"
                style={{
                  background:
                    "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
                }}
              >
                <div
                  className="rounded-[14px] border-[#1A2758] p-[6px]"
                  style={{
                    background:
                      "transparent linear-gradient(360deg, #13224F 0%, #010D33 0%, #010D34 51%, #020B2A 100%) 0% 0% no-repeat padding-box",
                  }}
                >
                  <b className="text-white font-aeonik text-5xl">10+</b>
                </div>
                <p className="text-center text-white text-2xl font-bwmss01">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
