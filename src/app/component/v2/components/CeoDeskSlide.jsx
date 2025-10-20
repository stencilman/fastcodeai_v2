"use client";
import React from "react";
import Script from "next/script";

const CeoDeskSlide = () => {
  return (
    <div className="w-full">
      {/* Elfsight LinkedIn Feed | AJ */}
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive"
      />
      <div
        className="elfsight-app-d8777d94-398e-4b62-8db0-3ac7fcd00f99"
        data-elfsight-app-lazy="true"
      ></div>
    </div>
  );
};

export default CeoDeskSlide;
