import Image from "next/image";
import React from "react";

const LifeHere = () => {
  return (
    <div className="w-full h-auto px-[100px] py-[100px] bg-[#00081F] ">
      <h1 className="text-white  text-5xl font-aeonik tracking-wide mb-[60px]">
        Life at Fast Code AI
      </h1>
      <div className="full">
       
        <div className="flex flex-col gap-[30px] w-full items-center">
          <div className="flex gap-[30px] h-[270px]">
            <div>
              <Image
              className="h-full "
                src="/career/LifeHere/img1.png"
                width="301"
                height="283"
                alt=""
              />
            </div>
            <div>
              <Image
              className="h-full "
                src="/career/LifeHere/img2-2.png"
                width="538"
                height="283"
                alt=""
              />
            </div>
            <div>
              <Image
              className="h-full "
                src="/career/LifeHere/img3-2.png"
                width="301"
                height="283"
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-[30px] h-[416px]">
            <div>
            <Image className="h-full " src="/career/LifeHere/img4-2.png" width="630" height="283" alt=""/>
            </div>
            <div>
            <Image className="h-full " src="/career/LifeHere/img5-2.png" width="538" height="283" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeHere;
