import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

const SocialShare = () => {
  let path = usePathname();
  let blogName = path.split("/").pop();
  const currentUrl = `https://www.fastcode.ai/blogs${blogName}`;
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
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`;
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
        onClick={() => handleShare("linkedin")}
        className="cursor-pointer hover:scale-[1.2] transition-all duration-300 ease-in-out"
        src="/blogs/social-icons/linkedin.svg"
        width="30"
        height="30"
        alt=""
      />
      <Image
        onClick={() => handleShare("facebook")}
        className="cursor-pointer hover:scale-[1.2] transition-all duration-300 ease-in-out"
        src="/blogs/social-icons/facebook.svg"
        width="30"
        height="30"
        alt=""
      />
      <Image
        onClick={() => handleShare("twitter")}
        className="cursor-pointer hover:scale-[1.2] transition-all duration-300 ease-in-out"
        src="/blogs/social-icons/x.svg"
        width="30"
        height="30"
        alt=""
      />
    </div>
  );
};

export default SocialShare;
