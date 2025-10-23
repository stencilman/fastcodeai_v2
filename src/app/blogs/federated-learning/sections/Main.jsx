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
    17: recommendBlog1,
    11: recommendBlog2,
    12: recommendBlog3,
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
                    src="/blogs/federated-learning/content/img1.jpeg"
                    width="400"
                    height="400"
                    alt=""
                  />
                </div>
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Federated Learning (FL)
                </h4>

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Federated Learning (FL) is a decentralised machine learning
                  approach that enables model training across multiple devices
                  while keeping the data localised. Unlike traditional machine
                  learning, where data is sent to a central server for training,
                  FL sends the model to each device, performs local training,
                  and aggregates the model updates on the server. This approach
                  preserves data privacy and security, as raw data never leaves
                  the device. FL offers a unique blend of privacy and real-time
                  insights. But {"it's"} true potential lies in specific use
                  cases.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  FL {"isn't"} just a buzzword; {"it's"} a transformative
                  approach for sectors like healthcare, finance, and automotive,
                  where data privacy is non-negotiable. With techniques like
                  Secure Aggregation and Differential Privacy, FL ensures data
                  remains at its source, addressing genuine privacy concerns.
                </p>
              </div>

              {/* topic-2 */}
              <div
                id="topic2"
                ref={(el) => (topicRefs.current[1] = el)}
                className="flex flex-col gap-[20px]"
              >
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Electric Vehicles (EVs) & FL: A Glimpse of the Future?
                </h4>

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Consider EVs. Here, each {"car's"} data remains onboard,
                  providing insights into battery health without compromising
                  user privacy. FL shines by enabling on-board sensors to train
                  machine learning models locally, predicting battery health in
                  real-time. These local models are aggregated on a central
                  server using various aggregation algorithms like FedAvg,
                  FedProx, FedSCG, etc, refined, and then redistributed,
                  ensuring adaptability to each {"car's"} unique conditions.
                  With techniques like Secure Aggregation and Differential
                  Privacy, FL ensures robust data privacy. The result? EV owners
                  get real-time battery insights without compromising data, and
                  the system scales seamlessly across numerous vehicles.
                  However, {"it's"} worth noting that the real-world variability
                  and the non-IID nature of data across vehicles present their
                  own set of challenges.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  While Federated Learning (FL) shines in scenarios like
                  Electric Vehicles (EVs), Healthcare, etc by prioritising data
                  privacy, {"it's"} not a catch-all solution. Its design, which
                  decentralises machine learning, can sometimes introduce
                  communication overheads, especially with bandwidth constraints
                  or geographically dispersed devices. The non-IID nature of
                  data across devices can pose challenges in model aggregation
                  and may lead to suboptimal model performance. Also, sometimes
                  it might happen that some devices are not available due to
                  connectivity issues, device failure etc. which poses an
                  additional challenge. In essence, FL is a potent tool in the
                  machine learning arsenal, but its efficacy hinges on the
                  specific problem {"it's"} applied to.
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
              <div className="mt-[15px] max-w-[380px] sm:max-w-[300px] lg:max-w-[400px] text-lg font-bwmss01 h-[46vw] sm:h-[210px] md:h-[19vw] lg:h-auto overflow-auto">
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
                    1. Federated Learning (FL)
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
                    2. Electric Vehicles (EVs) & FL: A Glimpse of the Future?
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
