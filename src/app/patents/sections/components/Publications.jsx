import Button from "@/app/component/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Publications = () => {
  const publicationList = [
    {
      img: "publication1.webp",
      technology: "TECHNOLOGY",
      year: "2011",
      desciption:
        "N. Doiphode, R. Mitra, S. Ahmed, A. Jain, “An Improved Learning Framework for Covariant Local Feature Detection” in proceedings of Asian Conference on Computer Vision (ACCV 2018), Perth, December 2018",
      linkName: "Link",
      linkTo: "/",
      downloadName: "Download PDF",
      downloadTo: "/",
    },
    {
      img: "publication2.webp",
      technology: "TECHNOLOGY",
      year: "2016",
      desciption:
        "A. Elhayek, E. Aguiar, A. Jain, J. Tompson, L. Pishchulin, M. Andriluka, C. Bregler, B. Schiele and C.Theobalt, “MARCOnI – ConvNet-based MARker-less Motion Capture in Outdoor and Indoor Scenes” in IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI 2016), 2016.",
      linkName: "View Source",
      linkTo: "/",
      downloadName: "Download PDF",
      downloadTo: "/",
    },
    {
      img: "publication3.webp",
      technology: "TECHNOLOGY",
      year: "2014",
      desciption:
        "A. Jain, J. Tompson, Y. LeCun, C. Bregler, “Modeep: A Deep Learning Framework Using Motion Features for Human Pose Estimation” in proceedings of Asian Conference on Computer Vision (ACCV 2014), Singapore, November 2014.",
      linkName: "Data",
      linkTo: "/",
      downloadName: "Download PDF",
      downloadTo: "/",
    },
  ];
  return (
    <div className="h-auto w-full flex flex-col gap-[70px] items-center">
      {/* catagories */}
      {/* <div className="flex gap-[15px] md:gap-[35px] items-center justify-center flex-wrap">
        <div className="border border-[#082373] rounded-[30px] bg-[#00081F] px-[21px] py-[10px] text-lg font-bwmss01 text-white">
          Category 1
        </div>
        <div className="border border-[#082373] rounded-[30px] bg-[#00081F] px-[21px] py-[10px] text-lg font-bwmss01 text-white">
          Category 2
        </div>
        <div className="border border-[#082373] rounded-[30px] bg-[#00081F] px-[21px] py-[10px] text-lg font-bwmss01 text-white">
          Category 3
        </div>
        <div className="border border-[#082373] rounded-[30px] bg-[#00081F] px-[21px] py-[10px] text-lg font-bwmss01 text-white">
          Category 4
        </div>
        <div className="border border-[#082373] rounded-[30px] bg-[#00081F] px-[21px] py-[10px] text-lg font-bwmss01 text-white">
          Category 5
        </div>
      </div> */}
      {/* details */}
      {publicationList.map((e, i) => (
        <div
          key={i}
          className="w-full px-[20px] md:px-[50px] lg:px-[100px] flex-col gap-[60px]"
        >
          <div
            className="flex flex-col md:flex-row gap-[30px] md:gap-[5%] rounded-[18px] border border-[#1A2758] w-full h-auto p-[20px] md:px-[60px] md:py-[40px]"
            style={{
              background:
                "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
            }}
          >
            <div className="w-full md:w-[40%]">
              <Image
                className="rounded-[18px] w-full md:w-[370px]"
                src={`/patents/publications/${e.img}`}
                height="370"
                width="370"
                alt=""
              />
            </div>
            <div className="w-full md:w-[55%] flex flex-col gap-[20px]">
              {/* head */}
              <div className="flex gap-[20px] flex-wrap">
                <div className="border border-[#082373] rounded-[30px] bg-[#00081F] px-[21px] py-[10px] text-lg font-bwmss01 text-white">
                  {e.technology}
                </div>
                <div className="border border-[#082373] rounded-[30px] bg-[#00081F] px-[21px] py-[10px] text-lg font-bwmss01 text-white">
                  {e.year}
                </div>
              </div>
              {/* body */}
              <div>
                <h5 className="text-white font-aeonik font-light tracking-normal text-[30px]">
                  {e.desciption}
                </h5>
              </div>
              {/* footer */}
              <div className="flex gap-[20px] items-center flex-wrap">
                <Link href={e.linkTo}>
                  <div
                    className="border border-[#F3F3F3] p-[12px] cursor-pointer text-white rounded-full font-bwmss01 font-light min-h-[55px] pt-[17px] min-w-[120px] text-center"
                    style={{
                      background:
                        "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
                    }}
                  >
                    {e.linkName}
                  </div>
                </Link>
                <Button to={e.downloadTo} name={e.downloadName} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Publications;
