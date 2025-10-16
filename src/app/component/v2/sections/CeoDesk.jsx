import React from "react";
import CeoDeskSlide from "../components/CeoDeskSlide";
import Link from "next/link";
import Image from "next/image";
import { LinkedInIcon } from "../components/icons";

const CeoDesk = () => {
  return (
    <div className="w-full">
      <div className="w-full h-full flex flex-col justify-center">
        <h1 className="text-[8vw] md:text-[7vw] tracking-normal lg:text-[51px] text-white font-aeonik w-full text-center ">
          Trusted by Industry Leaders
        </h1>
      </div>
      <CeoDeskSlide />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <Link
          target="_blank"
          href={"https://www.linkedin.com/in/arjunjain/"}
          className={`relative rounded-full z-[1] flex items-center gap-[7px] px-[25px] py-[10px] text-lg justify-between main_cta_button bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] cursor-pointer text-white`}
        >
          <div className={``}>Connect With Dr.Arjun</div>
          <div className="flex items-center justify-center relative">
            <>
              <LinkedInIcon />
            </>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CeoDesk;
