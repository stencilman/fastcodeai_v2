import Button from "@/app/component/Button";
import Image from "next/image";
import React from "react";

const ExpertiseSlide = () => {
  return (
    <div className="w-full h-[auto] pt-[40%] pb-[15%]  relative overflow-hidden bg-[#00081F] flex flex-col ">
      <div className="hidden sm:block absolute top-[-100px] left-[-150px] w-[150%] overflow-hidden h-[250px] blur-[50px] translate-y-[30px] scale-90  rounded-[50%] z-[1] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[50px] "></div>

      <div className="pl-[20px] sm:pl-[60px] md:pl-[50px] lg:pl-[100px] pr-[90px] grid grid-cols-12 gap-[85px] gap-y-[150px] ">
       
        {/* slide - 2 */}
        <div className="hidden md:grid md:col-span-4 lg:col-span-5 ">
          <Image
            src="/expertisePage/scroll/pic2-2.png"
            width="431"
            height="509"
            alt=""
          />
        </div>
        <div className="col-span-8 md:col-span-8 lg:col-span-6 flex gap-[10px] justify-between">
          {/* Computer Vision*/}
          <div
            className={`w-[77px] h-[77px] rounded-full flex items-center justify-center bg-gradient-to-br from-[#13224F] to-[#13224F] border border-[#1A2758] `}
          >
            <Image src="/experties/icon2.svg" width="44" height="44" alt="" />
          </div>
          <div
            className="main-content w-[80%]"
            data-main="Artificial Intelligence"
          >
            <h1 className="w-[36vw] md:w-[40vw] lg:w-full  text-[42px] text-white tracking-wide font-aeonik">
              Computer Vision
            </h1>
            <p className="text-[#9EB3CF] text-[19px] w-[60vw] md:w-[35vw] lg:w-full  font-light pt-[15px] font-bwmss01 ">
              We develop custom software solutions using computer vision and
              deep learning to analyze images, videos, LiDAR, and live streams,
              helping businesses identify and track objects for enhanced
              decision-making.
            </p>
            <br />
            <br />
            <div className="w-[164px]">
              <Button name="Read More" to="/expertise" />
            </div>
          </div>
        </div>
        {/* slide - 3 */}
        <div className="hidden md:grid md:col-span-4 lg:col-span-5 ">
          <Image
            src="/expertisePage/scroll/pic3-2.png"
            width="431"
            height="509"
            alt=""
          />
        </div>
        <div className="col-span-8 md:col-span-8 lg:col-span-6 flex gap-[10px] justify-between">
          {/* Machine Learning */}
          <div
            className={`w-[77px] h-[77px] rounded-full flex items-center justify-center bg-gradient-to-br from-[#13224F] to-[#13224F] border border-[#1A2758] `}
          >
            <Image src="/experties/icon3.svg" width="44" height="44" alt="" />
          </div>
          <div
            className="main-content w-[80%]"
            data-main="Artificial Intelligence"
          >
            <h1 className="w-[36vw] md:w-[40vw] lg:w-full  text-[42px] text-white tracking-wide font-aeonik">
              Machine Learning
            </h1>
            <p className="text-[#9EB3CF] text-[19px] w-[60vw] md:w-[35vw] lg:w-full  font-light pt-[15px] font-bwmss01 ">
              Design and implement innovative ML solutions rapidly — from
              foundational infrastructure to customer products. Our expert
              engineers will partner with you to advance innovation effectively
              within your company.
              <br />
              <br />
              Design and implement innovative ML solutions rapidly — from
              foundational infrastructure to customer products. Our expert
              engineers will partner with you to advance innovation effectively
              within your company.
            </p>
            <br />
            <br />
            <div className="w-[164px]">
              <Button name="Read More" to="/expertise" />
            </div>
          </div>
        </div>
         {/* slide - 1 */}

         <div className="hidden md:grid md:col-span-4 lg:col-span-5 ">
          <Image
            src="/expertisePage/scroll/pic1-2.png"
            width="431"
            height="509"
            alt=""
          />
        </div>
          {/*Reinforcement Learning */}
        <div className="col-span-8 md:col-span-8 lg:col-span-6 flex gap-[10px] justify-between">
          <div
            className={`w-[77px] h-[77px] rounded-full flex items-center justify-center bg-gradient-to-br from-[#13224F] to-[#13224F] border border-[#1A2758] `}
          >
            <Image src="/experties/icon1.svg" width="44" height="44" alt="" />
          </div>
          <div
            className="main-content w-[80%]"
            data-main="Artificial Intelligence"
          >
            <h1 className="w-[36vw] md:w-[40vw] lg:w-full  text-[42px] text-white tracking-wide font-aeonik">
             Reinforcement Learning
            </h1>
            <p className="text-[#9EB3CF] text-[19px] w-[60vw] md:w-[35vw] lg:w-full  font-light pt-[15px] font-bwmss01 ">
              Develop and implement bespoke AI solutions to rapidly advance your
              organizational goals. We collaborate with you to identify the
              optimal artificial intelligence strategies, tools and
              technologies.
              <br />
              <br />
              Develop and implement bespoke AI solutions to rapidly advance your
              organizational goals. We collaborate with you to identify the
              optimal artificial intelligence strategies, tools and
              technologies.
            </p>
            <br />
            <br />
            <div className="w-[164px]">
              <Button name="Read More" to="/expertise" />
            </div>
          </div>
        </div>
        {/* slide - 4 */}
        <div className="hidden md:grid md:col-span-4 lg:col-span-5 ">
          <Image
            src="/expertisePage/scroll/pic4-2.png"
            width="431"
            height="509"
            alt=""
          />
        </div>
        <div className="col-span-8 md:col-span-8 lg:col-span-6 flex gap-[10px] justify-between">
          {/* Data Science */}
          <div
            className={`w-[77px] h-[77px] rounded-full flex items-center justify-center bg-gradient-to-br from-[#13224F] to-[#13224F] border border-[#1A2758] `}
          >
            <Image src="/experties/icon4.svg" width="44" height="44" alt="" />
          </div>
          <div className="main-content w-[80%]" data-main="Data Science">
            <h1 className="w-[36vw] md:w-[40vw] lg:w-full  text-[42px] text-white tracking-wide font-aeonik">
              Data Science
            </h1>
            <p className="text-[#9EB3CF] text-[19px] w-[60vw] md:w-[35vw] lg:w-full  font-light pt-[15px] font-bwmss01 ">
              Our full-stack data scientists excel in solving intricate data
              challenges, regardless of data volume or structure, enabling your
              business to significantly improve efficiency and increase
              profitability rapidly.
              <br />
              <br />
              Our full-stack data scientists excel in solving intricate data
              challenges, regardless of data volume or structure, enabling your
              business to significantly improve efficiency and increase
              profitability rapidly.
            </p>
            <br />
            <br />
            <div className="w-[164px]">
              <Button name="Read More" to="/expertise" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSlide;
