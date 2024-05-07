"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Team = () => {
  const [imageInfo, setImageInfo] = useState([]);

  useEffect(() => {
    // Simulate fetching image data
    const fetchedImages = [
      "/team/Arjun_Jain.webp",
      "/team/abdul.png",
      "/team/darshan.webp",
      "/team/Dhaval.webp",
      "/team/dhruv1.webp",
      "/team/eshwar.webp",
      "/team/gautam.webp",
      "/team/Jadhav.webp",
      "/team/Nanda.webp",
      "/team/parth-bw.webp",
      "/team/Prabal.webp",
      // '/team/Sanjay.webp',
      // '/team/Shreyas.webp',
      // '/team/Sughosh.webp',
      // '/team/Tirth.webp'
    ].map((src) => ({ src, visible: Math.random() < 0.5 })); // Randomly set some images as visible
    setImageInfo(fetchedImages);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageInfo((currentImageInfo) => {
        const newImageInfo = [...currentImageInfo];
        const visibleImages = newImageInfo.filter((info) => info.visible);
        const hiddenImages = newImageInfo.filter((info) => !info.visible);

        if (hiddenImages.length > 0 && visibleImages.length > 0) {
          const randomVisibleIndex = Math.floor(
            Math.random() * visibleImages.length
          );
          // console.log("randomVisibleIndex",randomVisibleIndex)
          const randomHiddenIndex = Math.floor(
            Math.random() * hiddenImages.length
          );
          // console.log("randomHiddenIndex",randomHiddenIndex)

          // Swap visibility
          visibleImages[randomVisibleIndex].visible = false;
          hiddenImages[randomHiddenIndex].visible = true;
        }

        return newImageInfo;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[100vh] bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83 relative flex flex-col items-center justify-center z-[4]">
      <div className="flex gap-[0px] w-full items-center z-[3]">
        <div className="pl-[100px] w-[45%]">
          <h1 className="text-[51px] text-white">Our Team</h1>
          <p className="text-[#9EB3CF] w-[80%] text-[19px] font-light mt-[30px]">
          Our team consists of seasoned professionals with extensive research backgrounds, authors of influential papers, and contributors to open-source initiatives. Carefully selected from top universities, with a premium placed on innovative problem solvers.

          </p>
          <button className="rounded-[28px] mt-[50px] flex items-center gap-[7px] bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] text-white p-[15px] text-lg">
            Get Started
            <Image
              className="inline"
              src="/arrowRight.svg"
              alt="arrow"
              width="16"
              height="13"
            />
          </button>
        </div>
        <div className="columns__col mod--team is-2 w-[55%] h-full pr-[127px]">
          <div className="team_grid flex flex-wrap justify-end">
            {imageInfo.map((info, index) => (
              <div key={info.src} className="team__grid-block p-4">
                <div
                  className={`team_circle rounded-full w-[7.5rem] h-[7.5rem] transition-all duration-300 relative overflow-hidden ease-cubic-bezier ${
                    info.visible ? "border-0" : "border border-[#ffffffcc]"
                  }`}
                >
                  <Image
                    className={`transform-style-preserve-3d w-full transition-opacity duration-1000  ease-cubic-bezier ${
                      info.visible ? "" : "opacity-0"
                    }`}
                    src={info.src}
                    width="120"
                    height="120"
                    alt="team"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
