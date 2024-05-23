import React from "react";

const KeyFeatures = ({ keyFeaturesData }) => {
  return (
    <div className="w-full h-auto bg-[#00081F] py-[100px]  px-[20px] md:px-[50px] lg:px-[100px]">
      <div className="flex flex-col gap-[25px] md:gap-[40px] px-[40px]">
        {keyFeaturesData[0]?.length>0 && (
          <h1 className="text-white text-6xl md:text-8xl font-aeonik tracking-wide mb-[4px]">
            Key Features
          </h1>
        )}
        <p className="text-[#9EB3CF] text-lg font-bwmss01 ">
          {keyFeaturesData?.description}
        </p>
      </div>
      {keyFeaturesData[0]?.points && (
        <div className="w-full py-[60px] h-auto flex flex-col md:flex-row  justify-center items-center gap-[70px] px-[40px] my-[20px] md:my-[80px]">
          {keyFeaturesData[0]?.points?.map((e, i) => (
            <div key={i} className="w-full md:w-[40%]">
              <h3 className="text-white text-5xl font-aeonik tracking-wide">
                {i < 9 ? "0" + (i + 1) : i + 1}
              </h3>
              <p className={`text-[#9EB3CF] text-lg font-bwmss01 pt-[22px] `}>
                {e}
              </p>
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-col gap-[40px] px-[40px]">
        {keyFeaturesData[0]?.refrances && (
          <h1 className="text-white text-6xl md:text-8xl font-aeonik tracking-wide mb-[4px]">
            Refrances
          </h1>
        )}
        <div className="pr-[10%] md:pr-[25%] flex flex-col gap-[20px]">
          {keyFeaturesData[0]?.refrances?.map((e, i) => (
            <p key={i} className="text-[#9EB3CF] text-lg font-bwmss01 ">
              {e}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
