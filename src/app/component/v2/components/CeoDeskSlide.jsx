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

const mockPostsData = [
  {
    id: 1,
    author: {
      name: "Arjun Jain",
      handle: "Your Global R&D Team for Hire | Found...",
      avatarUrl: "/team/Arjun_Jain.webp",
    },
    timestamp: "1d",
    content:
      "Incredible energy from 50+ AI founders at yesterday's Antler #India #AI Residency - the best part of building in AI isn't the technology...",
    media: { type: "image", urls: ["/v2/case-studies/driplab.jpg"] },
    stats: { likes: 61, comments: 3, reposts: 1 },
  },
  {
    id: 2,
    author: {
      name: "Arjun Jain",
      handle: "Your Global R&D Team for Hire | Found...",
      avatarUrl: "/team/Arjun_Jain.webp",
    },
    timestamp: "4d",
    content:
      "Remember when we used to just... play with stuff? No metrics, no KPIs, no evals, just pure...",
    media: { type: "image", urls: ["/v2/case-studies/driplab.jpg"] },
    stats: { likes: 83, comments: 3, reposts: 3 },
  },
  {
    id: 3,
    author: {
      name: "Arjun Jain",
      handle: "Your Global R&D Team for Hire | Found...",
      avatarUrl: "/team/Arjun_Jain.webp",
    },
    timestamp: "1d",
    content:
      '2008: "Please let me know if you might have something for me..."\nThat\'s what I wrote to my professor in...',
    media: { type: "image", urls: ["/v2/case-studies/driplab.jpg"] },
    stats: { likes: 250, comments: 20, reposts: 4 },
  },
  {
    id: 4,
    author: {
      name: "Arjun Jain",
      handle: "Your Global R&D Team for Hire | Found...",
      avatarUrl: "/team/Arjun_Jain.webp",
    },
    timestamp: "5d",
    content:
      "A massive thank you to Arjun Jain (Founder, Fast Code AI) and Gaurav Aggarwal (VP & Chief AI Scientist, Reliance Jio)...",
    media: { type: "image", urls: ["/v2/case-studies/driplab.jpg"] },
    stats: { likes: 120, comments: 15, reposts: 9 },
  },
  {
    id: 5,
    author: {
      name: "Arjun Jain",
      handle: "Your Global R&D Team for Hire | Found...",
      avatarUrl: "/team/Arjun_Jain.webp",
    },
    timestamp: "6d",
    content:
      "Building a startup is a marathon, not a sprint. Every day brings new challenges and new opportunities for growth. Stay focused, stay resilient.",
    media: null,
    stats: { likes: 300, comments: 45, reposts: 22 },
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
    <div
      className={`
            bg-[#1d2232] rounded-xl flex flex-col h-full
            border transition-all duration-300
            ${isActive ? "border-sky-400/50" : "border-slate-700/80"}
        `}
    >
      <div className="p-4 flex-grow">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <Image
              src={post.author.avatarUrl}
              alt={post.author.name}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="flex items-center gap-1">
                <h3 className="font-bold text-white">{post.author.name}</h3>
                <LinkedInIcon className="w-4 h-4 text-sky-400" />
                <span className="text-slate-400 text-sm">· You</span>
              </div>
              <p className="text-xs text-slate-400 leading-tight">
                {post.author.handle}
              </p>
              <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                <span>{post.timestamp}</span>
                <span>·</span>
                <GlobeIcon className="w-4 h-4" />
              </div>
            </div>
          </div>
          <button className="text-slate-400 hover:text-white">
            <MoreIcon className="w-6 h-6" />
          </button>
        </div>
        <p className="text-slate-200 text-sm my-4 whitespace-pre-wrap">
          {post.content}
        </p>
      </div>
      {post.media && (
        <div className="relative w-full aspect-video mt-auto">
          <Image
            src={post.media.urls[0]}
            alt="Post media"
            width={320}
            height={200}
            className="w-full h-[200px]"
          />
          {post.media.type === "gallery" && (
            <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
              1/{post.media.urls.length}
            </div>
          )}
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
          <div className="flex items-center">
            <span className="bg-blue-500 w-4 h-4 rounded-full border-2 border-[#1d2232]"></span>
            <span className="bg-red-500 w-4 h-4 rounded-full border-2 border-[#1d2232] -ml-2"></span>
            <span className="bg-green-500 w-4 h-4 rounded-full border-2 border-[#1d2232] -ml-2"></span>
            <span className="ml-2">{post.stats.likes}</span>
          </div>
          <span>·</span>
          <span>{post.stats.comments} comments</span>
          <span>·</span>
          <span>{post.stats.reposts} reposts</span>
        </div>
        <div className="border-t border-slate-700 pt-2 flex justify-around">
          <ActionButton icon={<LikeIcon className="w-6 h-6" />} label="Like" />
          <ActionButton
            icon={<CommentIcon className="w-6 h-6" />}
            label="Comment"
          />
          <ActionButton
            icon={<RepostIcon className="w-6 h-6" />}
            label="Repost"
          />
          <ActionButton icon={<SendIcon className="w-6 h-6" />} label="Send" />
        </div>
      </div>
    </div>
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
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="!py-12"
      >
        {mockPosts.map((post, index) => (
          <SwiperSlide key={post.id} className="!w-[380px] !h-auto">
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
