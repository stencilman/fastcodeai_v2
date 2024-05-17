import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "./anim";
import LinkNav from "./LinkNav";
import Link from "next/link";

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
    href: "/contact",
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
      className="h-[100vh]  z-[2] w-[100%] md:w-[45%] rounded-l-3xl bg-[#FFFFFF] fixed right-0 top-0 text-white"
    >
      <div className="box-border h-full pt-[4.5rem] flex flex-col justify-between">
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
        {/* footer */}
        <div className="flex gap-[30px] pl-[50px] pb-[100px]">
                <Link href="/career" className="text-lg text-black font-aeonik font-light">Career</Link>
                <Link href="/blogs" className="text-lg text-black font-aeonik font-light">Blog</Link>
                <Link href="https://in.linkedin.com/company/fast-code" target="_blank" className="text-lg text-black font-aeonik font-light">Linkedin</Link>
               
            </div>
      </div>
    </motion.div>
  );
}
