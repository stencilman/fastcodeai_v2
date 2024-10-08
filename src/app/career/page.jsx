"use client";
import React, { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Hero from "./sections/Hero";
import QualitieCulture from "./sections/QualitieCulture";
import JoinTeam from "./sections/JoinTeam";
import PearksAndBenefits from "./sections/PearksAndBenefits";
import LifeHere from "./sections/LifeHere";
import OpenRolesForm from "./sections/OpenRolesForm";
import Footer from "../component/sections/Footer";

const Career = () => {
  const { setIsActive } = useGlobalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsActive(false);
  }, []);
  return (
    <>
      <Hero />
      <QualitieCulture />
      <JoinTeam />
      {/* <PearksAndBenefits /> */}
      <LifeHere />
      <OpenRolesForm />
      <Footer showExtraSpace={true}/>
    </>
  );
};

export default Career;
