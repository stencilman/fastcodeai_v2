"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@/app/utils/useMediaQuery";

const Members = () => {
  const container = useRef(null);

  const isSmall = useMediaQuery("(min-width: 640px)");
  console.log("isSmall", isSmall);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const sm = 0;
  //  = useTransform(scrollYProgress, [0, 1], [0, -450]);

  const md = useTransform(scrollYProgress, [0, 1], [0, -750]);

  const lg = useTransform(scrollYProgress, [0, 1], [0, -950]);
  const xl = useTransform(scrollYProgress, [0, 1], [0, -1350]);
  const xxl = useTransform(scrollYProgress, [0, 1], [0, -2650]);

  const memebersList = [
    {
      position: "lg:left-[-6vw] xl:left-0",
      y: sm,
      height: "h-[540px] md:h-[490px] lg:h-[598px]",
      backHeight:"min-h-[510px]",
      name: "DR. ARJUN JAIN",
      role: "Founder & Chief Scientist",
      bg: "bg-arjun",
      cp: "Founder & Chief Scientist",
      desciption:
        "PhD  in Computer Graphics from The MPI for Informatics, Post-doc from Courant Institute, NYU, Ex Research Scientist at Apple, Ex Adjunct Assistant Professor at CSE Dept., IIT Bombay, Adjunct Faculty at the CDS Dept., IISc Bangalore, Founder of FastCode AI.",
      linkedin: "https://in.linkedin.com/in/arjunjain",
    },
    {
      position:
        " sm:top-[-230px] sm:left-[47vw] lg:top-[-70px] lg:left-[26vw] xl:left-[29vw]",
      y: md,
      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight:"min-h-[440px]",
      name: "GAUTAM ADITHYA RAVI",
      role: "Head of Engineering",
      bg: "bg-gautham",
      cp: "Computer Science Engineering & Research",
      desciption:
        "MSc (CS) Saarland University, Ex-researcher at MPI for informatics, Ex-analyst at Cognizant tech solutions",
      linkedin: "https://in.linkedin.com/in/gautham-adithya-ravi-8b803341",
    },
    {
      position:
        " sm:left-[0px] sm:top-[-330px]  lg:top-[-1040px] lg:left-[58vw]",
      y: sm,
      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight:"min-h-[440px]",
      name: "PARTH BASOLE",
      role: "Generalist Engineer",
      bg: "bg-parth",
      cp: "AI Tech Creator",
      desciption: "B.Tech (IN) VIT Pune, Ex-Software Developer at InsaneAI",
      linkedin: "https://in.linkedin.com/in/parth-basole-22844115a",
    },
    {
      position:
        " sm:top-[58px] sm:left-[47vw]   lg:top-[-302px] lg:left-[40vw]",
      y: xl,
      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight:"min-h-[440px]",
      name: "Shreyas Bhanderi",
      role: "Senior Research Scientist",
      bg: "bg-shreyas",
      cp: "Senior Research Scientist",
      desciption: "B.Tech (IT) DAIICT, Ex-Senior Software Enginner at Nagarro",
      linkedin: "https://www.linkedin.com/in/shreyas-bhanderi/",
    },
    {
      position: " sm:top-[-182px] sm:left-[0px]  lg:top-[-800px] lg:left-[6vw] xl:left-[10vw]",
      y: lg,
      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight:"min-h-[440px]",
      name: "Narendiran Chembu",
      role: "Senior ML engineer ",
      bg: "bg-naren",
      cp: "Senior Machine learning Enginner",
      desciption:
        "B.Tech IIT Madras, MS (Artificial Intelligence) University of Amsterdam. Ex-ML Enginner at minds.ai",
      linkedin: "https://www.linkedin.com/in/cgnarendiran/",
    },

    {
      position:
        "sm:top-[37px]  sm:left-[0px]   lg:top-[-600px] lg:left-[58vw]",
      y: xl,
      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight:"min-h-[440px]",
      name: "Rishabh Gupta",
      role: "Machine Learning Engineer",
      bg: "bg-rishabh",
      cp: "Machine Learning Engineer",
      desciption: "MTech AI from IISc, MBA in Technology Management with Major in Finance (and CFA Level 1 cleared) from NMIMS,Ex Data Scientist at Couture.ai",
      linkedin: "https://www.linkedin.com/in/rishabh-gupta-a5886712a/",
    },
    {
      position: "sm:top-[500px] sm:left-[47vw]  lg:left-[-6vw] xl:left-0 lg:top-[-500px]",
      y: xxl,
      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight:"min-h-[440px]",
      name: "ABDUL MUQTADIR",
      role: "Software Engineer",
      bg: "bg-abdul",
      cp: "Software Engineer",
      desciption: "B.Tech JNTUH, Ex-Software Developer at Full Stack Academy",
      linkedin: "https://www.linkedin.com/in/abdul-m-699ab9256/",
    },
    {
      position: "sm:top-[-250px] sm:left-[0px]  lg:top-[-1410px] lg:left-[26vw] xl:left-[29vw]",
      y: xl,
      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight:"min-h-[440px]",
      name: "Tirth Pandit",
      role: "Senior Research Scientist",
      bg: "bg-tirth",
      cp: "Senior Research Scientist",
      desciption:
        "M.Tech (CS) IIIT Hyderabad, Ex-researcher at Qualcomm R&D labs",
      linkedin: "https://www.linkedin.com/in/tirth-pandit/",
    },

    {
      position: "sm:top-[400px] sm:left-[47vw] lg:top-[-600px] lg:left-[58vw]",
      y: xxl,
      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight:"min-h-[440px]",
      name: "PRABAL PATEL",
      role: "Head of Sales and Business Development",
      bg: "bg-prabal",
      cp: "Head of Sales and Business Development",
      desciption:
        "MBA from Indiana University. 15 years of techology services experience, delivering managed teams and projects for large clients in US and India.",
      linkedin: "https://www.linkedin.com/in/prabalpatel211/",
    },
    {
      position:
        "  sm:top-[-290px] sm:left-[23vw] lg:top-[-1800px] lg:left-[26vw] xl:left-[29vw]",
      y: xl,
      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight:"min-h-[440px]",
      name: "Sughosh Patil",
      role: "Senior Research Scientist",
      bg: "bg-sughosh",
      cp: "Senior Research Scientist",
      desciption:
        "B.Tech (CS) IIT Kanpur, Ex-Senior Software Enginner at Samsung R&D",
      linkedin: "https://www.linkedin.com/in/sughoshpatil/",
    },

    {
      position:
        " sm:top-[-220px] sm:left-[0px] lg:top-[-2284px] lg:left-[-6vw] xl:left-0",
      y: xl,
      height: "h-[530px] md:h-[490px] lg:h-[598px]",
      backHeight:"min-h-[440px]",
      name: "Eshwar Ramesh",
      role: "IOS Developer",
      bg: "bg-eshwar",
      cp: "Lead Mobile Engineer",
      desciption:
        "MBA Ex-IOS Lead developer at Simplilearn. Ex- Software engineer at Medlife, Hiver, ICT Health",
      linkedin: "https://in.linkedin.com/in/eshwar-ramesh-831303ab",
    },
    {
      position:
        " sm:top-[500px] sm:left-[47vw] lg:top-[-1408px] lg:left-[40vw] ",
      y: xxl,
      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight:"min-h-[440px]",
      name: "SANJAY SURIYAKUMAR",
      role: "Research Scientist",
      bg: "bg-sanjay",
      cp: "Research Scientist",
      desciption:
        "BS (Research) at IISc Bangalore, Ex-undergraduate researcher at Helmholtz Labs, Germany",
      linkedin: "https://www.linkedin.com/in/sanjay-suriyakumar-a51aa821b/",
    },
    {
      position: "sm:left-[0px] sm:top-[-947px]  lg:top-[-3000px] lg:left-[6vw] xl:left-[10vw]",
      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight:"min-h-[440px]",
      y: md,
      name: "Dhaval Taunk",
      role: "Research Scientist",
      bg: "bg-dhaval",
      cp: "Research Scientist",
      desciption:
        "MS (CS) IIIT Hyderabad, Ex-data scientist at Yes Bank and Jio Haptik Technologies",
      linkedin: "https://www.linkedin.com/in/dhavaltaunk08/",
    },
  ];
  return (
    <div className="w-full overflow-hidden px-[20px] pl-[20px] md:pl-[50px] lg:pl-[100px] py-[50px] md:py-[70px] lg:py-[150px]  bg-[#00081F] flex flex-col justify-center gap-[50px] items-center sm:block sm:relative sm:h-[4500px] md:h-[5000px] lg:h-[4480px] ">
      {memebersList.map(
        (
          { bg, position, name, role, y, cp, desciption, linkedin, height,backHeight },
          i
        ) => (
          <motion.div
            style={isSmall ? { y } : ""}
            key={i}
            className={`w-[270px] sm:w-[300px] md:w-[370px] lg:w-[320px] xl:w-[370px]  rounded-[20px] ${height}  sm:relative ${position} cursor-pointer group  perspective`}
          >
            <div
              className={`relative preserve-3d group-hover:my-rotate-y-180 w-full h-full  duration-1000  `}
            >
              <div
                className={`absolute backface-hidden ${bg} bg-cover bg-no-repeat rounded-[20px] flex items-end w-full h-full px-[16px] py-[32px]`}
              >
                <div className="flex flex-col md:gap-[20px]">
                  <h1 className="text-white text-[7vw] sm:text-[5vw] sm:leading-[5.5vw] lg:text-[51px] leading-[52px] lg:leading-[48px] font-aeonik font-light tracking-wide">
                    {name}
                  </h1>
                  <p className="text-[#9EB3CF] font-aeonik text:lg md:text-xl lg:text-2xl font-light">
                    {role}
                  </p>
                </div>
              </div>
              <div
                className={`absolute my-rotate-y-180 backface-hidden w-full  justify-around rounded-[20px] border border-[#1A2758] md:px-[30px] py-[10px] px-[10px] md:py-[20px] flex flex-col  gap-[40px] ${backHeight} h-auto   md:min-h-[490px] lg:min-h-[598px]`}
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
