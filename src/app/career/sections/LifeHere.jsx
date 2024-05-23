import Image from "next/image";
import React from "react";

const LifeHere = () => {
  return (
    <div className="w-full h-auto px-[20px] md:px-[50px] lg:px-[100px] py-[50px] md:py-[80px] lg:py-[100px] bg-[#00081F] ">
      <h1 className="text-white text-[8vw] md:text-[7vw] lg:text-5xl font-aeonik tracking-wide mb-[40px] md:mb-[60px]">
        Life at Fast Code AI
      </h1>
      <div className="w-full">
       
        <div className="flex flex-col gap-[30px] w-full items-center">
          <div className="flex flex-col md:flex-row gap-[30px] h-auto md:h-[270px]">
            <div>
              <Image
              className="h-full w-full md:w-[301px]"
                src="/career/LifeHere/img1.png"
                width="301"
                height="283"
                alt=""
              />
            </div>
            <div>
              <Image
              className="h-full w-full md:w-[538px]"
                src="/career/LifeHere/img2-2.png"
                width="538"
                height="283"
                alt=""
              />
            </div>
            <div>
              <Image
              className="h-full w-full md:w-[301px]"
                src="/career/LifeHere/img3-2.png"
                width="301"
                height="283"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[30px] h-auto md:h-[416px]">
            <div>
            <Image className="h-full w-full md:w-[630px]" src="/career/LifeHere/img4-2.png" width="630" height="283" alt=""/>
            </div>
            <div>
            <Image className="h-full w-full md:w-[538px]" src="/career/LifeHere/img5-2.png" width="538" height="283" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeHere;
