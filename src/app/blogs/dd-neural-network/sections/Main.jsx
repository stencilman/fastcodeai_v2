"use client";
import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import SocialShare from "../../components/SocialShare";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/component/Button";
import { recommendBlogsDataList } from "@/app/utils/recommendBlogsDataList";
import RecommendBlogSection from "../../sections/RecommendBlogSection";

const Main = () => {
  const {
    0: recommendBlog1,
    1: recommendBlog2,
    2: recommendBlog3,
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
                {/* <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  
                </h4> */}

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  In a recent talk by{" "}
                  <a
                    href="https://www.linkedin.com/in/yann-lecun/"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    Yann LeCun
                  </a>
                  , he touched upon the phenomenon of {"double descent"}, a
                  concept I was not aware of.
                </p>

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  The double⁠ descent⁠ phenomenon⁠ occurs in CNNs, ResNets, and
                  transformers: performance first improves, then gets worse, and
                  then improves again with increasing model size, data size, or
                  training time. While this behavior appears to be fairly
                  universal, we don’t yet fully understand why it happens. This
                  goes against the traditional bias-variance tradeoff, where it
                  was believed that increasing model complexity beyond a certain
                  point only leads to worse performance. However, in modern
                  neural networks, we see that after a dip in performance due to
                  overfitting, larger models can recover and perform even
                  better.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Yann likened this to historical innovations such as steam
                  engines and airplanes, which were effective long before their
                  underlying principles were understood. This analogy
                  beautifully illustrates how neural networks can perform
                  remarkably well even though we {"haven't"} fully deciphered
                  their underlying mechanics.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  In the paper by{" "}
                  <a
                    href="https://www.linkedin.com/company/openai/"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    OpenAI
                  </a>
                  , they show that the peak occurs at a “critical regime,” where
                  the models are barely able to fit the training set. As we
                  increase the number of parameters in a neural network, the
                  test error initially decreases, increases, and, just as the
                  model is able to fit the train set, undergoes a second
                  descent.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Neither classical statisticians’ conventional wisdom that too
                  large models are worse nor the modern ML paradigm that bigger
                  models are better uphold. We find that double descent also
                  occurs over train epochs. Surprisingly, they show these
                  phenomena can lead to a regime where more data hurts, and
                  training a deep network on a larger train set actually
                  performs worse.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Paper :{" "}
                  <a
                    href="https://arxiv.org/abs/1912.02292"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    https://arxiv.org/abs/1912.02292
                  </a>
                  <br />
                  Open AI blog :{" "}
                  <a
                    href="https://openai.com/index/deep-double-descent/"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    https://openai.com/index/deep-double-descent/
                  </a>
                </p>

                <div className="p-[40px]  rounded-[20px] shadow-[0px_3px_6px_#00000029]">
                  <Image
                    className="rounded-[20px]"
                    src="/blogs/dd-neural-network/main.jpeg"
                    width="544"
                    height="255"
                    alt=""
                  />
                </div>
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
