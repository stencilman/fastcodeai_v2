"use client";
import React, { useEffect, useRef, useState } from "react";
import SocialShare from "../../components/SocialShare";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/component/Button";
import { recommendBlogsDataList } from "@/app/utils/recommendBlogsDataList";
import RecommendBlogSection from "../../sections/RecommendBlogSection";

const Main = () => {
  const {
    6: recommendBlog1,
    4: recommendBlog2,
    0: recommendBlog3,
  } = recommendBlogsDataList;

  const [topicHighlight, setTopicHighlight] = useState("topic1");
  const topicRefs = useRef([null, null, null]);

  const scrollToTopic = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 150; // Adjust this value as needed
      const offsetPosition = element.offsetTop - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY + window.innerHeight / 2;
      // console.log("topicRefs", topicRefs.current);
      topicRefs.current.forEach((ref, index) => {
        if (
          ref?.offsetTop <= offset &&
          ref.offsetTop + ref.offsetHeight > offset
        ) {
          // console.log("topicName", ref.id);
          setTopicHighlight(ref.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call initially to set the active topic

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full h-auto pt-[100px] pb-[50px] px-[35px] md:px-[45px] lg:px-[80px] flex justify-center flex-col ">
      <div>
        <div className="flex flex-col-reverse md:flex-row gap-[50px] justify-center">
          <div className="flex flex-col md:flex-row gap-[50px] ">
            <SocialShare />
            {/* Main */}
            <div className="md:w-[621%] md:max-w-[822px] flex flex-col gap-[30px] ">
              {/* content */}

              {/* topic-1 */}
              <div
                id="topic1"
                ref={(el) => (topicRefs.current[0] = el)}
                className="flex flex-col gap-[20px]"
              >
                <div className="flex w-full gap-[5%]">
                  <video
                    loop
                    controls
                    playsInline
                    src="/blogs/thesis-reality/content/video.mp4"
                    className="rounded-[20px] w-[100%]"
                    width="400"
                    height="400"
                    alt=""
                  />
                </div>
                {/* <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Approach to solve complex problems
                </h4> */}

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  As the sun sets on this Sunday evening, I find myself
                  reflecting on my journey from over a decade ago. I was
                  pursuing my #PhD at the Max Planck Institute for Informatics{" "}
                  <a
                    href="https://www.mpi-inf.mpg.de/home/"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    https://www.mpi-inf.mpg.de/home/
                  </a>{" "}
                  and my thesis titled{" "}
                  {`"Data-driven methods for interactive visual content creation and manipulation"`}{" "}
                  marked my first venture into what is now known as the bustling
                  landscape of #GenAI.
                </p>

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Back then, I could never have imagined the impact our ideas
                  would have on the creative world. In those early days, the
                  concept of using data-driven strategies for creation and
                  manipulation was just beginning to take shape. My ambition was
                  to develop #ML models trained on extensive corpora of visual
                  content, to democratize #ContentCreation by making it
                  accessible and intuitive for novices.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Fast forward to today, and the fruits of those early dreams
                  are evident in the GenAI tools that have become indispensable
                  to our creative endeavors. These innovations have shattered
                  barriers, unlocking creativity across the spectrum of users.
                  Yet, as we marvel at our progress, we also recognize the
                  journey ahead. Our current interactions are largely limited to
                  text prompts. I envision a future where our engagement with AI
                  becomes more rich and nuanced, pushing the boundaries of
                  creativity even further.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  On this Sunday evening, as I ponder the evolution from those
                  nascent ideas to the technologies that now shape our creative
                  expressions, I am filled with gratitude for being part of this
                  remarkable journey.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  {"I'm"} curious to hear your reflections. How do you envision
                  the future of GenAI in content creation?
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Link to my PhD thesis:{" "}
                  <a
                    href="https://www.researchgate.net/publication/298070734_Data-driven_methods_for_interactive_visual_content_creation_and_manipulation"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    https://www.researchgate.net/publication/
                  </a>
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  My work on GenAI for automatically assigning materials to 3D
                  Objects (from 2012) -{" "}
                  <a
                    href="https://resources.mpi-inf.mpg.de/MaterialMemex/"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    https://resources.mpi-inf.mpg.de/MaterialMemex/
                  </a>
                </p>
              </div>

              {/* CTA */}
              <div className="w-full py-[26px] px-[20px] md:px-[50px] lg:px-[100px] flex flex-col gap-[18px] bg-[#000D2F] rounded-[20px] my-[60px]">
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Want to know more about AI ML Technology
                </h4>
                <p className="text-white text-lg font-aeonik ">
                  Incorporate AI ML into your workflows to boost efficiency,
                  accuracy, and productivity. Discover our artificial
                  intelligence services.
                </p>
                <div className="w-[164px]">
                  <Button to="/contact" name="Know More" />
                </div>
              </div>
            </div>
          </div>
          {/* nav */}
          {/* <div className="relative md:sticky md:top-[120px] h-[240px] sm:h-[250px] md:h-fit">
            <Image
              className="min-h-[250px] w-[300px] min-w-[267px] md:min-w-[36vw] lg:min-w-[320px] relative"
              src="/blogs/rec.svg"
              width="300"
              height="500"
              alt=""
            />
            <div className="absolute top-[15px] ">
              <h6 className="text-white text-lg font-aeonik px-[23px] pt-[23px]">
                TABLE OF CONTENTS
              </h6>
              <div className="mt-[15px] max-w-[350px] sm:max-w-[300px] lg:max-w-[400px] text-lg font-bwmss01 h-[46vw] sm:h-[210px] md:h-[19vw] lg:h-auto overflow-auto">
                <a
                  onClick={() => {
                    scrollToTopic("topic1");
                    setTopicHighlight("topic1");
                  }}
                >
                  <p
                    className={`pl-[20px] pb-[4px] pr-[15px] ml-[2px] mb-[4px] cursor-pointer transition-all duration-300 ease-in-out lg:hover:text-[#3784e9]  ${
                      topicHighlight === "topic1"
                        ? "border-l-[#036BF0] text-[#036BF0] border-l-[3px]"
                        : "text-[#9EB3CF]"
                    }  `}
                  >
                    1. Vision Transformers Need Registers
                  </p>
                </a>
                <a
                  onClick={() => {
                    scrollToTopic("topic2");
                    setTopicHighlight("topic2");
                  }}
                >
                  <p
                    className={`pl-[20px] pb-[4px] pr-[15px] cursor-pointer  transition-all duration-300 ease-in-out lg:hover:text-[#3784e9] ml-[2px] mb-[4px] ${
                      topicHighlight === "topic2"
                        ? "border-l-[#036BF0] text-[#036BF0] border-l-[3px]"
                        : "text-[#9EB3CF]"
                    } `}
                  >
                    2. Solution
                  </p>
                </a>
               
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* Read More */}
      <div>
        <div className="w-full flex justify-between items-center my-[50px]">
          <h4 className="text-white text-[7vw] md:text-[42px] font-aeonik tracking-wide">
            Read More Blogs
          </h4>
          <Link href="/blogs">
            <div className="group flex gap-[5px] ">
              <p className="text-white text-base font-aeonik ">View All</p>
              <Image
                className="relative group-hover:translate-x-2 transition-all duration-500 ease-in"
                src="/arrowRight.svg"
                width="17"
                height="17"
                alt=""
              />
            </div>
          </Link>
        </div>
        <div className="w-full relative flex flex-col md:flex-row gap-[56px] md:gap-[5%] mt-[90px] md:mt-[220px] ">
          <RecommendBlogSection
            recommendBlog1={recommendBlog1}
            recommendBlog2={recommendBlog2}
            recommendBlog3={recommendBlog3}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
