import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

const SocialShare = () => {
  let path = usePathname();
  let blogName = path.split("/").pop();
  const currentUrl = `https://fastcodeai-v2-eight.vercel.app/blogs/${blogName}`;
  console.log("currentUrl", currentUrl);

  const handleShare = (platform) => {
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${currentUrl}`;
        break;
      case "instagram":
        shareUrl = `https://www.instagram.com/?url=${currentUrl}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex md:flex-col gap-[20px] items-center md:sticky md:top-[120px] md:h-fit">
      <p className="text-[#9EB3CF] font-aeonik text-lg">Share</p>
      <Image
        onClick={() => handleShare("instagram")}
        className="cursor-pointer"
        src="/blogs/social-icons/insta.svg"
        width="30"
        height="30"
        alt=""
      />
      <Image
        onClick={() => handleShare("facebook")}
        className="cursor-pointer"
        src="/blogs/social-icons/facebook.svg"
        width="30"
        height="30"
        alt=""
      />
      <Image
        onClick={() => handleShare("twitter")}
        className="cursor-pointer"
        src="/blogs/social-icons/x.svg"
        width="30"
        height="30"
        alt=""
      />
    </div>
  );
};

export default SocialShare;
