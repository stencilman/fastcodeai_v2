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
    18: recommendBlog1,
    19: recommendBlog2,
    20: recommendBlog3,
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
                  <Image
                    className="rounded-[20px] w-[100%]"
                    src="/blogs/vits/hero/img1.jpeg"
                    width="400"
                    height="400"
                    alt=""
                  />
                </div>
                {/* <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Vision Transformers (ViTs)
                </h4> */}
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Recently, the paper{" "}
                  {`"What Do Self-Supervised Vision
                  Transformers Learn?"`}{" "}
                  caught my attention, and I decided to write this short post
                  for those new to Vision Transformers (ViTs).
                </p>{" "}
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  In the realm of ViTs, there are two fundamental
                  self-supervised learning techniques: Contrastive Learning (CL)
                  and Masked Image Modeling (MIM).
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  CL is a widely-used self-supervised learning method that works
                  by pulling the embeddings (representations in a
                  high-dimensional space) of various transformations
                  (variations, such as a rotated version) of the same image
                  closer together, and pushing those from images of different
                  classes apart. MIM, on the other hand, has more recently risen
                  to prominence, particularly with ViTs. MIM functions by
                  masking random patches in the input image and subsequently
                  reconstructing the missing pixels, as shown in the image
                  below.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  The paper{" "}
                  {`"What Do Self-Supervised Vision Transformers Learn?"`}{" "}
                  <a
                    href="https://arxiv.org/abs/2305.00729"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    https://arxiv.org/abs/2305.00729
                  </a>{" "}
                  by Park et al. studies CL and MIM trained transformers in
                  detail and finds:
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  1. As expected, CL primarily captures global patterns, whereas
                  MIM does not. CL is also more shape-oriented while MIM is more
                  texture-oriented.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  2. CL plays a significant role in the later layers of the ViTs
                  architecture, training self-attentions to capture longer-range
                  global patterns, such as the shape of an object. However, it
                  also leads to reduced diversity of representations, thereby
                  worsening scalability and dense prediction performance.
                </p>{" "}
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  3. MIM utilizes high-frequency signals of the representations
                  and mainly focuses on the early layers of the ViTs.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  The paper argues that CL and MIM can complement each other and
                  that even the simplest harmonization can help leverage the
                  advantages of both methods.
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
