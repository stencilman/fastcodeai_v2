import Image from "next/image";
import React from "react";

const Cta = ({title,quote}) => {
  return (
    <div className="w-full h-[80vh] pl-[20px] md:pl-[50px] lg:pl-[100px] pr-[20px] md:pr-[50px] lg:pr-0 relative bg-[#00081F] flex flex-col justify-center gap-[4vw]">
      <h1 className="text-5xl text-white font-aeonik">
        {title}
      </h1>
      <div
        className="w-[90%] md:w-[80%] rounded-[28px] h-[60px] md:h-[80px] lg:h-[100px] flex items-center justify-between px-[20px] "
        style={{
          background:
            "transparent linear-gradient(127deg, #2DC1C3 0%, #0268F2 100%) 0% 0% no-repeat padding-box",
        }}
      >
        <div>
          <p className="text-white font-aeonik font-bold text-[26px] md:text-[32px] ">
            {quote}
          </p>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="text-white font-bwmss01 text-[19px]">Say Hi</p>
          <Image
            className="transform scale-x-[-1.5] "
            src="/arrowRight.svg"
            width="45"
            height="45"
            alt=""
            style={{
              transform: "matrix(0.71, -0.71, 0.71, 0.71, 0, 0)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Cta;
