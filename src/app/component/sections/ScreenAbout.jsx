"use client";
import React,{useState,useEffect} from "react";
import scringAnim from "../../../../public/animations/springs.json";
import preloader1 from "../../../../public/animations/preloader/Logo_6.json";
import preloader2 from "../../../../public/animations/preloader/Logo_8.json";
import Lottie from "lottie-react";
import Image from "next/image";
import brain from "../../../../public/brain.svg"

const ScreenAbout = () => {
  const [isShortScreen, setIsShortScreen] = useState(false);

  useEffect(() => {
    const checkScreenHeight = () => {
      if (window.innerHeight < 800) {
        setIsShortScreen(true);
      } else {
        setIsShortScreen(false);
      }
    };

    // Initial check
    checkScreenHeight();

    // Add event listener
    window.addEventListener('resize', checkScreenHeight);

    // Clean up event listener
    return () => window.removeEventListener('resize', checkScreenHeight);
  }, []);
  return (
    <div className={`w-full ${isShortScreen ? 'h-[800px]' : 'h-[90vh] sm:h-[86vh] md:h-[82vh] lg:h-[100vh]'}  flex flex-col lg:flex-row relative lg:static gap-[20px] items-center bg-[#00081F]`}>
      <div className="absolute lg:relative left-0 top-[20vw] sm:top-[16vw] lg:top-0">
        <div className="w-[92vw] md:w-[70vw] h-[462px] lg:w-[600px] lg:h-[600px] transform scale-x-[-1]">
          <Lottie animationData={scringAnim} loop={true} />
        </div>
        <div className="absolute top-[21vw] md:top-[14vw] left-[39%]  lg:left-[240px] lg:top-[129px]">
          <Image
            className="w-[42vw] md:w-[32vw] lg:w-[270px]"
            src={brain}
            width="270"
            height="200"
            alt="img"
          />
        </div>
      </div>
      <div className="mb-[100px] absolute lg:static top-[60vw] text-center lg:text-left">
        <h1 className="text-[8vw] md:text-[7vw] lg:text-[51px] text-white font-aeonik tracking-normal relative lg:static top-[-50vw] lg:top-0 ">
          Discover FastCode AI
        </h1>
        <p className="text-[#9EB3CF] text-base sm:text-lg w-[100%] lg:w-[80%] px-[10vw] lg:px-0 pt-[28vw] sm:pt-[25vw] md:pt-[8vw] lg:pt-[20px] font-bwmss01">
          FastCode AI stands at the forefront of AI adoption, equipping industry
          leaders with the tools to implement advanced intelligence, scale
          solutions, and automate processes effectively. We are committed to
          enhancing operational safety, refining user interactions, and
          unlocking deep insights into machinery and production processes
          through state-of-the-art automation and data analytics. Guided by our
          core values of Excellence, Innovation, and Integrity, we ensure every
          solution we deliver upholds the highest standards.
        </p>
      </div>
    </div>
  );
};

export default ScreenAbout;
