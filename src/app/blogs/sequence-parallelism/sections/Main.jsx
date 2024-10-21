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
    2: recommendBlog1,
    3: recommendBlog2,
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
                {/* <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  What is Lid Driven Cavity (LDC)?
                </h4> */}

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  As deep learning models continue to grow in size and
                  complexity, efficiently training these massive networks has
                  become a significant challenge. Traditional parallelism
                  strategies like data parallelism and model parallelism have
                  been instrumental but come with their own limitations. Enter
                  sequence parallelism—a novel approach that addresses some of
                  these constraints, offering a new avenue for optimizing
                  large-scale model training.
                </p>
              </div>

              {/* topic-2 */}
              <div
                id="topic2"
                ref={(el) => (topicRefs.current[1] = el)}
                className="flex flex-col gap-[20px]"
              >
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  The Traditional Approaches: Data and Model Parallelism
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  <b>Data Parallelism</b> involves splitting the input batched
                  data across multiple GPUs. Each processor works independently
                  on its portion of the data using the same model parameters.
                  After computation, gradients are aggregated to update the
                  model synchronously. This method is relatively straightforward
                  and scales well with the number of processors. However, it is
                  not designed for models that exceed the memory capacity of a
                  single GPU.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  <b>Model Parallelism</b>, on the other hand, partitions the
                  model weights itself across multiple GPUs. Different layers or
                  components of the model are allocated to different processors.
                  While this allows for training larger models, it introduces
                  significant communication overhead between GPUs, potentially
                  leading to inefficiencies and slower training times.
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
                  Introducing Sequence Parallelism
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Traditional strategies like data parallelism and model
                  parallelism distribute workloads across multiple GPUs but
                  often encounter limitations when dealing with very large
                  models or long input sequences. In Sequence parallelism, the
                  input sequence is split across multiple GPUs, allowing for
                  efficient training of large models like transformers.
                  Utilizing the scatter and gather design patterns, presents a
                  novel solution by dividing input sequences across GPUs,
                  enabling efficient training without overwhelming memory
                  constraints.
                </p>

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  <b className="text-white">How Sequence Parallelism Works</b>
                  <br />
                  Utilizing this command within the VSCode Remote-SSH extension,
                  accessed via the Connect to Host option, presented the
                  password prompt directly. However, frequent password entries
                  for each new VSCode folder proved inefficient.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  <b className="text-white">
                    Attention Mechanism with Communication
                  </b>
                  <br />
                  Transformers and similar models rely on attention mechanisms
                  that require access to the entire sequence. To handle this:
                  Each GPU computes the key and value tensors for its segment.
                  GPUs then scatter these tensors, exchanging them so that every
                  GPU has access to the full set of keys and values. While this
                  exchange happens, GPUs continue computing the query tensors
                  for their segments, keeping them busy during communication.
                </p>
                <div className="text-[#9EB3CF] text-lg font-bwmss01">
                  <ul className="mb-0">
                    <li className="list-disc">
                      Each GPU computes the key and value tensors for its
                      segment.
                    </li>
                    <li className="list-disc">
                      GPUs then scatter these tensors, exchanging them so that
                      every GPU has access to the full set of keys and values.
                    </li>
                    <li className="list-disc">
                      While this exchange happens, GPUs continue computing the
                      query tensors for their segments, keeping them busy during
                      communication.
                    </li>
                  </ul>
                </div>
              </div>
              {/* end topic-3 */}

              {/* topic-4 */}
              <div
                id="topic4"
                ref={(el) => (topicRefs.current[3] = el)}
                className="flex flex-col gap-[20px]"
              >
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  System Design
                </h4>
                <div className=" bg-black rounded-[20px] shadow-[0px_3px_6px_#00000029]">
                  <Image
                    className="w-full h-full"
                    src="/blogs/sequence/system-design.png"
                    width="744"
                    height="355"
                    alt=""
                  />
                </div>
                <p className="text-[#9eb3cfcb] text-center text-base font-bwmss01">
                  Figure 2. DeepSpeed sequence parallelism (DeepSpeed-Ulysses)
                  design
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  <b>Figure 2</b> shows the core design of DeepSpeed-Ulysses
                  paper. As with the known transformer architecture, the design
                  consists of input sequences NNN partitioned across PPP
                  available devices. Each local N/PN/PN/P partition is projected
                  into queries (Q), keys (K), and values (V) embeddings. Next,
                  the QKV embeddings are gathered into global QKV through highly
                  optimized all-to-all collectives between the participating
                  compute devices. Following the all-to-all collective is the
                  attention computation per head, expressed in the form:
                </p>

                <div className="text-[#9EB3CF] text-lg font-bwmss01">
                  <p className="bg-[#293138] text-white p-[12px] rounded-2xl  break-words">
                    {" Outputcontext = Softmax((QKT )/ p(d))V"}
                  </p>
                </div>

                <div className="text-[#9EB3CF] text-lg font-bwmss01">
                  After the attention computation, another all-to-all collective
                  transforms the output context tensor of the attention
                  computation to sequence N/PN/PN/P parallel for subsequent
                  operators (MLP MatMul, layer norm, etc.) in the remaining
                  modules of the transformer layer block.
                </div>
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Global Attention Computation
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  With the complete keys and values, each GPU computes attention
                  scores for its queries against the entire sequence. This
                  computation is intensive and fully utilizes the {"GPUs'"}{" "}
                  capabilities. By employing the gather pattern, GPUs collect
                  the necessary information to perform these computations,
                  ensuring that each token can attend to every other token in
                  the sequence.
                </p>
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Updating Representations and Continuing Computation{" "}
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  GPUs update their token representations using the attention
                  outputs and proceed to process subsequent layers like
                  feed-forward networks. This continuous computation ensures
                  GPUs remain occupied, maintaining high efficiency throughout
                  the training process.
                </p>
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Synchronization Points
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  After certain layers, GPUs synchronize to maintain model
                  consistency. Efficient communication protocols minimize idle
                  time during these synchronization phases, ensuring that the
                  overall training process remains streamlined.
                </p>
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Backward Pass and Gradient Sharing
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  During training, each GPU computes gradients for its segment.
                  Necessary gradients are exchanged between GPUs to update
                  shared model parameters, keeping all GPUs engaged in both
                  computation and communication. This collaboration ensures that
                  the model converges correctly while maximizing resource
                  utilization.
                </p>

                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Efficiency and Scalability
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  By overlapping computation with communication, sequence
                  parallelism maximizes GPU utilization. GPUs are either
                  processing data or communicating essential information,
                  significantly reducing idle times. This method allows for
                  training larger models with longer sequences without exceeding
                  individual GPU memory limits, effectively scaling deep
                  learning models.
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
                  Real-World Implementations
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Projects like{" "}
                  <a
                    href="https://github.com/NVIDIA/Megatron-LM"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >{`NVIDIA's Megatron-LM`}</a>{" "}
                  and{" "}
                  <a
                    href="https://www.deepspeed.ai"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >{`Microsoft's DeepSpeed`}</a>{" "}
                  have successfully implemented sequence parallelism using
                  scatter and gather patterns:
                </p>
                <div className="text-[#9EB3CF] text-lg font-bwmss01">
                  <ul className="mb-0">
                    <li className="list-disc">
                      <b>Megatron-LM:</b> Utilizes sequence parallelism to
                      efficiently train large transformer models by optimizing
                      memory usage and computation across GPUs.
                    </li>
                    <li className="list-disc">
                      <b>DeepSpeed ULYSSES:</b> Provides advanced parallelism
                      strategies, including sequence parallelism, enabling the
                      training of models with billions of parameters while
                      maintaining high efficiency.
                    </li>
                  </ul>
                </div>
              </div>
              {/* end topic-5 */}

              {/* topic-6 */}
              <div
                id="topic6"
                ref={(el) => (topicRefs.current[5] = el)}
                className="flex flex-col gap-[20px]"
              >
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Benefits of Sequence Parallelism with Scatter and Gather
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  By employing the scatter and gather design patterns, sequence
                  parallelism offers several benefits:
                </p>

                <div className="text-[#9EB3CF] text-lg font-bwmss01">
                  <ul className="mb-0">
                    <li className="list-disc">
                      <b>Efficient GPU Utilization:</b> GPUs are consistently
                      engaged in computation or communication, maximizing
                      resource usage and reducing idle times.
                    </li>
                    <li className="list-disc">
                      <b>Reduced Memory Footprint:</b> Each GPU handles a
                      smaller portion of the sequence, preventing memory
                      overload and allowing for larger models and longer
                      sequences.
                    </li>
                    <li className="list-disc">
                      <b>Preserved Model Performance: </b>Gather operations
                      ensure that computations requiring global context, like
                      attention mechanisms, have access to the entire sequence,
                      maintaining model accuracy.
                    </li>
                    <li className="list-disc">
                      <b>Scalability: </b>The scatter and gather patterns enable
                      the model to scale across multiple GPUs seamlessly,
                      facilitating the training of increasingly large models.
                    </li>
                  </ul>
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
                    2. The Traditional Approaches
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
                    3. Introducing Sequence Parallelism
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
                    4. System Design
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
                    5. Implementations
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
                    6. Benefits
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
