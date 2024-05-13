import Image from "next/image";
import React from "react";

const ProjectGoals = () => {
  const projectGoalList = [
    {
      details:
        " Install an interior camera system behind the rearview mirror to enhance user experience, facilitating gesture-based controls for toggling reading lights and accessing favourite features through specific hand poses, improving interaction for both driver and passenger.",
    },
    {
      details:
        " Install controls for toggling reading lights and accessing favourite features through specific hand poses, improving interaction for both driver and passenger.",
    },
    {
      details:
        "Foster OEM's in-house expertise by starting with our consultancy, gradually building a robust 200 member team to achieve self-sufficiency within 4 years, before our strategic exit.",
    },
  ];
  return (
    <div className=" relative  w-full h-auto pt-[70px] pb-[250px] bg-[#00081F] px-[20px] md:px-[50px] lg:px-[100px]">
      <h1 className="text-white text-8xl font-aeonik tracking-wide text-center">
        Project Goals
      </h1>
      <div className="relative w-full mt-[82px] flex justify-between flex-wrap gap-y-[70px]">
        {projectGoalList.map((e, i) => (
          <div
            key={i}
            className={`group flex flex-col  ${
              i % 2 !== 0 ? "mt-[100px] w-[40%]" : "mt-[0px] w-[43%]"
            } gap-[60px] relative cursor-pointer`}
          >
            <h3 className="text-white text-[94px] font-aeonik tracking-wide">
              {i < 9 ? "0" + (i + 1) : i + 1}
            </h3>
            <p className={`text-[#9EB3CF] text-lg font-bwmss01  `}>
              {e.details}
            </p>
            <Image
              className={`absolute z-[1] ${
                i % 2 !== 0 ? "left-[-80%] top-[-100px]" : "left-[100%] top-[-100px]"
              } scale-0  group-hover:scale-100 transition-all duration-500`}
              src="/potfolio/mbenz/project-goals/img1-2.png"
              height="531"
              width="379"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGoals;
