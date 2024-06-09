import Image from "next/image";
import Link from "next/link";
import React from "react";

const JoinTeam = () => {
  return (
    <div
      className="w-full h-auto lg:h-[80vh] py-[70px] px-[20px] md:px-[50px] lg:px-[100px] flex justify-center items-center"
      style={{
        background:
          "transparent linear-gradient(111deg, #000E32 0%, #000929 100%) 0% 0% no-repeat padding-box",
      }}
    >
      <div className="flex w-full items-center flex-col gap-[40px] lg:gap-0 lg:flex-row">
        <div className="w-full lg:w-[40%] flex flex-col gap-[10px] md:gap-[30px] ">
          <h1 className="text-white text-[8vw] md:text-[7vw] lg:text-5xl font-aeonik tracking-wide ">
            Join Our Team
          </h1>
          <p className="text-[#9EB3CF] text-sm md:text-lg font-bwmss01">
            Take your career where you want to go!
          </p>

          <div className="max-w-[200px]">
            <Link
              href="/career"
              className="rounded-[28px] relative z-[1] flex items-center gap-[7px] bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] text-white p-[15px] text-lg justify-between cursor-pointer"
            >
              <div>Explore Positions</div>
              <div>
                <Image
                  className="inline "
                  src="/arrowRight.svg"
                  alt="arrow"
                  width="16"
                  height="13"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[77%] xl:[60%]">
          <div className="w-full flex flex-wrap justify-center gap-[20px] md:gap-[30px]">
            <div
              className="px-[20px] min-w-full sm:min-w-[302px] py-[20px]  md:py-[28px] border border-[#1A2758] rounded-[18px] flex justify-center items-center max-w-[278px] gap-[14px]"
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
                <b className="text-white font-aeonik text-[2rem] md:text-5xl">
                  15+
                </b>
              </div>
              <p className="text-center text-white text-2xl font-bwmss01 font-bold">
                Experience
              </p>
            </div>
            <div
              className="px-[20px] min-w-full sm:min-w-[302px] py-[20px]  md:py-[28px] border border-[#1A2758] rounded-[18px] flex justify-center items-center max-w-[278px] gap-[14px]"
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
                <b className="text-white font-aeonik text-[2rem] md:text-5xl">
                  30+
                </b>
              </div>
              <p className="text-center text-white text-2xl font-bwmss01 font-bold">
                Projects
              </p>
            </div>
            <div
              className="px-[20px] min-w-full sm:min-w-[302px] py-[20px]  md:py-[28px] border border-[#1A2758] rounded-[18px] flex justify-center items-center max-w-[278px] gap-[14px]"
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
                <b className="text-white font-aeonik text-[2rem] md:text-5xl">
                  7000+
                </b>
              </div>
              <p className="text-center text-white text-2xl font-bwmss01 font-bold">
                Citations
              </p>
            </div>
            <div
              className="px-[20px] min-w-full sm:min-w-[302px] py-[20px]  md:py-[28px] border border-[#1A2758] rounded-[18px] flex justify-center items-center max-w-[278px] gap-[14px]"
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
                <b className="text-white font-aeonik text-[2rem] md:text-5xl">
                  20+
                </b>
              </div>
              <p className="text-center text-white text-2xl font-bwmss01 font-bold">
                Clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTeam;
