import Image from "next/image";
import React from "react";

const Soltions = () => {
  return (
    <div className="w-full h-auto bg-[#00081F] py-[100px]  px-[20px] md:px-[50px] lg:px-[100px]  relative">
      <div className="absolute top-[-160px] left-0 w-full h-[150px] blur-[50px] translate-y-[30px] scale-90  rounded-[50%] z-[1] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[50px]"></div>

      <div className="flex flex-col gap-[40px] px-[40px]">
        <h1 className="text-white text-8xl font-aeonik tracking-wide mb-[8px]">
          Solution
        </h1>
        <p className="text-[#9EB3CF] text-lg font-bwmss01 ">
          Leveraging our expertise in Computer Vision, FastCode developed a
          cutting-edge solution for multimodal human pose estimation using
          heatmaps. Our efforts were focused on embedding this technology into
          vehicles, effectively bringing on-board intelligence to life.
          Achieving this required a dramatic reduction in the {"model's"}{" "}
          size—compressing it by over 25,000 times—without compromising
          accuracy.
        </p>
        <p className="text-[#9EB3CF] text-lg font-bwmss01 ">
          The implementation of this technology has revolutionized how drivers
          and passengers interact with the vehicle. It introduced a more
          intuitive way of interacting with the {"car's"} systems, such as using
          gestures to control menus, close doors, and adjust the rearview
          mirrors by simply looking in the desired direction.
        </p>
      </div>
      <div className="mt-[40px] pl-[40px] h-[559px] w-full">
        <div className="grid grid-cols-5 grid-rows-3 gap-7 h-[559px] w-full ">
          <div className="col-span-2 row-span-2">
            <Image
              className="w-full h-full"
              src="/potfolio/mbenz/solution/img1-2.png"
              width="376"
              height="347"
              alt=""
            />
          </div>
          <div className="col-start-1 row-start-3">
            <Image
              className="w-full h-full"
              src="/potfolio/mbenz/solution/img2-2.png"
              width="166"
              height="174"
              alt=""
            />
          </div>
          <div className="col-start-2 row-start-3">
            <Image
              className="w-full h-full"
              src="/potfolio/mbenz/solution/img3-2.png"
              width="188"
              height="174"
              alt=""
            />
          </div>
          <div className="col-span-3 row-span-3 col-start-3 row-start-1">
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
