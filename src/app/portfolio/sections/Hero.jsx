import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-auto relative bg-[#00081F]">
      {/* <video
        style={{ mixBlendMode: "screen" }}
        className="absolute top-[20%] right-[10%] w-[200px] h-[200px] md:w-[417px] md:h-[476px]"
        type="video/mp4"
        autoPlay
        muted
        loop
        playsInline
        width="417"
        height="476"
        src="/contact/bgVideo.mp4"
      /> */}
      <div className="w-full pb-[7%] pt-[40%]  md:pt-[30%] lg:pt-[20%] flex justify-center items-center flex-col">
        <p className="text-[#9EB3CF] font-bwmss01 text-[19px] md:text-[28px] text-center">
       <b className="text-white font-aeonik font-medium text-[8vw] md:text-[7vw] text-5xl "> Unlock Your Potential </b><br/> Where Vision Meets Velocity
        </p>
        {/* <div className="px-[20px]  w-full md:px-[50px] lg:px-[100px]">
          <iframe
            className="embed-responsive-item w-full h-[300px] my-[50px] md:h-[600px] rounded-[18px]"
            src="https://www.youtube.com/embed/JNFOjZD4wk4"
            title="intro"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div> */}
        {/* <h1 className="text-white mt-[10px] font-aeonik tracking-wide font-normal text-[6vw] leading-[6vw]">
          What {"we've"} done so far
        </h1> */}
      </div>
    </div>
  );
};

export default Hero;
