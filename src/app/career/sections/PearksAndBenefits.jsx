import Image from "next/image";
import React from "react";

const PearksAndBenefits = () => {
  const pearksBenefitList = [
    {
      icon: "/career/perks-benefits/icon1.svg",
      name: "Be connected",
      details: "Macbook, Mobile device budget Internet and mobile plan",
    },
    {
        icon: "/career/perks-benefits/icon2.svg",
        name: "Go flexible",
        details: "Work from home, Flexible working hours Office with panorama view of Brussels",
      },
      {
        icon: "/career/perks-benefits/icon3.svg",
        name: "Keep learning",
        details: "Personal L&D budget each year Monthly presentations",
      },
      {
        icon: "/career/perks-benefits/icon4.svg",
        name: "Take holidays",
        details: "20 Legal holidays 12 ADV Holidays",
      },
      {
        icon: "/career/perks-benefits/icon5.svg",
        name: "Stay healthy",
        details: "Health insurance Mental health support",
      },
      {
        icon: "/career/perks-benefits/icon6.svg",
        name: "Get extras",
        details: "Lorem Ipsum is just dummy information regarding health.",
      },
      
  ];
  return (
    <div className="w-full px-[100px] py-[75px] bg-[#00081F]">
      <div className="w-full text-center mb-[40px]">
        <h1 className="text-white text-center text-5xl font-aeonik tracking-wide mb-[60px]">
          Perks and Benefits
        </h1>
      </div>
      <div className="w-full flex gap-[25px]  flex-wrap">
       {pearksBenefitList.map((e,i)=> <div key={i}
          className=" rounded-[18px] flex items-center  w-[47%] gap-[15px] p-[15px] border border-[#1A2758]"
          style={{
            background:
              "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
          }}
        >
          <div
            className="flex justify-center items-center border border-[#1A2758] rounded-full p-[10px]"
            style={{
              background:
                "transparent linear-gradient(360deg, #13224F 0%, #010D33 0%, #010D34 51%, #020B2A 100%) 0% 0% no-repeat padding-box",
            }}
          >
            <Image
              alt="icon"
              src={e.icon}
              height="50"
              width="90"
              className="w-[50px] sm:h-[50px]"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <b className="text-white text-[24px] pb-[7px] font-aeonik">
              {e.name}
            </b>
            <p className="text-[#9EB3CF] w-[70%] text-lg font-bwmss01">
             {e.details}
            </p>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default PearksAndBenefits;
