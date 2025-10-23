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
    16: recommendBlog1,
    13: recommendBlog2,
    10: recommendBlog3,
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
      console.log("topicRefs", topicRefs.current);
      topicRefs.current.forEach((ref, index) => {
        if (
          ref?.offsetTop <= offset &&
          ref.offsetTop + ref.offsetHeight > offset
        ) {
          console.log("topicName", ref.id);
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
                <div className="p-[40px] bg-white rounded-[20px] shadow-[0px_3px_6px_#00000029]">
                  <Image
                    src="/blogs/unknown/main/known-unknown.webp"
                    width="744"
                    height="355"
                    alt=""
                  />
                </div>
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Problem
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  A Convolutional Neural Network (ConvNet) trained on the MNIST
                  dataset when presented images from the Devanagari dataset will
                  wrongly classify the Devanagari letter to one of the MNIST
                  classes 0-9, usually with very high confidence. What can we do
                  to fix this?
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Systems trained without a background class can lead to nasty
                  false positives when deployed in production. While most of the
                  academic datasets such as PASCAL, MS-COCO or MNIST where
                  algorithms are often evaluated, do not have this problem
                  because all classes are known, it is a likely source of{" "}
                  {"negative"} dataset bias and does not necessarily hold true
                  in the real world where the negative space has near infinite
                  variety of inputs that need to be rejected.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  For example, let us look as this image below:
                </p>
                <div className="flex w-full gap-[5%]">
                  <Image
                    className="rounded-[20px] w-[100%]"
                    src="/blogs/unknown/content/known-unknown-plot-1.webp"
                    width="400"
                    height="400"
                    alt=""
                  />
                </div>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  In the 3 scatter plots on the top row, the 10 different colors
                  represent the 10 MNIST classes 0-9, and the black color
                  represents the unknown Devanagari class. The softmax
                  probability is plotted with the origin being zero, and the
                  value increases to one as we go out radially along the lines.
                  <br />
                  In the plots on the bottom row are histograms of softmax
                  probability values for samples of known MNIST data (Red) and
                  unknown Devanagari data (red) with a logarithmic vertical
                  axis.
                  <br />
                  As it can be clearly seen, in the plot (a), some of the
                  samples from the Devanagari dataset have very high scores.
                  Even when an additional unknown class is added in plot (b),
                  some black dots falling in the 0-9 classes are still far away
                  from the origin. In an application, a score threshold θ should
                  be chosen to optimally to separate unknown from known samples.
                  Unfortunately, such a threshold is difficult to find for
                  either (a) or (b), however, a better separation is achievable
                  with the Objectosphere loss (c) which I will describe next in
                  this post.
                </p>
              </div>
              {/* topic-2 */}
              <div
                id="topic2"
                ref={(el) => (topicRefs.current[1] = el)}
                className="flex flex-col gap-[20px]"
              >
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Solution
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  The most common approach taken to deal with unknown classes to
                  prevent false positives are by:
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  1. thresholding softmax, or
                  <br /> 2. using an additional background, garbage or nota
                  class.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  However, they still have problems as shown in the plots (a)
                  and (b) above. Dhamija et al. in the paper{" "}
                  <a
                    href="https://arxiv.org/pdf/1811.04110v2.pdf"
                    target="_blank"
                    className="underline text-white italic"
                  >
                    Reducing Network Agnostophobia
                  </a>{" "}
                  from NeurIPS 2018 present a simple yet effective approach
                  which leads to a better solution to this unknown class problem
                  and the results can be seen in the plot (c) above. They
                  achieve this using the Objectosphere loss.
                </p>
                <b className="text-[#9EB3CF] text-lg font-bwmss01">
                  In simple words, all they say is: do no use the additional
                  background, garbage or nota class. Instead, force the unknown
                  classes to output a uniform distribution. And, also force the
                  magnitude of activations for known classes to be at least a
                  margin m and that of unknown classes to be zero. Thats it!
                </b>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  To understand it more formally, please check the equations (1)
                  and (2) from their{" "}
                  <a
                    href="https://arxiv.org/pdf/1811.04110v2.pdf"
                    target="_blank"
                    className="underline text-white italic"
                  ></a>{" "}
                  paper.
                </p>
              </div>

              {/* end topic-2 */}
              {/* topic-3 */}

              <div
                id="topic3"
                ref={(el) => (topicRefs.current[2] = el)}
                className="flex flex-col gap-[20px]"
              >
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Limitations
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  There are two kinds of unknowns - the known unknown and the
                  unknown unknown. This method only works best for the known
                  unknowns. E.g. in one experiment, for a MNIST classifier, they
                  find that training with CIFAR samples as the unknowns does not
                  provide robustness to unknowns from the samples of NIST
                  Letters dataset. Whereas, training with NIST Letters does
                  provide robustness against CIFAR images. This is because CIFAR
                  images are distinctly different from the MNIST digits where as
                  NIST letters have attributes very similar to them. This
                  finding however is consistent with the well known importance
                  of hard-negatives in deep network training.
                </p>
              </div>
              {/* end topic-3 */}

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
          <div className="relative md:sticky md:top-[120px] h-[240px] sm:h-[250px] md:h-fit">
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
              <div className="mt-[15px] max-w-[400px] text-lg font-bwmss01 h-[46vw] sm:h-[210px] md:h-[19vw] lg:h-auto overflow-auto">
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
                    1. Problem
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
                <a
                  onClick={() => {
                    scrollToTopic("topic3");
                    setTopicHighlight("topic3");
                  }}
                >
                  <p
                    className={`pl-[20px] pb-[4px] pr-[15px] cursor-pointer transition-all duration-300 ease-in-out lg:hover:text-[#3784e9] ml-[2px] mb-[4px] ${
                      topicHighlight === "topic3"
                        ? "border-l-[#036BF0] text-[#036BF0] border-l-[3px]"
                        : "text-[#9EB3CF]"
                    } `}
                  >
                    3. Limitations
                  </p>
                </a>
              </div>
            </div>
          </div>
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
