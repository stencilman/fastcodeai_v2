import Image from "next/image";
import React from "react";

const Soltions = ({solutionsData}) => {
  
  return (
    <div className="w-full h-auto bg-[#00081F] py-[100px]  px-[20px] md:px-[50px] lg:px-[100px]  relative">
      <div className="absolute top-[-160px] left-0 w-full h-[150px] blur-[50px] translate-y-[30px] scale-90  rounded-[50%] z-[1] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[50px]"></div>

      <div className="flex flex-col gap-[40px] px-[10px] md:px-[40px]">
        <h1 className="text-white text-6xl md:text-8xl font-aeonik tracking-wide mb-[8px]">
          Solution
        </h1>
        {solutionsData.map((e, i) => (
          <p key={i} className="text-[#9EB3CF] text-lg font-bwmss01 ">
            {e}
          </p>
        ))}
      </div>
      <div className="mt-[40px] pl-[40px] h-auto md:h-[559px] w-full">
        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-5 md:grid-rows-3 gap-7 h-auto md:h-[559px] w-full ">
          <div className="h-[200px] md:h-auto md:col-span-2 md:row-span-2">
            <Image
              className=" w-full h-full"
              src="/potfolio/mbenz/solution/img1-2.png"
              width="376"
              height="347"
              alt=""
            />
          </div>
          <div className="h-[200px] md:h-auto md:col-start-1 md:row-start-3">
            <Image
              className="w-full h-full"
              src="/potfolio/mbenz/solution/img2-2.png"
              width="166"
              height="174"
              alt=""
            />
          </div>
          <div className="h-[200px] md:h-auto md:col-start-2 md:row-start-3">
            <Image
              className="w-full h-full"
              src="/potfolio/mbenz/solution/img3-2.png"
              width="188"
              height="174"
              alt=""
            />
          </div>
          <div className="h-[200px] md:h-auto md:col-span-3 md:row-span-3 md:col-start-3 md:row-start-1">
            <Image
              className="w-full h-full"
              src="/potfolio/mbenz/solution/img4-2.png"
              width="559"
              height="697"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soltions;
