import React from "react";

const BusinessChallenges = ({businessChallengeList}) => {
  // const businessChallengeList = [
  //   "The system had to be designed to operate on low- power hardware to mitigate heat emission, as the Electronic Control Unit (ECU) was located in a part of the vehicle that could not dissipate additional heat efficiently.",
  //   "The system had to be designed to operate on low- power hardware to mitigate heat emission, as the Electronic Control Unit (ECU) was located in a part of the vehicle that could not dissipate additional heat efficiently.",
  //   "The system had to be designed to operate on low- power hardware to mitigate heat emission, as the Electronic Control Unit (ECU) was located in a part of the vehicle that could not dissipate additional heat efficiently.",
  // ];
  return (
    <div className="relative w-full py-[100px] h-auto bg-gradient-to-r from-[#000E32] to-[#000929] px-[20px] md:px-[50px] lg:px-[100px] z-[2]">
      
      <div className="flex flex-col lg:flex-row w-full items-center gap-[80px] lg:gap-[150px]">
        <div className="">
          <h1 className="text-white text-6xl md:text-8xl font-aeonik tracking-wide ">
            Business <br />
            Challenge
          </h1>
        </div>
        <div className="flex flex-col gap-[20px]">
          {businessChallengeList?.map((e, i) => (
            <div key={i} className="flex gap-[5px]">
              <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                {i < 9 ? "0" + (i + 1) : i + 1}.
              </p>
              <p className="text-[#9EB3CF] text-lg font-bwmss01 mt-[10px]">
                {e}
              </p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default BusinessChallenges;
