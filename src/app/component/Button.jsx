import Image from "next/image";
import Link from "next/link";
import React from "react";

const Button = ({to,name,target}) => {
  return (
    <Link target={target} href={to}
      className="rounded-[28px] relative z-[1] flex items-center gap-[7px] bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] text-white p-[15px] text-lg justify-between"
     
    >
      <div>{name}</div>
      <div>
        <Image
          className="inline "
          src="/arrowRight.svg"
          alt="arrow"
          width="16"
          height="13"
        />
      </div>
    </Link>
  );
};

export default Button;
