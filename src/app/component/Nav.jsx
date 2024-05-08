import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "./anim";
import LinkNav from "./LinkNav";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Expertise",
    href: "/expertise",
  },
  {
    title: "Industries",
    href: "/industries",
  },
  {
    title: "Potfolio",
    href: "/potfolio",
  },
  {
    title: "Patents",
    href: "/patents",
  },
  {
    title: "Team",
    href: "/team",
  },
  {
    title: "Contacts",
    href: "/contacts",
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-[100vh]  z-[2] w-[40%] rounded-l-3xl bg-[#FFFFFF] fixed right-0 top-0 text-white"
    >
      <div className="box-border h-full pt-[2.5rem] flex flex-col justify-between">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="flex flex-col text-[55px] text-[#A4A4A4] leading-[4.4rem]    "
        >
          {navItems.map((data, index) => {
            return (
              <LinkNav
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></LinkNav>
            );
          })}
        </div>
        {/* <div className={styles.footer}>
                <a>Awwwards</a>
                <a>Instagram</a>
                <a>Dribble</a>
                <a>LinkedIn</a>
            </div> */}
      </div>
    </motion.div>
  );
}
