"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ArjunAndTeam = () => {
  const [imageInfo, setImageInfo] = useState([]);

  useEffect(() => {
    // Simulate fetching image data
    const fetchedImages = [
      "/team/Arjun_Jain.webp",
      "/team/abdul.png",
      "/team/darshan.webp",
      "/team/Dhaval.webp",
      "/team/eshwar.webp",
      "/team/gautam.webp",
      "/team/Jadhav.webp",
      "/team/Nanda.webp",
      "/team/parth-bw.webp",
      "/team/Prabal.webp",
      "/team/Sanjay.webp",
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
    <div className="w-full h-[160vh] bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83 pr-[127px] pl-[100px] relative z-[5]">
      <div className="w-full h-[80vh]  border-b border-[#FFFFFF] relative flex items-center gap-[10%] justify-center">
        <div className=" h-full w-[70%] flex flex-col justify-center gap-[26px]">
          <h1 className="font-aeonik text-[5.5vw] text-white leading-[5.5vw] tracking-wide font-light">
            Powerfull People <br />
            make places powerful
          </h1>
          <p className="text-[1.5vw] leading-[2vw] font-bwmss01 text-[#9EB3CF]">
            Dr. Arjun is a prominent machine learning industry leader dedicated
            to unparalleled vision of broadening Al Adoption across diverse
            domains to realize the full potential of the technology.
          </p>
          <div className="flex items-center gap-[40px] mt-[30px]">
            <div className="flex gap-[13px] items-center">
              <div className="border-[#1A2758] border rounded-full bg-[#13224F] w-[70px] h-[70px] flex items-center justify-center">
                <Image
                  src="/about/about_arjun/icon1.svg"
                  width="30"
                  height="46"
                  alt=""
                />
              </div>
              <p className="text-[1.5vw] leading-[2vw] font-bwmss01 text-[#9EB3CF]">
                5 Patents
              </p>
            </div>
            <div className="flex gap-[13px] items-center">
              <div className="border-[#1A2758] border rounded-full bg-[#13224F] w-[70px] h-[70px] flex items-center justify-center">
                <Image
                  src="/about/about_arjun/icon2.svg"
                  width="40"
                  height="39"
                  alt=""
                />
              </div>
              <p className="text-[1.5vw] leading-[2vw] font-bwmss01 text-[#9EB3CF]">
                Former Adjunct <br /> Professor, IIT Bombay
              </p>
            </div>
            <div className="flex gap-[13px] items-center">
              <Image
                src="/about/about_arjun/icon3.png"
                width="71"
                height="71"
                alt=""
              />
              <p className="text-[1.5vw] leading-[2vw] font-bwmss01 text-[#9EB3CF]">
                Adjunct Faculty,
                <br /> IISC Bangalore
              </p>
            </div>
          </div>
        </div>
        <div className=" h-full w-[20%] relative">
          <div className="relative w-full h-[60%] top-[-40px] ">
            <div>
              <Image
                src="/about/about_arjun/Arjun2.png"
                width="291"
                height="301"
                alt=""
              />
            </div>
            <p className="text-[1.6vw] text-center mt-[60px] font-light leading-[2vw] font-aeonik text-[#ffffff]">
              Dr. Arjun Jain <br /> Chief Scientist
            </p>
          </div>
          <div className="w-full mt-[58px]  flex justify-center ">
            <Link href="https://arjunjain.co.in/" target="_blank" className="rounded-[28px] relative z-[1] flex items-center gap-[7px] bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] text-white p-[15px] text-lg ">
              <div>Personal Website</div>
              <div>
                <Image
                  className="inline "
                  src="/arrowRight.svg"
                  alt="arrow"
                  width="16"
                  height="13"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* team */}
      <div className="w-full h-[80vh] relative flex flex-col items-center justify-center z-[4]">
        <div className="flex gap-[0px] w-full items-center z-[3]">
          <div className=" w-[45%]">
            <h1 className="text-[51px] text-white font-aeonik">Our Team</h1>
            <p className="text-[#9EB3CF] w-[80%] text-[19px] font-bwmss01 font-light mt-[30px]">
              Our team consists of seasoned professionals with extensive
              research backgrounds, authors of influential papers, and
              contributors to open-source initiatives. Carefully selected from
              top universities, with a premium placed on innovative problem
              solvers.
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
          <div className="columns__col mod--team is-2 w-[55%] h-full ">
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
    </div>
  );
};

export default ArjunAndTeam;