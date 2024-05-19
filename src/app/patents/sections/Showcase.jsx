"use client";
import React, { useState } from "react";
import Patents from "./components/Patents";
import Publications from "./components/Publications";
import { motion } from "framer-motion";

const Showcase = () => {
  const [activeTab, setActiveTab] = useState("patents"); // Track active tab

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full h-[auto] bg-[#00081F] flex items-center justify-center relative mt-[70px] flex-col gap-[35px] md:gap-[70px]">
      <h3 className="text-white font-aeonik tracking-wide sm:text-[8vw] md:text-[7vw] lg:text-[51]  font-light text-center w-full">
        Our Patent Showcase
      </h3>

      <div className="w-[90vw]  md:w-[60vw] lg:w-[50vw] h-[100px] rounded-[18px] border border-[#1A2758] flex relative">
        {/* toggler button */}
        <motion.div
          className={`w-[50%] h-full absolute top-0 left-0 rounded-[18px] cursor-pointer ${
            activeTab === "publications" ? "ml-[0%]" : "ml-0"
          }`} // Use Framer Motion for smooth animations
          onClick={() =>
            toggleTab(activeTab === "patents" ? "publications" : "patents")
          }
          style={{
            background:
              "transparent linear-gradient(160deg, #2DC1C3 0%, #0268F2 100%) 0% 0% no-repeat padding-box",
          }}
          initial={{ x: 0 }} // Initial position of the toggle button
          animate={{ x: activeTab === "patents" ? 0 : "100%" }} // Animate the toggle button
          transition={{ duration: 0.3, ease: "easeInOut" }} // Animation duration and easing
        ></motion.div>
        {/* toggle patents */}
        <div
          className={`w-[50%] flex items-center justify-center font-bold text-[26px] md:text-[32px] text-[#9EB3CF] font-aeonik relative cursor-pointer ${
            activeTab === "patents" ? "text-white" : ""
          }`}
          onClick={() => toggleTab("patents")}
        >
          Patents 
        </div>
        {/* toggle publications */}
        <div
          className={`w-[50%] flex items-center justify-center font-bold text-[26px] md:text-[32px] text-[#9EB3CF] font-aeonik relative cursor-pointer ${
            activeTab === "publications" ? "text-white" : ""
          }`}
          onClick={() => toggleTab("publications")}
        >
          Publications
        </div>
        {/* Render the active component */}
      </div>
      {activeTab === "patents" ? <Patents /> : <Publications />}
    </div>
  );
};

export default Showcase;
