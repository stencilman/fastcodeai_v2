import Image from "next/image";
import React from "react";

const QualitieCulture = () => {
  const qualitiesList = [
    { img: "/career/qualitiesIcons/icon1.svg", name: "Intelligence" },
    { img: "/career/qualitiesIcons/icon2.svg", name: "Curiosity" },
    { img: "/career/qualitiesIcons/icon3.svg", name: "Experience" },
    { img: "/career/qualitiesIcons/icon4.svg", name: "Excellence" },
    { img: "/career/qualitiesIcons/icon5.svg", name: "Integrity" },
  ];

  return (
    <div className="w-full pt-[75px] px-[20px] md:px-[50px] lg:px-[100px] bg-[#00081F] flex flex-col items-center justify-center  gap-[120px] mb-[120px]">
      {/* gradient */}
      {/* <div
        className="absolute top-[-63px] w-[120%]  h-[110px]"
        style={{
          background: "#00081f 0% 0% no-repeat padding-box",
          opacity: " 1",
          filter: "blur(23px)",
        }}
      ></div> */}
      {/* Qualities */}
      <div>
        <div className="text-center flex flex-col items-center justify-center mt-[30px] mb-[40px] md:mb-[60px]">
          <h1 className="text-white text-[8vw] leading-[8vw] md:text-[7vw] lg:text-5xl font-aeonik tracking-normal mb-[20px]">
            Key Qualities We Look for When Hiring
          </h1>
          <p className="text-[#9EB3CF] text-base lg:text-lg font-bwmss01 w-[80%] md:w-[60%]">
            We value hard work, dedication, and a passion for providing
            technical and reliable solutions to our clients.
          </p>
        </div>
        <div className="flex gap-[19px] md:gap-[30px] flex-wrap justify-center ">
          {qualitiesList.map((e, i) => (
            <div
              key={i}
              className=" rounded-[18px] flex items-center min-w-[250px] md:min-w-[300px] gap-[15px] p-[10px] md:p-[15px] border border-[#1A2758]"
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
                  src={e.img}
                  height="50"
                  width="90"
                  className="w-[30px] md:w-[50px] sm:h-[50px]"
                />
              </div>
              <div>
                <b className="text-white text-xl md:text-2xl pb-[7px] font-aeonik">
                  {e.name}
                </b>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Culture */}
      <h1 className="text-white lg:hidden text-[8vw] md:text-[7vw] lg:text-5xl font-aeonik tracking-normal  w-full">
        Our Culture
      </h1>
      <div className="w-full flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-[50%]">
          <h1 className="text-white hidden lg:block text-[8vw] md:text-[7vw] lg:text-5xl font-aeonik tracking-wide mb-[60px]">
            Our Culture
          </h1>
          <div className="flex flex-col gap-[38px]">
            <div className="flex gap-[25px]  pt-[5px] md:pt-0 items-start md:items-center">
              <div>
                <Image
                  className="w-[200px] sm:w-[120px] md:w-[120px] lg:w-[200px]"
                  src="/career/culture/icon1.svg"
                  height="93"
                  width="200"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-white text-2xl md:text-3xl font-aeonik tracking-wide">
                  Collaborative Environment
                </h3>
                <p className="text-[#9EB3CF] text-base mt-[5px] md:text-lg font-bwmss01">
                  Join a team that values collaboration, where every voice is
                  heard and respected, fostering innovation and collective
                  success.
                </p>
              </div>
            </div>
            <div className="flex gap-[25px]  pt-[5px] md:pt-0 items-start md:items-center">
              <div>
                <Image
                  className="w-[184px] sm:w-[112px] md:w-[110px] lg:w-[176px]"
                  src="/career/culture/icon2.svg"
                  height="93"
                  width="200"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-white text-2xl md:text-3xl font-aeonik tracking-wide">
                  Continuous Learning
                </h3>
                <p className="text-[#9EB3CF] text-base mt-[5px] md:text-lg font-bwmss01">
                  Embrace a culture of continuous learning and growth, with
                  opportunities to expand your skills and knowledge
                </p>
              </div>
            </div>
            <div className="flex gap-[25px]  pt-[5px] md:pt-0 items-start md:items-center">
              <div>
                <Image
                  className="w-[260px] sm:w-[165px] md:w-[155px] lg:w-[252px]"
                  src="/career/culture/icon3.svg"
                  height="93"
                  width="200"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-white text-2xl md:text-3xl font-aeonik tracking-wide">
                  Diverse and Inclusive
                </h3>
                <p className="text-[#9EB3CF] text-base mt-[5px] md:text-lg font-bwmss01">
                  Be part of a diverse and inclusive workplace that celebrates
                  differences, encourages creativity and embraces the unique
                  perspectives of all team members.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%] relative top-[-70px] left-[-11vw] md:left-[5vw] lg:left-0">
          <Image
            src="/career/culture/img1-2.png"
            height="822"
            width="662"
            alt=""
          />
        </div>
      </div>
      {/* gradient */}
      {/* <div
        className="absolute bottom-[-153px] w-[100%] h-[110px]"
        style={{
          background: "#00081f 0% 0% no-repeat padding-box",
          opacity: " 1",
          filter: "blur(23px)",
        }}
      ></div> */}
    </div>
  );
};

export default QualitieCulture;
