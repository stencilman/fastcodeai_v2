"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Members = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -450]);

  const md = useTransform(scrollYProgress, [0, 1], [0, -750]);

  const lg = useTransform(scrollYProgress, [0, 1], [0, -1850]);

  const memebersList = [
    {
      name: "DR. ARJUN JAIN",
      role: "CEO & Chief Scientist",
      position: "top-[0px]",
      bg: "bg-arjun",
      y: 0,
      cp: "SENIOR RESEARCH SCIENTIST",
      desciption:
        "B.Tech (CS) IIT Kanpur, Ex-Senior Software Engineer at Samsung R&D Fast Code AI was founded in 2020. Since then, we have been making significant strides in the field of AI and machine learning, particularly in the domain of computer vision. Our team of experts is dedicated to pushing the boundaries of what’s possible in this exciting field.",
      linkedin:
        "https://in.linkedin.com/in/arjunjain",
    },
    {
      name: "PRABAL PATEL",
      role: "Head of Sales and Business Development",
      position: "top-[-150px] left-[680px]",
      bg: "bg-prabal",
      y: lg,
      cp: "Head of Sales and Business Development",
      desciption:
        "MBA from Indiana University. 15 years of techology services experience, delivering managed teams and projects for large clients in US and India.",
      linkedin:
        "https://in.linkedin.com/",
    },
    {
      name: "ABDUL MUQTADIR",
      role: "Software Engineer",
      position: "top-[150px] left-[250px]",
      bg: "bg-abdul",
      y: lg,
      cp: "Software Engineer",
      desciption:
        "B.Tech JNTUH, Ex-Software Developer at Full Stack Academy",
      linkedin:
        "https://www.linkedin.com/in/abdul-m-699ab9256/",
    },
    {
      name: "PARTH BASOLE",
      role: "Generalist Engineer",
      position: "top-[50px] left-[0px]",
      bg: "bg-parth",
      y: md,
      cp: "AI Tech Creator",
      desciption:
        "B.Tech (IN) VIT Pune, Ex-Software Developer at InsaneAI",
      linkedin:
        "https://in.linkedin.com/in/parth-basole-22844115a",
    },
    {
      name: "Easwar",
      role: "IOS Developer",
      position: "top-[-400px] left-[450px]",
      bg: "bg-eshwar",
      y: 0,
      cp: "Lead Mobile Engineer",
      desciption:
        "MBA Ex-IOS Lead developer at Simplilearn. Ex- Software engineer at Medlife, Hiver, ICT Health",
      linkedin:
        "https://in.linkedin.com/in/eshwar-ramesh-831303ab",
    },
    {
      name: "SANJAY SURIYAKUMAR",
      role: "Research Scientist",
      position: "top-[-800px] left-[890px]",
      bg: "bg-sanjay",
      y: lg,
      cp: "Research Scientist",
      desciption:
        "BS (Research) at IISc Bangalore, Ex-undergraduate researcher at Helmholtz Labs, Germany",
      linkedin:
        "https://www.linkedin.com/in/sanjay-suriyakumar-a51aa821b/",
    },
    {
      name: "GAUTAM ADITHYA RAVI",
      role: "Head of Engineering",
      position: "top-[-600px] left-[90px]",
      bg: "bg-gautham",
      y: md,
      cp: "Computer Science Engineering & Research",
      desciption:
        "MSc (CS) Saarland University, Ex-researcher at MPI for informatics, Ex-analyst at Cognizant tech solutions",
      linkedin:
        "https://in.linkedin.com/in/gautham-adithya-ravi-8b803341",
    },
  ];
  return (
    <div className="w-full  px-[100px] py-[250px]  bg-[#00081F]">
      {memebersList.map(
        ({ bg, position, name, role, y, cp, desciption, linkedin }, i) => (
          <motion.div
            style={{ y }}
            key={i}
            className={`w-[400px] h-[598px] rounded-[20px]  relative ${position} cursor-pointer group  perspective`}
          >
            <div
              className={`relative preserve-3d group-hover:my-rotate-y-180 w-full h-full  duration-1000  `}
            >
              <div
                className={`absolute backface-hidden ${bg} bg-cover bg-no-repeat rounded-[20px] flex items-end w-full h-full px-[16px] py-[32px]`}
              >
                <div className="flex flex-col gap-[20px]">
                  <h1 className="text-white text-[51px] leading-[52px] font-aeonik font-light tracking-wide">
                    {name}
                  </h1>
                  <p className="text-[#9EB3CF] font-aeonik text-2xl font-light">
                    {role}
                  </p>
                </div>
              </div>
              <div
                className="absolute my-rotate-y-180 backface-hidden w-full h-full justify-around rounded-[20px] border border-[#1A2758] px-[30px] flex flex-col  gap-[40px]"
                style={{
                  background:
                    "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
                }}
              >
                <div>
                  <h3 className="text-white text-3xl font-aeonik tracking-normal uppercase">
                    {cp}
                  </h3>
                  <p className="text-[#9EB3CF] text-lg font-bwmss01 pt-[15px]">
                    {desciption}
                  </p>
                </div>
                <div className="flex justify-between mt-[20px]">
                  <Link href={linkedin} target="_blank">
                    <Image
                      width="30"
                      height="30"
                      src="/linkedinIcon.svg"
                      alt=""
                    />
                  </Link>
                  <Link href={linkedin} target="_blank">
                    <Image
                      width="35"
                      height="16"
                      src="/arrowRight.svg"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )
      )}
    </div>
  );
};

export default Members;
