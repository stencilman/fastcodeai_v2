"use client";
import Image from "next/image";
import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import {
  floating1,
  floating2,
  floating3,
  floating4,
  floating5,
} from "../assets/data";

const WhoWeAre = () => {
  const plane1 = useRef(null);

  const plane2 = useRef(null);

  const plane3 = useRef(null);

  let requestAnimationFrameId = null;

  let xForce = 0;

  let yForce = 0;

  const easing = 0.08;

  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;

    xForce += movementX * speed;

    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);

    yForce = lerp(yForce, 0, easing);

    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });

    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });

    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;

    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);

      requestAnimationFrameId = null;
    }
  };

  return (
    <div
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className="Main w-full h-[120vh] mb-[70px] bg-[#00081F] relative overflow-hidden"
    >
      <div
        ref={plane1}
        className="palne w-full h-full absolute brightness-[1]"
      >
        <Image
          className="absolute left-[50%] top-[38%] md:top-[30%]"
          src={floating1}
          alt="image"
          width={170}
        />
        <Image
          className="absolute left-[2%] md:left-[20%] top-[15%] md:top-[8%]"
          src={floating2}
          alt="image"
          width={200}
        />
      </div>
      <div
        ref={plane2}
        className="palne w-full h-full absolute brightness-[1]"
      >
        <Image
          className="absolute w-[170px] md:w-[250px] left-[3%] md:left-[15%] top-[71%] md:top-[68%]"
          src={floating4}
          alt="image"
          width={250}
        />
        {/* <Image
          className="absolute left-[50%] top-[5%]"
          src={floating5}
          alt="image"
          width={200}
        /> */}
      </div>
      <div
        ref={plane3}
        className="palne w-full h-full absolute brightness-[0.9]"
      >
        <Image
          className="absolute left-[45%] md:left-[75%] top-[5.5%]"
          src={floating3}
          alt="image"
          width={250}
        />
        <Image
          className="absolute left-[70%] top-[70%]"
          src={floating5}
          alt="image"
          width={180}
        />
      </div>
      <div className="Title absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-[19px] w-[90%] lg:w-[70%] h-auto border border-[#707070] rounded-[20px] backdrop-blur-[5px] bg-[#35343481] flex text-white py-[70px] px-[20px] md:px-[40px] lg:px-[50px] gap-[40px] flex-col lg:flex-row">
        <div className="w-[100%] lg:w-[300%] xl:w-[150%] lg:justify-center flex items-center">
          <h1 className="font-aeonik tracking-normal">Who Are We ?</h1>
        </div>
        <div className="flex flex-col gap-[20px] text-[#d6e0ee] font-bwmss01 ">
          <p>
            We are a specialized group of AI and machine learning researchers
            and practitioners. we are at the forefront of cutting-edge
            technology, focusing on developing innovative solutions in the field
            of computer vision.
          </p>
          <p>
            Fast Code AI was founded in 2020. Since then, we have been making
            significant strides in the field of AI and machine learning,
            particularly in the domain of computer vision. Our team of experts
            is dedicated to pushing the boundaries of {"what’s"} possible in
            this exciting field.
          </p>
        </div>
      </div>
      {/* shadow */}
      <div className="absolute right-[-80px] top-[30%] w-[169px] h-[421px] blur-[50px] translate-y-[167px] scale-90  rounded-[50%] z-[4] bg-gradient-to-br from-[#1D8283] to-[#033577] bg-gradient-156deg bg-no-repeat bg-[0% 0%] opacity-49 border-0 border-opacity-0 filter blur-[100px]"></div>
    </div>
  );
};

export default WhoWeAre;
