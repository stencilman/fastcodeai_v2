'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';

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
      y:0,
    },
    {
      name: "ABDUL MUQTADIR",
      role: "Software Engineer",
      position: "top-[-150px] left-[600px]",
      bg: "bg-abdul",
      y:lg,
    },
    {
      name: "PARTH BASOLE",
      role: "Generalist Engineer",
      position: "top-[50px] left-[0px]",
      bg: "bg-parth",
      y:md,
    },
    {
      name: "Easwar",
      role: "IOS Developer",
      position: "top-[-400px] left-[450px]",
      bg: "bg-eshwar",
      y:0,
    },
    {
      name: "SANJAY SURIYAKUMAR",
      role: "Research Scientist",
      position: "top-[-800px] left-[890px]",
      bg: "bg-sanjay",
      y:lg,
    },
    {
      name: "GAUTAM ADITHYA RAVI",
      role: "Head of Engineering",
      position: "top-[-700px] left-[90px]",
      bg: "bg-gautham",
      y:md
    },
  ];
  return (
    <div className="w-full  px-[100px] py-[250px]  bg-[#00081F]">
      {memebersList.map(({bg,position,name,role,y}, i) => (
        <motion.div style={{y}}
          key={i}
          className={`w-[400px] h-[598px] rounded-[20px] ${bg} relative ${position} bg-no-repeat bg-cover px-[16px] py-[32px] flex items-end`}
        >
          <div className="flex flex-col gap-[20px]">
            <h1 className="text-white text-[51px] leading-[52px] font-aeonik font-light tracking-wide">
              {name}
            </h1>
            <p className="text-[#9EB3CF] font-aeonik text-2xl font-light">
              {role}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Members;
