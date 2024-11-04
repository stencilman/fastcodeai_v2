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
    12: recommendBlog1,
    14: recommendBlog2,
    15: recommendBlog3,
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
                {/* <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  What is Lid Driven Cavity (LDC)?
                </h4> */}

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  I know firsthand how challenging it can be for small startups
                  to break into the world of large diffusion models. The high
                  cost of hardware can make it feel like an insurmountable
                  barrier. {"I've"} been there, feeling overwhelmed and unsure
                  of how to proceed. {"That's"} why I want to share our
                  experience—not to boast, but to help others who might be in
                  the same situation.
                </p>
              </div>

              {/* topic-2 */}
              <div
                id="topic2"
                ref={(el) => (topicRefs.current[1] = el)}
                className="flex flex-col gap-[20px]"
              >
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Our Challenge
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  We needed to train large diffusion models but lacked the
                  resources for expensive hardware setups. Instead of letting
                  this halt our progress, we sought out creative solutions to
                  work within our means.
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
                  Strategies That Helped Us Overcome Hardware Constraints
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  <b className="text-white">
                    {" "}
                    1. Memory Optimization Techniques
                  </b>
                  <br />
                  <b> ZeRO Stage 2 and Stage 3:</b> We utilized the Zero
                  Redundancy Optimizer (ZeRO) to significantly reduce memory
                  usage. Stage 2 allowed us to partition optimizer states and
                  gradients across GPUs, while Stage 3 took it a step further by
                  partitioning the model parameters themselves. Yes, this led to
                  larger checkpoints—sometimes up to 150GB—but the memory
                  savings were invaluable.
                </p>

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  <b className="text-white">2. Precision Formats</b>
                  <br />
                  <b> bfloat16 and FP8:</b> Precision formats play a crucial
                  role in performance and memory consumption. While FP8 offers
                  benefits on advanced GPUs like {"NVIDIA's"} H100 and L40
                  series, we found <b>bfloat16</b> to be a widely supported
                  alternative that effectively managed memory without
                  compromising performance.
                </p>

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  <b className="text-white">3. Efficient Optimizers</b>
                  <br />
                  <b>8-bit Optimizers:</b> Switching to 8-bit optimizers, such
                  as the 8-bit Adam optimizer, was a game-changer. By quantizing
                  momentum and variance terms to 8-bit precision, we reduced
                  memory requirements without sacrificing model convergence or
                  accuracy.
                </p>

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  <b className="text-white">
                    4. Resource Sharing and Collaboration
                  </b>
                  <br />
                  <b> Community Partnerships:</b> We reached out to other
                  researchers and institutions. These collaborations not only
                  provided access to shared resources but also fostered a
                  supportive network for problem-solving.
                  <br />
                  <b> Cloud Credits and Grants:</b> We explored programs
                  offering computational resources or funding assistance. These
                  opportunities can be a lifeline for startups needing extra
                  computational power. E.g. a mercury bank account in the US
                  gives you a 5000 USD AWS credits. Similarly, SVB bank, etc.
                </p>

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  <b className="text-white">5. Incremental Experimentation</b>
                  <br />
                  <b>Smarter Experiment Design:</b> Instead of running countless
                  full-scale experiments, we tested ideas on smaller subsets of
                  data. This approach saved time and resources, allowing us to
                  refine our models efficiently.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  <b className="text-white">6. Group Query Attention (GQA)</b>
                  <br />
                  Implementing GQA helped us reduce the number of keys in
                  attention mechanisms, decreasing computational complexity and
                  memory usage.
                </p>
              </div>
              {/* end topic-3 */}

              {/* topic-4 */}
              <div
                id="topic4"
                ref={(el) => (topicRefs.current[3] = el)}
                className="flex flex-col gap-[20px]"
              >
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Embracing Cost-Effective Solutions
                </h4>

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  We also turned to platforms like{" "}
                  <a
                    href="https://vast.ai"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    Vast.ai
                  </a>{" "}
                  for more affordable hardware options. While this came with
                  trade-offs—such as occasional hardware issues with GPUs—the
                  cost benefits were significant. For example, running 8x H100s
                  costs about $20/hr, whereas 2x L40s are just $2/hr.
                </p>
              </div>
              {/* end topic-4 */}

              {/* topic-5 */}
              <div
                id="topic5"
                ref={(el) => (topicRefs.current[4] = el)}
                className="flex flex-col gap-[20px]"
              >
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Exciting Developments Ahead
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  {"We're"} thrilled about the recent release of{" "}
                  <a
                    href="https://huggingface.co/spaces/stabilityai/stable-diffusion-3.5-medium"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    Stable Diffusion 3.5 Medium weights
                  </a>
                  . This advancement allows us to push our models further
                  without incurring additional costs.
                </p>
              </div>
              {/* end topic-5 */}

              {/* topic-6 */}
              <div
                id="topic6"
                ref={(el) => (topicRefs.current[5] = el)}
                className="flex flex-col gap-[20px]"
              >
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Why {"I'm"} Sharing This
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  I remember what it felt like to face these challenges without
                  a clear path forward. My hope is that by sharing our journey,
                  I can help others navigate similar obstacles. {"You're"} not
                  alone, and with a bit of creativity and resourcefulness,{" "}
                  {"it's"}
                  possible to achieve great things even on a tight budget.
                </p>{" "}
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  If {"you're"} facing similar challenges or have questions
                  about the strategies {"we've"} used, please {"don't"} hesitate
                  to reach out.
                  {"Let's"} support each other in pushing the boundaries of{" "}
                  {"what's"}
                  possible.
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
          <div className="relative md:sticky md:top-[120px] h-[280px] sm:h-[300px] md:h-fit ">
            <Image
              className="min-h-[250px] min-w-[267px] md:min-w-[36vw] lg:min-w-[366px] relative"
              src="/blogs/rec.svg"
              width="400"
              height="500"
              alt=""
            />
            <div className="absolute top-0 ">
              <h6 className="text-white text-lg font-aeonik px-[23px] pt-[23px]">
                TABLE OF CONTENTS
              </h6>
              <div className="mt-[15px] max-w-[400px] text-lg font-bwmss01 h-[46vw] sm:h-[210px] md:h-[19vw] lg:h-[218px] overflow-auto">
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
                    1. About
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
                    2. Challenges
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
                    3. Strategies
                  </p>
                </a>
                <a
                  onClick={() => {
                    scrollToTopic("topic4");
                    setTopicHighlight("topic4");
                  }}
                >
                  <p
                    className={`pl-[20px] pb-[4px] pr-[15px] cursor-pointer transition-all duration-300 ease-in-out lg:hover:text-[#3784e9] ml-[2px] mb-[4px] ${
                      topicHighlight === "topic4"
                        ? "border-l-[#036BF0] text-[#036BF0] border-l-[3px]"
                        : "text-[#9EB3CF]"
                    } `}
                  >
                    4. Cost-Effective Solutions
                  </p>
                </a>

                <a
                  onClick={() => {
                    scrollToTopic("topic5");
                    setTopicHighlight("topic5");
                  }}
                >
                  <p
                    className={`pl-[20px] pb-[4px] pr-[15px] cursor-pointer transition-all duration-300 ease-in-out lg:hover:text-[#3784e9] ml-[2px] mb-[4px] ${
                      topicHighlight === "topic5"
                        ? "border-l-[#036BF0] text-[#036BF0] border-l-[3px]"
                        : "text-[#9EB3CF]"
                    } `}
                  >
                    5. Exciting Developments
                  </p>
                </a>
                <a
                  onClick={() => {
                    scrollToTopic("topic6");
                    setTopicHighlight("topic6");
                  }}
                >
                  <p
                    className={`pl-[20px] pb-[4px] pr-[15px] cursor-pointer transition-all duration-300 ease-in-out lg:hover:text-[#3784e9] ml-[2px] mb-[4px] ${
                      topicHighlight === "topic6"
                        ? "border-l-[#036BF0] text-[#036BF0] border-l-[3px]"
                        : "text-[#9EB3CF]"
                    } `}
                  >
                    6. Why Sharing
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
