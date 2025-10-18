import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import {
  LinkedInIcon,
  MoreIcon,
  GlobeIcon,
  LikeIcon,
  CommentIcon,
  RepostIcon,
  SendIcon,
} from "./icons";
import Image from "next/image";
import Link from "next/link";

const mockPostsData = [
  {
    id: 1,
    imageUrl: "/linkedin/post-1.jpg",

    postUrl:
      "https://www.linkedin.com/posts/arjunjain_ai-artificialintelligence-machinelearning-activity-7384912566902296576-12Ut?utm_source=share&utm_medium=member_desktop&rcm=ACoAADHmvN4B9Ag4Zt7aPOR4tw61YwfRUctAS0c",
  },
  {
    id: 2,
    imageUrl: "/linkedin/post-2.jpg",

    postUrl:
      "https://www.linkedin.com/posts/arjunjain_%F0%9D%97%9C-%F0%9D%97%B7%F0%9D%98%82%F0%9D%98%80%F0%9D%98%81-%F0%9D%98%84%F0%9D%97%AE%F0%9D%98%81%F0%9D%97%B0%F0%9D%97%B5%F0%9D%97%B2%F0%9D%97%B1-yann-lecun-%F0%9D%97%B1%F0%9D%97%B2%F0%9D%98%80%F0%9D%98%81%F0%9D%97%BF%F0%9D%97%BC%F0%9D%98%86-activity-7362017774090510336-l5PL?utm_source=share&utm_medium=member_android&rcm=ACoAADHmvN4B9Ag4Zt7aPOR4tw61YwfRUctAS0c",
  },
  {
    id: 3,
    imageUrl: "/linkedin/post-3.jpg",

    postUrl:
      "https://www.linkedin.com/posts/arjunjain_teaching-programming-machinelearning-activity-7302664455593607168-ljhs?utm_source=share&utm_medium=member_android&rcm=ACoAADHmvN4B9Ag4Zt7aPOR4tw61YwfRUctAS0c",
  },
  {
    id: 4,
    imageUrl: "/linkedin/post-4.jpg",

    postUrl:
      "https://www.linkedin.com/posts/arjunjain_%F0%9D%97%9C-%F0%9D%97%A7%F0%9D%97%B2%F0%9D%97%AE%F0%9D%97%B0%F0%9D%97%B5-%F0%9D%97%A9%F0%9D%97%94%F0%9D%97%98%F0%9D%98%80-%F0%9D%97%B6%F0%9D%97%BB-%F0%9D%9F%AD%F0%9D%9F%AC-%F0%9D%97%A0%F0%9D%97%B6%F0%9D%97%BB%F0%9D%98%82-activity-7373537548981354496-YX4J?utm_source=share&utm_medium=member_android&rcm=ACoAADHmvN4B9Ag4Zt7aPOR4tw61YwfRUctAS0c",
  },
  {
    id: 5,
    imageUrl: "/linkedin/post-5.jpg",

    postUrl:
      "https://www.linkedin.com/posts/arjunjain_%F0%9D%97%A7%F0%9D%97%B5%F0%9D%97%B2-%F0%9D%97%BD%F0%9D%97%AE%F0%9D%97%BF%F0%9D%98%81%F0%9D%98%86%F0%9D%98%80-%F0%9D%98%84%F0%9D%97%B6%F0%9D%97%BB%F0%9D%97%B1%F0%9D%97%B6%F0%9D%97%BB%F0%9D%97%B4-%F0%9D%97%B1%F0%9D%97%BC%F0%9D%98%84%F0%9D%97%BB-activity-7369260596908720129-EzdX?utm_source=share&utm_medium=member_android&rcm=ACoAADHmvN4B9Ag4Zt7aPOR4tw61YwfRUctAS0c",
  },
  {
    id: 6,
    imageUrl: "/linkedin/post-6.jpg",
    postUrl:
      "https://www.linkedin.com/posts/arjunjain_theano-deeplearning-machinelearning-activity-7356493464483606529-aJg1?utm_source=share&utm_medium=member_android&rcm=ACoAADHmvN4B9Ag4Zt7aPOR4tw61YwfRUctAS0c",
  },
  {
    id: 7,
    imageUrl: "/linkedin/post-7.jpg",
    postUrl:
      "https://www.linkedin.com/posts/arjunjain_ml-activity-7333441984910475264-3f1B?utm_source=share&utm_medium=member_android&rcm=ACoAADHmvN4B9Ag4Zt7aPOR4tw61YwfRUctAS0c",
  },
  {
    id: 8,
    imageUrl: "/linkedin/post-8.jpg",
    postUrl:
      "https://www.linkedin.com/posts/arjunjain_companies-pay-me-500hr-to-tell-them-not-activity-7375709242067968000-1qbr?utm_source=share&utm_medium=member_android&rcm=ACoAADHmvN4B9Ag4Zt7aPOR4tw61YwfRUctAS0c",
  },
  {
    id: 9,
    imageUrl: "/linkedin/post-9.jpg",
    postUrl:
      "https://www.linkedin.com/posts/arjunjain_titan-cupertino-bangalore-activity-7353304222727098369-FF4r?utm_source=share&utm_medium=member_android&rcm=ACoAADHmvN4B9Ag4Zt7aPOR4tw61YwfRUctAS0c",
  },
  {
    id: 10,
    imageUrl: "/linkedin/post-10.jpg",

    postUrl:
      "https://www.linkedin.com/posts/arjunjain_machinelearning-ai-hiring-activity-7363409219791814656-yxwY?utm_source=share&utm_medium=member_android&rcm=ACoAADHmvN4B9Ag4Zt7aPOR4tw61YwfRUctAS0c",
  },
  {
    id: 11,
    imageUrl: "/linkedin/post-11.jpg",
    postUrl:
      "https://www.linkedin.com/posts/arjunjain_executionmatters-getitdone-activity-7381493862307061760-zX45?utm_source=share&utm_medium=member_android&rcm=ACoAADHmvN4B9Ag4Zt7aPOR4tw61YwfRUctAS0c",
  },
  {
    id: 12,
    imageUrl: "/linkedin/post-12.jpg",
    postUrl:
      "https://www.linkedin.com/posts/arjunjain_mpii-epfl-meta-activity-7374272477025193984-cKsH?utm_source=share&utm_medium=member_android&rcm=ACoAADHmvN4B9Ag4Zt7aPOR4tw61YwfRUctAS0c",
  },
];

