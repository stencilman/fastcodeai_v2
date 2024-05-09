"use client";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Hero from "./sections/Hero";
import Dedication from "./sections/Dedication";
import Showcase from "./sections/Showcase";

const Patents = () => {
  const { setIsActive } = useGlobalContext();

  useEffect(() => {
    setIsActive(false);
  }, []);
  return (
    <>
      <Hero />
      <Dedication/>
      <Showcase/>
    </>
  );
};

export default Patents;
