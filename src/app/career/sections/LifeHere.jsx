import Image from "next/image";
import React from "react";
import img1 from "../../../../public/career/LifeHere/img1.png";
import img2 from "../../../../public/career/LifeHere/img2.png";
import img3 from "../../../../public/career/LifeHere/img3.png";
import img4 from "../../../../public/career/LifeHere/img4.png";
import img5 from "../../../../public/career/LifeHere/img5.png";
import img6 from "../../../../public/career/LifeHere/img6.png";

const LifeHere = () => {
  return (
    <div className="w-full h-auto px-[20px] md:px-[50px] lg:px-[100px] py-[50px] md:py-[80px] lg:py-[100px] bg-[#00081F] ">
      <h1 className="text-white text-[8vw] md:text-[7vw] lg:text-5xl font-aeonik tracking-wide mb-[40px] md:mb-[60px]">
        Life at Fast Code AI
      </h1>
      <div className="w-full">
        <div className="flex flex-col gap-[30px] w-full items-center">
          <div className="flex flex-col md:flex-row gap-[30px] h-auto md:h-[270px]">
            <div className="relative">
              <Image
                className="h-full  w-full md:w-[301px] object-cover rounded-[24px]"
                src={img1}
                width="301"
                height="283"
                placeholder="blur"
                alt=""
              />
              {/*grayscale on img tag <div className="absolute inset-0 bg-[#05122da6] rounded-[24px]"></div> */}
            </div>
            <div className="relative">
              <Image
                className="h-full w-full md:w-[538px] object-cover rounded-[24px]"
                src={img3}
                placeholder="blur"
                width="538"
                height="283"
                alt=""
              />
              {/* <div className="absolute inset-0 bg-[#05122da6] rounded-[24px]"></div> */}

            </div>
            <div className="relative">
              <Image
                className="h-full  w-full md:w-[301px] object-cover rounded-[24px]"
                src={img6}
                width="301"
                height="283"
                alt=""
                placeholder="blur"
              />
              {/* <div className="absolute inset-0 bg-[#05122da6] rounded-[24px]"></div> */}

            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[30px] h-auto md:h-[416px]">
            <div className="relative">
              <Image
                className="h-full  w-full md:w-[630px] object-cover rounded-[24px]"
                src={img2}
                placeholder="blur"
                width="630"
                height="283"
                alt=""
              />
              {/* <div className="absolute inset-0 bg-[#05122da6] rounded-[24px]"></div> */}

            </div>
            <div className="relative">
              <Image
                className="h-full  w-full md:w-[538px] object-cover rounded-[24px]"
                src={img5}
                width="538"
                height="283"
                alt=""
                placeholder="blur"
              />
              {/* <div className="absolute inset-0  bg-[#05122da6] rounded-[24px]"></div> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeHere;