// Duplicate the posts to ensure a smooth infinite loop, which fixes the blank space issue.
const mockPosts = [
  ...mockPostsData,
  ...mockPostsData.map((post) => ({
    ...post,
    id: post.id + mockPostsData.length,
  })),
];

const ActionButton = ({ icon, label }) => (
  <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors duration-200">
    {icon}
    <span className="text-xs">{label}</span>
  </button>
);

const PostCard = ({ post, isActive }) => {
  return (
    <Link
      href={post.postUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`
            bg-[#1d2232] rounded-xl flex flex-col h-full
            border transition-all duration-300 
            ${
              isActive
                ? "border-sky-400/50 cursor-pointer"
                : "border-slate-700/80 cursor-pointer"
            }
        `}
    >
      <div className="relative w-full h-full p-[10px] flex items-center justify-center">
        <Image
          src={post.imageUrl}
          alt="LinkedIn Post"
          width={380}
          height={380}
        />
      </div>
    </Link>
  );
};

const CeoDeskSlide = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={16}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="!py-12"
      >
        {mockPosts.map((post, index) => (
          <SwiperSlide
            key={post.id}
            className="!w-[80vw] sm:!w-[320px] md:!w-[360px] lg:!w-[380px] !h-auto"
          >
            {({ isActive }) => (
              <div
                className={`transition-all duration-500 ease-in-out transform h-full ${
                  isActive ? "scale-100" : "scale-90"
                }`}
              >
                <div className="relative h-full">
                  {isActive && (
                    <div className="absolute -inset-[1px] rounded-xl  bg-[linear-gradient(100deg,#2ABBC6_3.26%,#056FED_57.27%)]"></div>
                  )}
                  <div className="relative h-full">
                    <PostCard post={post} isActive={isActive} />
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CeoDeskSlide;
