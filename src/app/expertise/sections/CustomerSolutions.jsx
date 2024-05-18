import Image from "next/image";
import React from "react";

const CustomerSolutions = () => {
  return (
    <div className="w-full h-[60vh] sm:h-[80vh] lg:h-[100vh] bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83 relative flex flex-col items-center pt-[10vh] md:pt-[20vh] lg:pt-[25vh] z-[5]">
      <div className="w-[90%] lg:w-[65%] h-[50vh]  text-center">
        <h1 className="text-[8vw] md:text-[7vw] lg:text-[51px] text-white font-aeonik text-center tracking-wide leading-[10vw] md:leading-[8vw] lg:leading-[60px]">
          We Deliver
          <br /> Customer Solutions As Per need
        </h1>
        <p className="text-[#9EB3CF] pr-[20px] text-[19px] font-light mt-[40px] font-bwmss01 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odio
          enim culpa nesciunt modi nemo delectus incidunt facere, dolor iste
          soluta, neque quos? Est corrupti qui consequuntur veniam similique!
          Aut.
        </p>
      </div>
      {/* Cards */}
      <div className="w-full md:w-[80%] h-[30%] md:h-[50%] lg:h-[450px] relative md:top-[16%] lg:top-[40%] z-[17] hidden  sm:flex justify-between gap-[30px]">
        <div className="h-[450px] w-[418px] flex flex-col items-center">
          <div className="w-full h-[80%]">
            <Image
              src="/expertisePage/pic1-2.png"
              className="w-full h-full object-cover rounded-[35px]"
              width="300"
              height="300"
              alt=""
            />
          </div>
          <div className="w-full h-auto mt-[20px]">
            <p className="text-[#9EB3CF] text-center text-[26px] leading-[40px] font-aeonik ">
              Natural Language
              <br /> Processing (NLP) Solutions
            </p>
          </div>
        </div>
        {/* card-2 */}
        <div className="h-[450px] w-[418px] flex flex-col items-center  relative top-[-30%]">
          <div className="w-full h-[80%]">
            <Image
              src="/expertisePage/pic2-2.png"
              className="w-full h-full object-cover rounded-[35px]"
              width="300"
              height="300"
              alt=""
            />
          </div>
          <div className="w-full h-auto mt-[20px]">
            <p className="text-[#9EB3CF] text-center text-[26px] leading-[40px] font-aeonik ">
              Computer <br /> Vision Applications
            </p>
          </div>
        </div>
        {/* card-3 */}
        <div className="h-[450px] w-[418px] flex flex-col items-center  ">
          <div className="w-full h-[80%]">
            <Image
              src="/expertisePage/pic3-2.png"
              className="w-full h-full object-cover rounded-[35px]"
              width="300"
              height="300"
              alt=""
            />
          </div>
          <div className="w-full h-auto mt-[20px]">
            <p className="text-[#9EB3CF] text-center text-[26px] leading-[40px] font-aeonik ">
              Tailored Algorithm <br /> Development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSolutions;
