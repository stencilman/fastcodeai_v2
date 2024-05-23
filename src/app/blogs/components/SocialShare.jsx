import Image from "next/image";
import React from "react";

const SocialShare = () => {
  return (
    <div className="flex md:flex-col gap-[20px] items-center">
      <p className="text-[#9EB3CF] font-aeonik text-lg">Share</p>
      <Image
        src="/blogs/social-icons/insta.svg"
        width="30"
        height="30"
        alt=""
      />
       <Image
        src="/blogs/social-icons/facebook.svg"
        width="30"
        height="30"
        alt=""
      />
      <Image
        src="/blogs/social-icons/x.svg"
        width="30"
        height="30"
        alt=""
      />
    </div>
  );
};

export default SocialShare;
