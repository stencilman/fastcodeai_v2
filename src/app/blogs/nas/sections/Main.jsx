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
    0: recommendBlog1,
    5: recommendBlog2,
    3: recommendBlog3,
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
                    src="/blogs/nas/hero/img1.jpeg"
                    width="400"
                    height="400"
                    alt=""
                  />
                </div>
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Neural Architecture Search (NAS)
                </h4>

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Neural Architecture Search (NAS) is widely utilized for
                  automatically identifying the best-performing neural network
                  among a vast array of candidate architectures. Networks
                  identified through NAS often outperform those that are
                  manually designed, proving their efficacy across various
                  mainstream applications. For example, consider the
                  EfficientNet family (ranging from B0 to B7), which was
                  discovered using NAS (see figure). Given a certain compute
                  budget (say, in terms of FLOPS), these architectures are
                  likely to serve as a promising backbone for your application.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  In their groundbreaking paper,{" "}
                  {`"EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks,"`}{" "}
                  Mingxing Tan et al. further develop the ideas introduced in
                  their previous work,{" "}
                  {`"MnasNet: Platform-Aware Neural Architecture Search for Mobile."`}{" "}
                  They propose a multi-objective optimization problem that
                  involves identifying Convolutional Neural Network (CNN) models
                  that can deliver high accuracy while maintaining a low
                  computational overhead, as measured by inference latency or
                  Floating Point Operations Per Second (FLOPS).
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  To accomplish this, Tan et al. implement the methodology
                  outlined by Barret Zoph et al. in{" "}
                  {`"Learning Transferable Architectures for Scalable Image Recognition."`}{" "}
                  In this approach, each CNN model within the pre-defined search
                  space is decomposed into a list of tokens. Instead of being
                  chosen randomly, these tokens are derived from a sequence of
                  actions taken by the reinforcement learning (RL) agent. The
                  ultimate goal of the process is to maximize the expected
                  rewards, interpreted in this case as high model accuracy and
                  low latency or FLOPS. The RL agent, through a process of
                  learning and refinement, is trained to choose an architecture,
                  i.e., a sequence of actions, that leads to a model with
                  superior performance metrics.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  However, The catch with Neural Architecture Search (NAS) is
                  its high computational cost. For instance, the search for
                  EfficientNetB0 took a whopping 3800 GPU days! The majority of
                  these research papers originate from Google, which possesses
                  the necessary infrastructure for such endeavors. However,
                  individuals like myself and perhaps you may not have access to
                  such resources. Given this circumstance, how do we
                  circumnavigate this challenge?
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Excited to learn more about how we can tackle the high
                  computational cost of NAS? {"Don't"} miss my next post, where{" "}
                  {"we'll"} delve into the intriguing world of zero-shot NAS
                  such as ZiCo: Zero-shot NAS via Inverse Coefficient of
                  Variation on Gradients by Guihong Li . This exciting
                  development in the field is all about designing training-free
                  proxies that can anticipate the performance of a given
                  architecture on a test dataset.
                </p>
                <div className="text-[#9EB3CF] text-lg font-bwmss01">
                  <div>
                    EfficientNet:{" "}
                    <a
                      href="https://lnkd.in/gtNNzNaE"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                    >
                      https://lnkd.in/gtNNzNaE
                    </a>
                  </div>
                  <div>
                    MnasNet:{" "}
                    <a
                      href="https://lnkd.in/gFx-4EVk"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                    >
                      https://lnkd.in/gFx-4EVk
                    </a>
                  </div>
                  <div>
                    Zico:{" "}
                    <a
                      href="https://lnkd.in/gY6krDGD"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                    >
                      https://lnkd.in/gY6krDGD
                    </a>
                  </div>
                  <div>
                    Zoph et al.:{" "}
                    <a
                      href="https://lnkd.in/g49yUBKV"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                    >
                      https://lnkd.in/g49yUBKV
                    </a>
                  </div>
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
