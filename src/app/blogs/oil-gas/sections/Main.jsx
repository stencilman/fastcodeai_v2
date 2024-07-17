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
                {/* <div className="p-[40px] bg-white rounded-[20px] shadow-[0px_3px_6px_#00000029]">
                  <Image
                    src="/blogs/unknown/main/known-unknown.webp"
                    width="744"
                    height="355"
                    alt=""
                  />
                </div> */}
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  About
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Oil & Gas which was once was a lucrative investment, now
                  struggles to ensure the same level of light. A lot of things
                  have changed in the past few years which has pushed the Oil &
                  Gas industry into a less profitable terrain for the
                  investments. The slump in the oil market and the resulting
                  fall in new investments has drastically changed the Oil & Gas
                  EPC market. This has led to fewer interests from investors and
                  projects for EPC clients implying a low number of deals in the
                  market. This shift has led to a reduction in the number of{" "}
                  {"Proposals to Conversion"} ratio. In order to sustain the
                  same order every year, EPC companies are having to respond to
                  almost twice the number of proposals. This has put the
                  scalability of the proposal process to test.
                </p>
              </div>
              {/* topic-2 */}
              <div
                id="topic2"
                ref={(el) => (topicRefs.current[1] = el)}
                className="flex flex-col gap-[20px]"
              >
                <div className="flex w-full gap-[5%]">
                  <Image
                    className="rounded-[20px] w-[100%]"
                    src="/blogs/oil-gas/content/pic1.webp"
                    width="400"
                    height="400"
                    alt=""
                  />
                </div>
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Leveraging P&ID
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  One of the cumbersome and manual processes is to read the
                  hundreds of P&ID diagrams and arrive at the correct MTO
                  (Material take off). This process is highly time-consuming and
                  incurs miscalculations due to manual errors. This could end up
                  affecting overall profitability in the project. Also most of
                  the times, EPC companies keep a high buffer in order to hedge
                  the risk of last-minute change required because of incorrect
                  MTO created manually by the engineers. This is a risky affair
                  altogether as the process is monotonic and requires a lot of
                  human-involvement, leaving a large room for standardization.
                </p>
              </div>

              {/* end topic-2 */}
              {/* topic-3 */}

              <div
                id="topic3"
                ref={(el) => (topicRefs.current[2] = el)}
                className="flex flex-col gap-[20px]"
              >
                <div className="flex w-full gap-[5%]">
                  <Image
                    className="rounded-[20px] w-[100%]"
                    src="/blogs/oil-gas/content/pic2.webp"
                    width="400"
                    height="400"
                    alt=""
                  />
                </div>
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Fast Code Solution
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  With a leading EPC Oil & Gas player, Fast Code has automated
                  the process of developing AutoMTO, thereby saving a huge
                  amount of time and resources for the in terms of man-hours and
                  costs for the EPC giant. Fast Code leveraged Artificial
                  Intelligence techniques which automatically detects all the
                  instruments, pipes, texts and codes. This step takes less than
                  a minute to extract all the MTO information from a P&ID.
                </p>
              </div>
              {/* end topic-3 */}

              {/* topic-4 */}

              <div
                id="topic4"
                ref={(el) => (topicRefs.current[3] = el)}
                className="flex flex-col gap-[20px]"
              >
                <div className="flex w-full gap-[5%]">
                  <Image
                    className="rounded-[20px] w-[100%]"
                    src="/blogs/oil-gas/content/pic3.webp"
                    width="400"
                    height="400"
                    alt=""
                  />
                </div>
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Extracting P&ID from a simple PDF
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Reading of P&ID from pdf and image-based format: Computer
                  vision techniques were employed to read P&ID files in
                  PDF/image form and identify the text, lines and other
                  components. Machine learning was leveraged to identify and
                  locate all the Equipment, Instruments, and Valves. It also
                  identifies T-joints, Spec Brakes, Reducers etc. involved in
                  MTO generation. This complete process which takes an engineer
                  3-4 days of work, is finished by AutoMTO in 3 steps as shown
                  in the above figure. The components were then associated with
                  the lines and thus preparing the Line List, Equipment List and
                  the full MTO automatically. The process improved the overall
                  efficiency of reading and reduced the time taken to process
                  per P&ID sheet by a factor of 15. Provision has also been
                  provided to bring in a human in the loop to review and make
                  necessary modifications to ensure 100% accuracy of MTO.
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
                  Toward 100% Accuracy
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  AutoMTO as a state of the art system lets achieve 100%
                  accuracy whilst preparing MTO and this accuracy is then
                  translated into better sales, lean buffer size and
                  competitiveness in the bidding stage. The solution achieved
                  100% accuracy in the generation of MTO. This reduced
                  engineering work drastically by leveraging one-shot and active
                  learning AI techniques. The product has led to saving about
                  90% the time taken to generate the MTO. The version tracking
                  mechanism has allowed more efficient identification of changes
                  made to the input P&IDs.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Lean Buffer and Competitiveness: The solution ensured a more
                  accurate MTO and thus provides a higher degree of confidence
                  to the proposal owners. This has allowed the client to reduce
                  the Material cost buffer, thus making the proposals more
                  competitive. Fast Code enabled the EPC player to create MTO
                  with leaner buffer size and in the process making the bids for
                  EPC much more competitive.
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
                  Impact
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Divisions like Sales, Proposals, Procurement get direct
                  advantage in terms of this impact as AutoMTO ensures
                  digitization benefits are distributed across the system
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  1. 14x Improvement in Efficiency in reading and processing
                  P&ID sheets
                  <br />
                  2. 90% Reduction in time while reading and generating an MTO
                  <br />
                  3. 100% Accuracy generated from the solution
                  <br />
                  4. {">"} $3m Cost saved per year (40 proposals/year)
                  <br />
                </p>
              </div>
              {/* end topic-6 */}
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
                    2. Leveraging P&ID
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
                    3. Solution
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
                    4. Extracting P&ID from a simple PDF
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
                    5. Toward 100% Accuracy
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
                    6. Impact
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
