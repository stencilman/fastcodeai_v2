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
      backHeight: "min-h-[510px]",
      name: "DR. ARJUN JAIN",
      role: "Founder & Chief Scientist",
      bg: "bg-arjun",
      cp: "Founder & Chief Scientist",
      education: "",
      desciption:
        "PhD in Computer Graphics from MPI for Informatics, post-doc at Courant Institute, NYU. Former research scientist at Apple, ex adjunct assistant professor at IIT Bombay, and adjunct faculty at IISc Bangalore. Founder of FastCode AI, loves creating impactful user technologies, father of 6-year-old twins.",
      linkedin: "https://in.linkedin.com/in/arjunjain",
    },
    {
      position:
        " sm:top-[-230px] sm:left-[47vw] lg:top-[-70px] lg:left-[26vw] xl:left-[29vw]",
      y: md,
      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight: "min-h-[440px]",
      name: "GAUTAM ADITHYA RAVI",
      role: "Head of Engineering",
      bg: "bg-gautham",
      cp: "Computer Science Engineering & Research",
      education: "MSc (CS) Saarland University.",
      desciption:
        "Seasoned backend engineer, profound thinker, specializing in building secure and scalable systems.",
      linkedin: "https://in.linkedin.com/in/gautham-adithya-ravi-8b803341",
    },
    {
      position:
        " sm:left-[0px] sm:top-[-330px]  lg:top-[-1040px] lg:left-[58vw]",
      y: sm,

      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight: "min-h-[440px]",
      name: "Yash Agarwal",
      role: "Software Engineer",
      bg: "bg-yash grayscale",
      cp: "Software Engineer",
      education: "Computer Science Graduate from Washington State University. ",
      desciption:
        "Passionate about app development and AI, with a strong enthusiasm for sports.",
      linkedin: "https://www.linkedin.com/in/yash-agarwal-a99944236/",
    },
    {
      position:
        " sm:top-[58px] sm:left-[47vw]   lg:top-[-302px] lg:left-[40vw]",
      y: xl,

      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight: "min-h-[440px]",
      name: "PARTH BASOLE",
      role: "Generalist Engineer",
      bg: "bg-parth",
      cp: "AI Tech Creator",
      education: "B.Tech (IN) VIT Pune. ",
      desciption:
        "Degenrative gamer. The culinary salt to the tech world. Open to all experiences.",
      linkedin: "https://in.linkedin.com/in/parth-basole-22844115a",
    },
    {
      position:
        " sm:top-[-182px] sm:left-[0px]  lg:top-[-800px] lg:left-[6vw] xl:left-[10vw]",
      y: lg,

      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight: "min-h-[440px]",
      name: "Shreyas Bhanderi",
      role: "Senior Research Scientist",
      bg: "bg-shreyas grayscale",
      cp: "Senior Research Scientist",
      education: "B.Tech (IT) DAIICT. ",
      desciption:
        "Passionate about engineering and machine learning, expert in developing large-scale systems.",
      linkedin: "https://www.linkedin.com/in/shreyas-bhanderi/",
    },

    {
      position: "sm:top-[37px]  sm:left-[0px]   lg:top-[-600px] lg:left-[58vw]",
      y: xl,

      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight: "min-h-[440px]",
      name: "Narendiran Chembu",
      role: "Senior ML engineer ",
      bg: "bg-naren",
      cp: "Senior Machine learning Enginner",
      education:
        "B.Tech IIT Madras, MS (Artificial Intelligence) University of Amsterdam.",
      desciption:
        "High on caffeine and life, fidgeting chess, rocking the uke, and lifting weights, all while barely sleeping.",
      linkedin: "https://www.linkedin.com/in/cgnarendiran/",
    },
    {
      position:
        "sm:top-[500px] sm:left-[47vw]  lg:left-[-6vw] xl:left-0 lg:top-[-500px]",
      y: xxl,

      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight: "min-h-[440px]",
      name: "Rishabh Gupta",
      role: "Machine Learning Engineer",
      bg: "bg-rishabh",
      cp: "Machine Learning Engineer",
      education:
        "MTech AI from IISc, MBA in Technology Management with Major in Finance (and CFA Level 1 cleared) from NMIMS. ",
      desciption: "Engineer, researcher, and avid football enthusiast.",
      linkedin: "https://www.linkedin.com/in/rishabh-gupta-a5886712a/",
    },
    {
      position:
        "sm:top-[-250px] sm:left-[0px]  lg:top-[-1410px] lg:left-[26vw] xl:left-[29vw]",
      y: xl,

      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight: "min-h-[440px]",
      name: "Hrishikesh Jadhav",
      role: "Machine Learning Engineer",
      bg: "bg-jadhav",
      cp: "Machine Learning Engineer",
      education: "MTech (CS) IIS.",
      desciption:
        "Engineer, researcher, and avid football enthusiast.",
      linkedin: "https://www.linkedin.com/in/hrishikesh-jadhav-34595a167/",

     
    },

    {
      position: "sm:top-[340px] sm:left-[47vw] lg:top-[-600px] lg:left-[58vw]",
      y: xxl,

      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight: "min-h-[440px]",
      name: "ABDUL MUQTADIR",
      role: "Software Engineer",
      bg: "bg-abdul",
      cp: "Software Engineer",
      education: "B.Tech from JNTUH.",
      desciption:
        "Integrating AI with web applications, focusing on empathetic user experience design.",
      linkedin: "https://www.linkedin.com/in/abdul-m-699ab9256/",

    
    },
    {
      position:
        "  sm:top-[-290px] sm:left-[23vw] lg:top-[-1800px] lg:left-[26vw] xl:left-[29vw]",
      y: xl,

      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight: "min-h-[440px]",
      name: "Tirth Pandit",
      role: "Senior Research Scientist",
      bg: "bg-tirth",
      cp: "Senior Research Scientist",
      education: "M.Tech (CS) IIIT Hyderabad. ",
      desciption: "Strong engineer, avid researcher, and kick-ass musician.",
      linkedin: "https://www.linkedin.com/in/tirth-pandit/",

    
    },

    {
      position:
        " sm:top-[-220px] sm:left-[0px] lg:top-[-2284px] lg:left-[-6vw] xl:left-0",
      y: xl,

      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight: "min-h-[440px]",
      name: "PRABAL PATEL",
      role: "Head of Sales and Business Development",
      bg: "bg-prabal grayscale",
      cp: "Head of Sales and Business Development",
      education: "MBA from Indiana University. ",
      desciption:
        "15 years of technology services experience, delivering managed teams and projects for large clients in US and India.",
      linkedin: "https://www.linkedin.com/in/prabalpatel211/",

    
    },
    {
      position:
        " sm:top-[500px] sm:left-[47vw] lg:top-[-1408px] lg:left-[40vw] ",
      y: xxl,

      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight: "min-h-[440px]",
      name: "Sughosh Patil",
      role: "Senior Research Scientist",
      bg: "bg-sughosh ",
      cp: "Senior Research Scientist",
      education: "B.Tech (CS) IIT Kanpur.",
      desciption:
        "Seasoned researcher, strong engineer with over half a decade of experience in Computer Vision, and an avid wildlife photographer whose work has been published by NatGeo.",
      linkedin: "https://www.linkedin.com/in/sughoshpatil/",

      
    },
    {
      position:
        "sm:left-[0px] sm:top-[-947px]  lg:top-[-3000px] lg:left-[6vw] xl:left-[10vw]",
      y: md,

      height: "h-[530px] md:h-[490px] lg:h-[598px] ",
      backHeight: "min-h-[536px]",
      name: "Eshwar Ramesh",
      role: "IOS Developer",
      bg: "bg-eshwar grayscale",
      cp: "Lead Mobile Engineer",
      education: "MS (CS) from New Horizon College of Engineering.",
      desciption:
        "Seasoned iOS Engineer with a decade of experience, exploring AI and Machine Learning. Also a poet, classical music enthusiast, and avid football critic.",
      linkedin: "https://in.linkedin.com/in/eshwar-ramesh-831303ab",

     
    },
    {
      position: " sm:top-[-747px]  lg:top-[-2800px] lg:left-[-6vw] xl:left-0",
      y: lg,

      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight: "min-h-[440px]",
      name: "Darshan Singh S",
      role: "Machine Learning Engineer",
      bg: "bg-darshan ",
      cp: "Machine Learning Engineer",
      education: "MS (CS) IIIT Hyderabad. ",
      desciption:
        "Seasoned researcher, diving deep into multiple modal learning.",
      linkedin: "https://www.linkedin.com/in/darshansinghs/",

     
    },

    {
      position:
        " sm:left-[47vw] sm:top-[-447px] lg:top-[-2600px] lg:left-[26vw] xl:left-[29vw]",
      y: xl,

      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight: "min-h-[440px]",
      name: "SANJAY SURIYAKUMAR",
      role: "Research Scientist",
      bg: "bg-sanjay",
      cp: "Research Scientist",
      education: "BS (Research) at IISc Bangalore.",
      desciption:
        " Embracing a 'just do it' mentality, avid food lover, and discerning connoisseur.",
      linkedin: "https://www.linkedin.com/in/sanjay-suriyakumar-a51aa821b/",

    
    },

    {
      position:
        " sm:left-[0px] sm:top-[-1447px]  lg:top-[-4449px] lg:left-[58vw]",
      y: sm,

      height: "h-[440px] md:h-[490px] lg:h-[598px]",
      backHeight: "min-h-[440px]",
      name: "Dhaval Taunk",
      role: "Research Scientist",
      bg: "bg-dhaval",
      cp: "Research Scientist",
      education: "MS (CS) IIIT Hyderabad.",
      desciption:
        " Blogger, passionate about research with publications in prestigious venues like WWW.",
      linkedin: "https://www.linkedin.com/in/dhavaltaunk08/",
    },
  ];
  return (
    <div className="w-full overflow-hidden px-[20px] pl-[20px] md:pl-[50px] lg:pl-[100px] py-[50px] md:py-[70px] lg:py-[150px]  bg-[#00081F] flex flex-col justify-center gap-[50px] items-center sm:block sm:relative sm:h-[5850px] md:h-[6550px] lg:h-[5550px] ">
      {memebersList.map(
        (
          {
            bg,
            position,
            name,
            role,
            y,
            cp,
            desciption,
            linkedin,
            height,
            backHeight,
            education,
          },
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
                  <h1 className="text-white text-[7.5vw] min-[455px]:text-[5vw] sm:text-[5vw] leading-[7.5vw] sm:leading-[5.5vw] lg:text-[3.5vw] xl:text-[48px] uppercase lg:leading-[48px] font-aeonik font-light tracking-wide">
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
                    {education}
                  </p>{" "}
                  <p className="text-[#9EB3CF] text-lg  font-bwmss01 pt-[5px]">
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
