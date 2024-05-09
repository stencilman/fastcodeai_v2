import Image from "next/image";
import React from "react";

const Dedication = () => {
  return (
    <div className="w-full h-[auto] bg-[#00081F] flex items-center justify-center relative">
      {/* Gradient */}
      <div
        className="w-full h-[10vh] absolute top-0 blur-[30px]"
        style={{ background: "#00081F 0% 0% no-repeat padding-box" }}
      ></div>

      <div className="flex w-[full] pl-[20px] md:pl-[50px] lg:pl-[100px] pr-[20px] md:pr-[50px] lg:pr-0 mt-[15vw] h-[auto] gap-[10%] gap-y-[40px] flex-col lg:flex-row">
        {/* left */}
        <div className="lg:w-[30%] h-full flex flex-col sm:flex-row lg:flex-col gap-[35px] mt-[12vw]">
          <div className="w-full  ">
            <h3 className="text-white font-aeonik tracking-wide sm:text-[2.5em] lg:text-[3.7em] leading-[1.1em] font-light">
              Our dedication to pioneering technology
            </h3>
            <p className="text-[#9EB3CF] font-bwmss01 text-[0.7em] leading-[1.4em] mt-[15px] md:mt-[20px] lg:mt-[35px] sm:text-[1.4em]">
              Explore our collection of innovative patents that reflect our
              dedication to pioneering technology and transformative solutions
            </p>
          </div>
        </div>
        {/* right */}
        <div className="lg:w-[50%] h-full  flex gap-[5%] flex-wrap">
          <div className="w-[100%] sm:w-[47.5%] h-[150px] sm:h-[331px]  rounded-[18px] mb-[30px] flex items-center sm:items-start sm:flex-col gap-[15px] p-[20px] ">
            <div
              className="flex justify-center items-center border border-[#1A2758] rounded-full p-[10px] mb-[10px]"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #010D33 0%, #010D34 51%, #020B2A 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <Image
                src="/patents/icon1.svg"
                height="50"
                width="50"
                className=""
                alt="icosn"
              />
            </div>
            <div>
              <b className="text-white text-[24px] pb-[7px] font-aeonik">
                Futuristic Innovations
              </b>

              <p className="text-[#9EB3CF] text-[19px] leading-[29px] mt-[24px] font-bwmss01">
                Cutting-edge technologies and solutions
              </p>
            </div>
          </div>
          <div className="w-[100%] sm:w-[47.5%] h-[150px] sm:h-[331px]  rounded-[18px] mb-[30px] flex items-center sm:items-start sm:flex-col gap-[15px] p-[20px] ">
            <div
              className="flex justify-center items-center border border-[#1A2758] rounded-full p-[10px] mb-[10px]"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #010D33 0%, #010D34 51%, #020B2A 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <Image
                src="/patents/icon2.svg"
                height="50"
                width="50"
                className=""
                alt="icosn"
              />
            </div>
            <div>
              <b className="text-white text-[24px] pb-[7px] font-aeonik">
              Industry Impact
              </b>

              <p className="text-[#9EB3CF] text-[19px] leading-[29px] mt-[24px] font-bwmss01">
              Our patented inventions are making waves in the industry
              </p>
            </div>
          </div>
          <div className="w-[100%] sm:w-[47.5%] h-[150px] sm:h-[331px]  rounded-[18px] mb-[30px] flex items-center sm:items-start sm:flex-col gap-[15px] p-[20px] ">
            <div
              className="flex justify-center items-center border border-[#1A2758] rounded-full p-[10px] mb-[10px]"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #010D33 0%, #010D34 51%, #020B2A 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <Image
                src="/patents/icon3.svg"
                height="50"
                width="50"
                className=""
                alt="icosn"
              />
            </div>
            <div>
              <b className="text-white text-[24px] pb-[7px] font-aeonik">
              Patent Diversity
              </b>

              <p className="text-[#9EB3CF] text-[19px] leading-[29px] mt-[24px] font-bwmss01">
              Range of patents covering various technological domains
              </p>
            </div>
          </div>
          <div className="w-[100%] sm:w-[47.5%] h-[150px] sm:h-[331px]  rounded-[18px] mb-[30px] flex items-center sm:items-start sm:flex-col gap-[15px] p-[20px] ">
            <div
              className="flex justify-center items-center border border-[#1A2758] rounded-full p-[10px] mb-[10px]"
              style={{
                background:
                  "transparent linear-gradient(360deg, #13224F 0%, #010D33 0%, #010D34 51%, #020B2A 100%) 0% 0% no-repeat padding-box",
              }}
            >
              <Image
                src="/patents/icon4.svg"
                height="50"
                width="50"
                className=""
                alt="icosn"
              />
            </div>
            <div>
              <b className="text-white text-[24px] pb-[7px] font-aeonik">
              Global Recognition
              </b>

              <p className="text-[#9EB3CF] text-[19px] leading-[29px] mt-[24px] font-bwmss01">
              Our patents have gained international recognition
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dedication;
