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
    9: recommendBlog1,
    10: recommendBlog2,
    4: recommendBlog3,
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
                <div className="flex w-full gap-[5%]">
                  <Image
                    className="rounded-[20px] w-[100%]"
                    src="/blogs/crafting-visions/content/img1.jpeg"
                    width="400"
                    height="400"
                    alt=""
                  />
                </div>
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Democratizing Visual Creativity:
                </h4>

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  DALL-E 3 is a groundbreaking advancement, enabling users to
                  translate intricate ideas into highly accurate images
                  effortlessly. It has democratized visual creativity, making it
                  accessible to a wider audience without the need for deep
                  prompt engineering expertise.
                </p>
              </div>
              {/* topic-2 */}
              <div
                id="topic2"
                ref={(el) => (topicRefs.current[1] = el)}
                className="flex flex-col gap-[20px]"
              >
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Overcoming Limitations:
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Previous models like Midjourney and Stable Diffusion excelled
                  in generating high-quality images of solitary characters and
                  objects but struggled with scenes involving specific
                  relationships and interactions between multiple objects.
                  DALL-E 3 has made significant strides in generating images
                  that represent intricate scenes with multiple objects
                  maintaining specific spatial and interactive relationships, a
                  challenge that predecessors like Midjourney and Stable
                  Diffusion found formidable. For instance:
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  <b>Prompt:</b>{" "}
                  {` "A bustling city street at night with people walking, neon signs glowing, cars parked on the side, and a full moon visible between the skyscrapers."`}
                  <br />
                  <b>Complexity:</b> The model has to generate a lively and
                  dynamic scene, placing multiple elements like people, cars,
                  and buildings accurately, and managing light and shadow to
                  reflect the nighttime setting and glowing neon signs.
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
                  Integration with ChatGPT:
                </h4>

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  OpenAI has seamlessly integrated DALL-E 3 with ChatGPT,
                  reducing the friction in transitioning from an idea to an
                  image and allowing ChatGPT to act as a creative partner.
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
                  Ethical and Legal Foresight:
                </h4>

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  OpenAI has implemented measures to respect and protect the
                  creative rights of artists, addressing potential legal and
                  ethical disputes by allowing artists to opt out their work
                  from training datasets and refusing to replicate the styles of
                  living artists.
                </p>

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  DALL-E 3 opens up new horizons in AI-driven art creation,
                  posing intriguing questions about the implications on
                  traditional art forms and offering unprecedented opportunities
                  for exploring visual creativity. It stands as a testament to
                  the potential of AI to revolutionize visual representation and
                  creativity.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Currently in research preview, DALL-E 3 ]will be available to
                  ChatGPT Plus and Enterprise customers in October, via the API
                  and in Labs later this fall, with images created being the
                  property of the creator without needing permission to reprint,
                  sell or merchandise them.
                </p>
              </div>
              {/* end topic-4 */}

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
          <div className="relative md:sticky md:top-[120px] h-[280px] sm:h-[300px] md:h-fit">
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
                    1. Democratizing Visual Creativity
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
                    2. Overcoming Limitations
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
                    3. Integration with ChatGPT
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
                    4. Ethical and Legal Foresight
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
