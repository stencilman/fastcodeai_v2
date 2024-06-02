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
      position: "top-[-48px] md:top-[0px]",
      bg: "bg-arjun",
      y: 0,
      cp: "SENIOR RESEARCH SCIENTIST",
      desciption:
        "B.Tech (CS) IIT Kanpur, Ex-Senior Software Engineer at Samsung R&D Fast Code AI was founded in 2020. Since then, we have been making significant strides in the field of AI and machine learning, particularly in the domain of computer vision. Our team of experts is dedicated to pushing the boundaries of what’s possible in this exciting field.",
      linkedin: "https://in.linkedin.com/in/arjunjain",
    },
    {
      name: "ABDUL MUQTADIR",
      role: "Software Engineer",
      position:
        "top-[300px] sm:left-[27vw] lg:top-[300px] lg:left-[250px]",
      bg: "bg-abdul",
      y: lg,
      cp: "Software Engineer",
      desciption: "B.Tech JNTUH, Ex-Software Developer at Full Stack Academy",
      linkedin: "https://www.linkedin.com/in/abdul-m-699ab9256/",
    },
    {
      name: "Dhaval Taunk",
      role: "Research Scientist",
      position: "top-[320px] sm:left-[-137px] md:left-[16px] lg:left-[47vw]",
      bg: "bg-dhaval",
      y: lg,
      cp: "Research Scientist",
      desciption:
        "MS (CS) IIIT Hyderabad, Ex-data scientist at Yes Bank and Jio Haptik Technologies",
      linkedin: "https://www.linkedin.com/in/dhavaltaunk08/",
    },
    {
      name: "Easwar",
      role: "IOS Developer",
      position:
        "top-[0px] lg:top-[0px] md:left-[2vw] sm:left-[20vw] lg:left-[23vw]",
      bg: "bg-eshwar",
      y: 0,
      cp: "Lead Mobile Engineer",
      desciption:
        "MBA Ex-IOS Lead developer at Simplilearn. Ex- Software engineer at Medlife, Hiver, ICT Health",
      linkedin: "https://in.linkedin.com/in/eshwar-ramesh-831303ab",
    },
    {
      name: "GAUTAM ADITHYA RAVI",
      role: "Head of Engineering",
      position:
        "top-[240px] left-[0px] sm:left-[3vw] md:left-[35vw] lg:top-[250px] lg:left-[5vw]",
      bg: "bg-gautham",
      y: md,
      cp: "Computer Science Engineering & Research",
      desciption:
        "MSc (CS) Saarland University, Ex-researcher at MPI for informatics, Ex-analyst at Cognizant tech solutions",
      linkedin: "https://in.linkedin.com/in/gautham-adithya-ravi-8b803341",
    },
    {
      name: "Narendiran Chembu",
      role: "Senior ML engineer ",
      position:
        "top-[50px] lg:top-[80px] sm:left-[-137px] md:left-[375px] lg:left-[450px]",
      bg: "bg-naren",
      y: 0,
      cp: "Senior Machine learning Enginner",
      desciption:
        "B.Tech IIT Madras, MS (Artificial Intelligence) University of Amsterdam. Ex-ML Enginner at minds.ai",
      linkedin: "https://www.linkedin.com/in/cgnarendiran/",
    },
    {
      name: "PRABAL PATEL",
      role: "Head of Sales and Business Development",
      position:
        "top-[660px]   sm:left-[122px] md:left-[16vw] lg:left-[0px] lg:top-[850px]",
      bg: "bg-prabal",
      y: lg,
      cp: "Head of Sales and Business Development",
      desciption:
        "MBA from Indiana University. 15 years of techology services experience, delivering managed teams and projects for large clients in US and India.",
      linkedin: "https://in.linkedin.com/",
    },
    {
      name: "PARTH BASOLE",
      role: "Generalist Engineer",
      position:
        "top-[320px] left-[0px] sm:left-[] lg:top-[380px]  lg:left-[35vw]",
      bg: "bg-parth",
      y: md,
      cp: "AI Tech Creator",
      desciption: "B.Tech (IN) VIT Pune, Ex-Software Developer at InsaneAI",
      linkedin: "https://in.linkedin.com/in/parth-basole-22844115a",
    },
    {
      name: "Rishabh Gupta",
      role: "Machine Learning Engineer",
      position: "top-[830px]  sm:left-[40vw] lg:top-[950px] lg:left[50vw]",
      bg: "bg-rishabh",
      y: lg,
      cp: "Machine Learning Engineer",
      desciption: "",
      linkedin: "https://www.linkedin.com/in/rishabh-gupta-a5886712a/",
    },

    {
      name: "SANJAY SURIYAKUMAR",
      role: "Research Scientist",
      position: "top-[870px] left-[0px] sm:top-[950px]",
      bg: "bg-sanjay",
      y: lg,
      cp: "Research Scientist",
      desciption:
        "BS (Research) at IISc Bangalore, Ex-undergraduate researcher at Helmholtz Labs, Germany",
      linkedin: "https://www.linkedin.com/in/sanjay-suriyakumar-a51aa821b/",
    },
    {
      name: "Shreyas Bhanderi",
      role: "Senior Research Scientist",
      position: "top-[900px] sm:top-[970px] sm:left-[20vw] lg:top-[1000px]",
      bg: "bg-shreyas",
      y: lg,
      cp: "Senior Research Scientist",
      desciption: "B.Tech (IT) DAIICT, Ex-Senior Software Enginner at Nagarro",
      linkedin: "https://www.linkedin.com/in/shreyas-bhanderi/",
    },
    {
      name: "Sughosh Patil",
      role: "Senior Research Scientist",
      position: "top-[950px] sm:top-[1050px] sm:left-[43vw] lg:top-[1100px]",
      bg: "bg-sughosh",
      y: lg,
      cp: "Senior Research Scientist",
      desciption:
        "B.Tech (CS) IIT Kanpur, Ex-Senior Software Enginner at Samsung R&D",
      linkedin: "https://www.linkedin.com/in/shreyas-bhanderi/",
    },

    {
      name: "Tirth Pandit",
      role: "Senior Research Scientist",
      position: "top-[1000px] left-[0px] lg:top-[1200px]",
      bg: "bg-tirth",
      y: lg,
      cp: "Senior Research Scientist",
      desciption:
        "M.Tech (CS) IIIT Hyderabad, Ex-researcher at Qualcomm R&D labs",
      linkedin: "https://www.linkedin.com/in/tirth-pandit/",
    },
  ];
  return (
    <div className="w-full overflow-hidden px-[20px] pl-[20px] md:pl-[50px] lg:pl-[100px] py-[50px] md:py-[70px] lg:py-[150px]  bg-[#00081F] flex flex-col justify-center items-center md:block ">
      {memebersList.map(
        ({ bg, position, name, role, y, cp, desciption, linkedin }, i) => (
          <motion.div
            style={{ y }}
            key={i}
            className={`w-[270px] md:w-[370px] lg:w-[400px]  h-[408px] md:h-[490px] lg:h-[598px] rounded-[20px]  relative ${position} cursor-pointer group  perspective`}
          >
            <div
              className={`relative preserve-3d group-hover:my-rotate-y-180 w-full h-full  duration-1000  `}
            >
              <div
                className={`absolute backface-hidden ${bg} bg-cover bg-no-repeat rounded-[20px] flex items-end w-full h-full px-[16px] py-[32px]`}
              >
                <div className="flex flex-col md:gap-[20px]">
                  <h1 className="text-white text-[7vw] md:text-[6vw] lg:text-[51px] leading-[52px] font-aeonik font-light tracking-wide">
                    {name}
                  </h1>
                  <p className="text-[#9EB3CF] font-aeonik text:lg md:text-xl lg:text-2xl font-light">
                    {role}
                  </p>
                </div>
              </div>
              <div
                className="absolute my-rotate-y-180 backface-hidden w-full  justify-around rounded-[20px] border border-[#1A2758] md:px-[30px] py-[10px] px-[10px] md:py-[20px] flex flex-col  gap-[40px] h-auto min-h-[408px] md:min-h-[490px] lg:min-h-[598px]"
                style={{
                  background:
                    "transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
                }}
              >
                <div>
                  <h3 className="text-white text-[2xl] md:text-3xl font-aeonik tracking-normal uppercase">
                    {cp}
                  </h3>
                  <p className="text-[#9EB3CF] text-lg  font-bwmss01 pt-[15px]">
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
