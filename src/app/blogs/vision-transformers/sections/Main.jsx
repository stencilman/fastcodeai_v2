"use client";
import React, { useEffect, useRef, useState } from "react";
import SocialShare from "../../components/SocialShare";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/component/Button";

const Main = () => {
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
                  Vision Transformers Need Registers
                </h4>
                <div className="flex w-full gap-[5%]">
                  <Image
                    className="rounded-[20px] w-[100%]"
                    src="/blogs/vision-transformers/hero/img1.jpeg"
                    width="400"
                    height="400"
                    alt=""
                  />
                </div>

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  The outstanding paper at #ICLR 2024,{" "}
                  {`"Vision Transformers Need Registers”`} by Dracet et al.,
                  which tackles the challenge in vision transformers
                  (#ViTs) of high-norm tokens skewing attention towards
                  uninformative background regions.
                  {/* <a   href="https://github.com/FastCodeAI/DVDB"
                    className="text-blue-600 hover:underline"
                    target="_blank">https://lnkd.in/grYTc4YY</a> */}
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  In traditional ViTs, each image patch is treated like a
                  sequence before self-attention mechanisms. However, this often
                  results emphasis on background noise, detracting from the
                  {"model’s"} ability to concentrate on salient features.
                </p>
              </div>

              {/* topic-2 */}
              <div
                id="topic2"
                ref={(el) => (topicRefs.current[1] = el)}
                className="flex flex-col gap-[20px]"
              >
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                The Solution
                </h4>

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                Introducing additional {`"register tokens"`} into the architecture. These tokens {"aren't"} derived from the image data but are included to accumulate and refine essential features across transformer layers. By balancing the attention mechanism, these registers help mitigate the impact of high-norm tokens and enhance the overall focus and efficacy of the model.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                This approach not only improves clarity and relevance in image analysis but also sets a new standard for addressing common pitfalls in vision transformers, potentially revolutionizing how we tackle various image-based tasks.
                </p>
                  <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Dive deeper into this transformative work and explore its implications for the future of computer vision: 
                  <a className="text-blue-600 hover:underline"
                    target="_blank" href="https://lnkd.in/gmPgj82t"> https://lnkd.in/gmPgj82t</a> 
                </p>
              </div>

              {/* end topic-2 */}
             

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
          {/* Blog Post 1 */}
          <Link className="md:w-[30%]" href="/blogs/why-ai">
            <div className="relative group">
              <div>
                <Image
                  className="group-hover:scale-[0.98] transition-all duration-500 ease-in-out"
                  src="/blogs/read-more/img1-2.png"
                  width="376"
                  height="353"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <ul className="flex group-hover:text-gray-500 transition-all duration-500 ease-in-out gap-[13px] text-xs font-bwmss01 items-baseline mt-[20px] pl-[12px]">
                  <li>Arjun Jain</li>
                  <li className="text-[33px]">.</li>
                  <li>04 Feb 2021</li>
                  <li className="text-[33px]">.</li>
                  <li>10 Comments</li>
                </ul>
                <b className="text-white text-2xl font-aeonik group-hover:scale-[0.98] transition-all duration-300 ease-in-out">
                  To ML or not to ML, that is the question.
                </b>
                <p className="text-[#9EB3CF] text-base font-bwmss01 ">
                  When do rule-based algorithms not work? When do we need
                  machine learning (ML) based algorithms? Let us try and answer
                  this question using the tasks below:
                </p>
              </div>
            </div>
          </Link>
          {/* Blog Post 2 */}
          <Link className="md:w-[30%]" href="/blogs/oil-gas">
            <div className="relative md:top-[-70px] group">
              <div>
                <Image
                  className="group-hover:scale-[0.98] transition-all duration-500 ease-in-out"
                  src="/blogs/read-more/img3-2.png"
                  width="376"
                  height="353"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <ul className="flex group-hover:text-gray-500 transition-all duration-500 ease-in-out gap-[13px] text-xs font-bwmss01 items-baseline mt-[20px] pl-[12px]">
                  <li>Tarun Kumar</li>
                  <li className="text-[33px]">.</li>
                  <li>03 June 2020</li>
                  <li className="text-[33px]">.</li>
                  <li>8 Comments</li>
                </ul>
                <b className="text-white text-2xl font-aeonik group-hover:scale-[0.98] transition-all duration-300 ease-in-out">
                  Oil & Gas EPC - Digitizing P&ID
                </b>
                <p className="text-[#9EB3CF] text-base font-bwmss01">
                  Oil & Gas which was once was a lucrative investment, now
                  struggles to ensure the same level of light. A lot of things
                  have changed in the past few years which has pushed the Oil &
                  Gas.
                </p>
              </div>
            </div>
          </Link>
          {/* Blog Post 3 */}
          <Link className="md:w-[30%]" href="/blogs/unknown-classes">
            <div className="relative group">
              <div>
                <Image
                  className="group-hover:scale-[0.98] transition-all duration-500 ease-in-out"
                  src="/blogs/read-more/img2-2.png"
                  width="376"
                  height="353"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <ul className="flex group-hover:text-gray-500 transition-all duration-500 ease-in-out gap-[13px] text-xs font-bwmss01 items-baseline mt-[20px] pl-[12px]">
                  <li>Arjun Jain</li>
                  <li className="text-[33px]">.</li>
                  <li>01 Feb 2021</li>
                  <li className="text-[33px]">.</li>
                  <li>10 Comments</li>
                </ul>
                <b className="text-white text-2xl font-aeonik group-hover:scale-[0.98] transition-all duration-300 ease-in-out">
                  How to deal with Unknown Classes during classification?
                </b>
                <p className="text-[#9EB3CF] text-base font-bwmss01">
                  A Convolutional Neural Network trained on the MNIST dataset
                  when presented images from the Devanagari dataset will wrongly
                  classify the Devanagari letter to one of the MNIST classes
                  0-9, usually with very high confidence. What can we do to fix
                  this?
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
