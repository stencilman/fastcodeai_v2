import Button from "@/app/component/Button";
import React from "react";

const JoinTeam = () => {
  return (
    <div
      className="w-full h-[80vh] px-[100px] flex justify-center items-center"
      style={{
        background:
          "transparent linear-gradient(111deg, #000E32 0%, #000929 100%) 0% 0% no-repeat padding-box",
      }}
    >
      <div className="flex w-full items-center">
        <div className="w-[40%] flex flex-col gap-[30px]">
          <h1 className="text-white text-5xl font-aeonik tracking-wide ">
            Our Culture
          </h1>
          <p className="text-[#9EB3CF] text-lg font-bwmss01">
            Take your career where you want to go!
          </p>
          <div className="max-w-[200px]">
            <Button to="/" name="Explore positions" />
          </div>
        </div>
        <div className="w-[60%]">
          <div className="w-full flex flex-wrap justify-center gap-[30px]">
            <div
              className="px-[20px] min-w-[270px] py-[28px] border border-[#1A2758] rounded-[18px] flex justify-center items-center max-w-[278px] gap-[14px]"
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
                <b className="text-white font-aeonik text-5xl">5+</b>
              </div>
              <p className="text-center text-white text-2xl font-bwmss01 font-bold">
                Experience
              </p>
            </div>
            <div
              className="px-[20px] min-w-[270px] py-[28px] border border-[#1A2758] rounded-[18px] flex justify-center items-center max-w-[278px] gap-[14px]"
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
                <b className="text-white font-aeonik text-5xl">16+</b>
              </div>
              <p className="text-center text-white text-2xl font-bwmss01 font-bold">
                Projects
              </p>
            </div>
            <div
              className="px-[20px] min-w-[270px] py-[28px] border border-[#1A2758] rounded-[18px] flex justify-center items-center max-w-[278px] gap-[14px]"
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
                <b className="text-white font-aeonik text-5xl">7+</b>
              </div>
              <p className="text-center text-white text-2xl font-bwmss01 font-bold">
                Patents
              </p>
            </div>
            <div
              className="px-[20px] min-w-[270px] py-[28px] border border-[#1A2758] rounded-[18px] flex justify-center items-center max-w-[278px] gap-[14px]"
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
                <b className="text-white font-aeonik text-5xl">12+</b>
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
