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
    3: recommendBlog1,
    6: recommendBlog2,
    9: recommendBlog3,
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
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Join Me at CyPhySS 2024 for a Deep Dive into the Future of
                  Autonomous Vehicles
                </h4>

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Come, attend and join me tomorrow at CyPhySS2024 at the{" "}
                  <a
                    href="https://www.linkedin.com/company/indian-institute-of-science/"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    Indian Institute of Science (IISc)
                  </a>
                  , where I will be speaking on{" "}
                  {`"Autonomy at Scale: Where Are We Headed?"`} This
                  presentation is part of {"India's"} largest annual summit on
                  Cyber-Physical Systems, spearheaded by Prof.{" "}
                  <a
                    href="https://www.linkedin.com/in/amrutur/"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    Bharadwaj Amrutur
                  </a>
                  . The summit convenes leading experts to discuss advancements
                  in Robotics, Control, and AI.
                </p>

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Session Details:
                  <br />
                  Date: July 25, 2024
                  <br />
                  Venue: Division of Biological Sciences, IISc Bangalore
                  <br />
                  Time: 13:45-14:30
                  <br />
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  This symposium is an excellent opportunity for anyone
                  interested in the intersections of technology with sectors
                  like industry, space, agriculture, and more. Expect insights
                  into how AI and robotics are reshaping mobility and smart
                  infrastructure. Link to symposium:{" "}
                  <a
                    href="https://cps.iisc.ac.in/cyphyss2024/"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    https://cps.iisc.ac.in/cyphyss2024/
                  </a>
                </p>

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Below is the PDF to preview some of the insights I will be
                  sharing!
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  I look forward to engaging with fellow researchers, industry
                  leaders, and enthusiasts. {"Let’s"} explore the possibilities
                  that lie at the frontier of autonomous systems!
                </p>
                <div className="flex w-full flex-col md:flex-row gap-[25px] md:gap-[5%]">
                  <object
                    type="application/pdf"
                    className="rounded-[20px] w-[100%] h-[auto]  lg:h-[600px]"
                    data="/blogs/cyphyss-2024/content/cyphyss-artcl.pdf"
                    // width="400"
                    // height="400"
                  >
                    <a
                      href="/blogs/cyphyss-2024/content/cyphyss-artcl.pdf"
                      download
                    >
                      <div className="main_cta_button rounded-[28px] relative z-[1] flex items-center gap-[7px] bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] text-white p-[15px] text-lg justify-between">
                        Preview PDF
                        <div>
                          <span className="button__icon-wrapper ">
                            <svg
                              width="10"
                              className="button__icon-svg"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 15"
                            >
                              <path
                                fill="currentColor"
                                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                              ></path>
                            </svg>

                            <svg
                              className="button__icon-svg  button__icon-svg--copy"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              fill="none"
                              viewBox="0 0 14 15"
                            >
                              <path
                                fill="currentColor"
                                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </a>
                  </object>
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
