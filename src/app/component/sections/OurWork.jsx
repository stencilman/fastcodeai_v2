"use client";
import Image from "next/image";
import React from "react";

const slides = [
  {
    title: "Mercedes Benz",
    content:
      "Enhance interaction between driver and car by detecting driver hand gesture for superior level driver experience with Mercedes Benz User Experience - MBUX System..",
    image: "/our-work/merc.png",
  },
  {
    title: "Bosch",
    content:
      "Accurate, low footprint detection with vulnerable roadside users (VRUs) and road signs covered in the Bosch-Daimler autonomous driving initiative.",
    image: "/our-work/bosch.webp",
  },
  {
    title: "Fitness Pose Estimation",
    content:
      "Empowering exercise perfection with AI-driven real-time pose estimation, providing interactive visual feedback for correct posture and effective workouts.",
    image: "/our-work/fitness.webp",
  },
  {
    title: "AI-Assisted Dermatology",
    content:
      "Advancing AI-powered Dermatology solutions: Identification, insights & assistance for better skin lesion treatment outcomes and accessible dermatological care.",
    image: "/our-work/ai_dermo.webp",
  },
  // Add more slides here as needed
];

const OurWork = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  console.log("currentSlide", currentSlide);

  return (
    <div className="w-full h-[100vh] pl-[160px] relative bg-[#00081F] flex flex-col justify-center">
      <div className="absolute top-[-160px] left-0 w-full h-[150px] blur-[50px] translate-y-[30px] scale-90  rounded-[50%] z-[1] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[50px]"></div>
      {/* Titile with buttons */}
      <div className="flex justify-between pr-[127px]">
        <h1 className="text-5xl text-white">Check Out Our Work</h1>
        {/* Buttons */}
        <div className="flex gap-[15px]">
          {/* Left Button */}
          <div
            className="w-[49px] h-[49px] border border-white rounded-full flex justify-center items-center cursor-pointer duration-500 hover:border-[#ffffff92] hover:border"
            onClick={prevSlide}
          >
            <Image
              className="transform scale-x-[-1] "
              src="/arrowRight.svg"
              width="30"
              height="30"
              alt=""
            />
          </div>
          {/* Right Button */}
          <div
            className="w-[49px] h-[49px] border border-white rounded-full flex justify-center items-center cursor-pointer duration-500 hover:border-[#ffffff92] hover:border"
            onClick={nextSlide}
          >
            <Image src="/arrowRight.svg" width="30" height="30" alt="" />
          </div>
        </div>
      </div>
      {/* Carousel  */}
      <div className="w-full relative z-[1] flex overflow-x-hidden mt-[67px]">
        <div className="flex relative gap-[52px] ">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="h-[444px] w-[951px] relative rounded-[18px] bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83 py-[42px] px-[37px] flex justify-between items-center transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="pl-[10px] w-[50%]">
                <h3 className="text-[42px] text-white leading-[47px]">{slide.title}</h3>
                <p className="text-[#9EB3CF] text-[19px] pt-[22px] leading-[29px]">
                  {slide.content}
                </p>
                <button className="rounded-[28px] mt-[50px]  flex items-center gap-[7px] bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] text-white p-[15px] text-lg ">
                  <div>Read More</div>
                </button>
              </div>
              <div className="w-[40%]">
                <Image
                  className="w-[100%] h-[293px] rounded-[25px]"
                  src={slide.image}
                  width="368"
                  height="360"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork;
