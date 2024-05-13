import React from "react";

const KeyFeatures = () => {
  return (
    <div className="w-full h-auto bg-[#00081F] py-[100px]  px-[20px] md:px-[50px] lg:px-[100px]">
      <div className="flex flex-col gap-[40px] px-[40px]">
        <h1 className="text-white text-8xl font-aeonik tracking-wide mb-[4px]">
          Key Features
        </h1>
        <p className="text-[#9EB3CF] text-lg font-bwmss01 ">
          our solution is the ability to distinguish between various gestures
          made by drivers and passengers, enhancing the overall user experience.
        </p>
      </div>
      <div className="w-full py-[60px] h-auto flex justify-center items-center gap-[70px] px-[40px] my-[80px]">
        <div className="w-[40%]">
          <h3 className="text-white text-5xl font-aeonik tracking-wide">
            {/* {i < 9 ? "0" + (i + 1) : i + 1} */}
            01
          </h3>
          <p className={`text-[#9EB3CF] text-lg font-bwmss01 pt-[22px] `}>
            {/* {e.details} */}
            Activating vehicle functions via hand gestures, applying a 3D
            Convolutional Neural Network (3D-CNN) and Gated Recurrent Unit (GRU)
            to analyze video frames and extract spatio-temporal features
          </p>
        </div>
        <div className="w-[40%]">
          <h3 className="text-white text-5xl font-aeonik tracking-wide">
            {/* {i < 9 ? "0" + (i + 1) : i + 1} */}
            02
          </h3>
          <p className={`text-[#9EB3CF] text-lg font-bwmss01  pt-[22px]`}>
            {/* {e.details} */}
            Advanced airbag deployment control system, utilizing a processing
            unit equipped with Long Short Term Memory (LSTM) neural network
            architecture, analyzes images to determine and predict the future
            position and orientation of the {"occupant's"} head.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[40px] px-[40px]">
        <h1 className="text-white text-8xl font-aeonik tracking-wide mb-[4px]">
          Refrances
        </h1>
        <div className="pr-[25%] flex flex-col gap-[20px]">
          <p className="text-[#9EB3CF] text-lg font-bwmss01 ">
            1 - Cholakkal Hisham , Arjun Jain, et al. Method For Identifying a
            Hand Pose in a Vehicle, WO2020048814, March 2020
          </p>
          <p className="text-[#9EB3CF] text-lg font-bwmss01 ">
            2 - Vikram Gupta, Arjun Jain, et al. Method and System for
            Triggering an Event in a Vehicle, EP3895064, Jan 2023
          </p>{" "}
          <p className="text-[#9EB3CF] text-lg font-bwmss01 ">
            3 - Sai Kumar Dwivedi, Arjun Jain, et al. System And Method For
            Deployment Of Airbag Based On Head Pose Estimation, 201911039220 A,
            April 2021
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
