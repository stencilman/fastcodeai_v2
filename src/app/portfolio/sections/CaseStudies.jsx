"use client";
import Button from "@/app/component/Button";
import { motion } from "framer-motion";
import { useState } from "react";

const CaseStudies = () => {
  const tabs = ["All", "Category 1", "Category 2", "Category 3"];
  const [selected, setSelected] = useState(tabs[0]);

  const porfolioList = [
    {
      img: "bg-benz",
      title: "Mercedes Benz",
      description:
        "Enhance interaction between driver and car by detecting driver hand gesture for superior level driver experience with Mercedes Benz User Experience - MBUX System.",
      to: "/portfolio/mbux",
    },
    {
      img: "bg-benz",
      title: "Bosch",
      description:
        "Accurate, low footprint detection with vulnerable roadside users (VRUs) and road signs covered in the Bosch-Daimler autonomous driving initiative.",
      to: "/portfolio/bosch",
    },
    {
      img: "bg-learning",
      title: "Federated Learning on the Edge ",
      description:
        "Revolutionizing privacy and efficiency in data processing with Federated Learning (FL) on edge devices, enabling real-time, secure analytics in several key sectors.",
      to: "/portfolio/federated-learning",
    },
    {
      img: "bg-fitness",
      title: "Fitness Pose Estimation",
      description:
        "Empowering exercise perfection with AI-driven real-time pose estimation, providing interactive visual feedback for correct posture and effective workouts.",
      to: "/portfolio/fitness-pose-estimation",
    },
    {
      img: "bg-fitness",
      title: "Data Query Assitant",
      description:
        "Transforming data access with a natural language interface that converts queries into SQL, simplifying database interaction.",
      to: "/portfolio/sqlwizard",
    },
    {
      img: "bg-fitness",
      title: "Loneliness Assistant",
      description:
        "Personalised assistant designed to empthatize with humans and serves as a close companion by engaging in an emotionally deep manner.",
      to: "/portfolio/loneliness-assistant",
    },
    {
      img: "bg-fitness",
      title: "Indian Fashion insight Framework",
      description:
        "Pioneering deep learning in fashion with a custom Indian dataset for advanced trend forecasting and targeted consumer insights.",
      to: "/portfolio/fashion-framework",
    },
    {
      img: "bg-fitness",
      title: "AI Banking Insights & Monitoring",
      description:
        "Enhancing banking with AI: Advanced data analytics for customer insights and predictive modeling, streamlined with efficient application monitoring.",
      to: "/portfolio/banking-infra",
    },
    {
      img: "bg-fitness",
      title: "RAG based Personal Diary",
      description:
        "Smart, diary-like system that effortlessly organizes and retrieves your daily activities and information with cutting-edge Retrieval-Augmented Generation techniques.",
      to: "/portfolio/rag",
    },
  ];

  return (
    <div
      className="w-full h-auto relative bg-[#00081F]
    "
    >
      {/* Shadows */}
      <div className="absolute left-[7%] top-[-7%]  w-[20%] h-[17%] blur-[50px] translate-y-[167px] scale-90  rounded-[50%] z-[3] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[100px]"></div>
      <div className="absolute left-[70%] top-[46%]  w-[27%] h-[17%] blur-[50px] translate-y-[167px] scale-90  rounded-[50%] z-[3] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[100px]"></div>
      {/* catagories */}
      <div className="flex gap-[12px] md:gap-[35px] items-center justify-center flex-wrap mt-[40px] md:mt-[70px] ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelected(tab)}
            className={`min-w-[144px] ${
              selected === tab
                ? "text-white "
                : "text-slate-300 hover:text-slate-200 hover:bg-slate-700 border border-slate-700"
            }  transition-colors   rounded-[30px]  px-[21px] py-[10px] text-lg font-bwmss01 text-white relative`}
            style={{ border: "1px solid #082373" }}
          >
            <span className="relative z-10">{tab}</span>
            {selected === tab && (
              <motion.span
                layoutId="pill-tab"
                transition={{ type: "spring", duration: 0.5 }}
                className="absolute inset-0 z-0 bg-gradient-to-r from-[#2DC1C3] to-[#0268F2] rounded-[30px]"
              ></motion.span>
            )}
          </button>
        ))}
      </div>

      <div className="w-full my-[70px] px-[20px] md:px-[50px] lg:px-[100px] flex flex-col gap-[40px] items-center relative z-[5]">
        {porfolioList.map((e, i) => {
          return (
            <div
              key={i}
              className={`p-[0] border border-[#082373] lg:px-[35px] lg:pt-[0px] lg:pb-[40px] w-full h-[512px] sm:h-[434px] lg:h-[410px] ${e.img} rounded-[20px] bg-cover bg-no-repeat`}
              style={{ maxWidth: "1099px" }}
            >
              <div className="w-full h-full flex justify-between flex-col lg:flex-row p-[15px] sm:p-[21px] lg:pb-[0px]">
                <div className="h-full w-full lg:w-[50%] flex flex-col gap-[4vw] md:gap-[2vw] lg:gap-[0px] justify-normal lg:justify-evenly ">
                  <h5 className="text-white font-aeonik font-light tracking-normal text-[30px]">
                    {e.title}
                  </h5>
                  <p className="text-[#9EB3CF] font-bwmss01 text-lg ">
                    {e.description}
                  </p>
                  <div className="w-[164px]">
                    <Button to={`${e.to}`} name="Read More" />
                  </div>
                </div>
                <div className="w-full h-[100px] lg:h-full flex lg:w-[37%] gap-[15px] lg:gap-[39px]  items-end sm:pb-[20px]">
                  <div>
                    <h5 className="text-white font-aeonik font-bold tracking-normal text-[30px]">
                      100%
                    </h5>
                    <p className="text-[#9EB3CF] font-bwmss01 text-lg ">
                      success rate for system and personnel protection
                    </p>
                  </div>
                  <div className="">
                    <h5 className="text-white font-aeonik font-bold tracking-normal text-[30px]">
                      0.5sec
                    </h5>
                    <p className="text-[#9EB3CF] font-bwmss01 text-lg ">
                      Swift altering system within half a second before the
                      incident
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CaseStudies;