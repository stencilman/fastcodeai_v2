"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const TransitionLink = ({ children, href, ...props }) => {
  const router = useRouter();

  function sleep(seconds) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, seconds);
    });
  }

  const transitionHandler = async (e) => {
    const body = document.querySelector("body");
    e.preventDefault();
    //Exit Animation or animation begins
    body?.classList.add("page-transition");
    // add a delay
    // await sleep(14000);
    console.log("sleep!!!!!!!!!!!!!!");
    router.push(href);

    //Enter Animation
    await sleep(400);
    body?.classList.remove("page-transition");
  };
  return (
    <Link onClick={transitionHandler} href={href} {...props}>
      {children}
    </Link>
  );
};

export default TransitionLink;
