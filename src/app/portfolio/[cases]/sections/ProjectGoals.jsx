import Image from "next/image";
import React from "react";

const ProjectGoals = ({projectGoalList}) => {
 
  return (
    <div className=" relative  w-full h-auto pt-[70px] pb-[250px] bg-[#00081F] px-[20px] md:px-[50px] lg:px-[100px]">
      <h1 className="text-white text-6xl md:text-8xl font-aeonik tracking-wide text-center">
        Project Goals
      </h1>
      <div className="relative w-full mt-[82px] flex justify-between flex-col md:flex-row flex-wrap gap-[90px] md:gap-y-[70px]">
        {projectGoalList.map((e, i) => (
          <div
            key={i}
            className={`group flex flex-col  ${
              i % 2 !== 0 ? "w-full md:mt-[100px] md:w-[40%]" : "w-full md:mt-[0px] md:w-[43%]"
            } gap-[60px] relative cursor-pointer`}
          >
            <h3 className="text-white text-6xl md:text-8xl font-aeonik tracking-wide">
              {i < 9 ? "0" + (i + 1) : i + 1}
            </h3>
            <p className={`text-[#9EB3CF] text-lg font-bwmss01  `}>
              {e?.details}
            </p>
            {/* <Image
              className={`absolute z-[1] ${
                i % 2 !== 0 ? "left-[-80%] top-[-100px]" : "left-[100%] top-[-100px]"
              } scale-0  group-hover:scale-100 transition-all duration-500`}
              src="/potfolio/mbenz/project-goals/img1-2.png"
              height="531"
              width="379"
              alt=""
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGoals;
