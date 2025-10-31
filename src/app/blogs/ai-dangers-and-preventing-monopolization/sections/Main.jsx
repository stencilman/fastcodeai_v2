"use client";
import React, { useEffect, useRef, useState } from "react";
import SocialShare from "../../components/SocialShare";
import Image from "next/image";
import Link from "next/link";
import Button from "../../../component/Button";
import { recommendBlogsDataList } from "../../../utils/recommendBlogsDataList";
import RecommendBlogSection from "../../sections/RecommendBlogSection";

const Main = () => {
  const {
    10: recommendBlog1,
    14: recommendBlog2,
    13: recommendBlog3,
  } = recommendBlogsDataList;

  const [topicHighlight, setTopicHighlight] = useState("topic1");
  const topicRefs = useRef([null, null, null]);
  console.log("recommendBlogsDataList!!!!!!", recommendBlogsDataList);
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
                  <Image
                    className="rounded-[20px] w-[100%]"
                    src="/blogs/ai-dangers/content/img1.jpeg"
                    width="400"
                    height="400"
                    alt=""
                  />
                </div>
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  The Key to Counterbalancing {"AI's"} Dangers and Preventing
                  Monopolization by Large Corporations
                </h4>

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Today, I want to highlight Yann LeCun, a Turing Award-winning
                  computer scientist and VP and Chief Scientist at #Meta, who
                  exemplifies this drive.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  When I was a post-doc at NYU Courant Institute of Mathematical
                  Sciences, I had the privilege of being his office neighbor and
                  collaborating on four research papers. The most notable was
                  our #NeurIPS 2014 paper, co-authored with the brilliant
                  Jonathan and Chris, SciTech Oscar winner and the best mentor
                  ever, now cited nearly 2000 times. It marked a breakthrough in
                  heatmap-based human pose estimation using deep learning.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  A personal anecdote that stands out from our collaboration
                  involves a challenge we faced while working on this paper. We
                  needed non-negative outputs for a particular computation, but
                  the commonly used ReLUs were problematic. Without hesitation,
                  he suggested SoftPlus — a function I {"hadn't"} even heard of
                  at the time. His intuition and depth of knowledge were not
                  just impressive but transformative for our research.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  His relentless advocacy for #opensource #AI at #Meta is a
                  beacon in an industry where many giants, like #Google and
                  #OpenAI, are increasingly becoming more closed. His approach
                  not only fosters innovation but also builds a collaborative
                  and inclusive AI community and accelerates research.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  This aligns perfectly with our ethos at Fast Code AI , where
                  we believe in the power of sharing knowledge.The advancement
                  in creating large language models (#LLMs) for regional
                  languages, propelled by open-source frameworks, is pivotal.{" "}
                  {"It's"} key to integrating the next billion users from
                  linguistically diverse regions like India into the digital
                  world.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  In an industry that evolves by the minute, leaders like him,
                  who champion open-source, are indispensable. They pave the way
                  towards a future where collaboration and openness in AI are
                  norms, not exceptions.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  What are your experiences with open-source AI? {"Let's"} share
                  and grow together. Thank you for your dedication and for being
                  an exemplary figure in the tech community, reminding us that
                  when knowledge is shared, everyone wins!
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
                <div className="w-fit">
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
