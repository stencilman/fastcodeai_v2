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
    1: recommendBlog1,
    11: recommendBlog2,
    12: recommendBlog3,
  } = recommendBlogsDataList;

  const [topicHighlight, setTopicHighlight] = useState("topic1");  const topicRefs = useRef([null, null, null]);

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
                  What are KANs and what can they do?
                </h4>
                <div className="flex w-full gap-[5%]">
                  <Image
                    className="rounded-[20px] w-[100%]"
                    src="/blogs/kans/hero/blog-kans.png"
                    width="400"
                    height="400"
                    alt=""
                  />
                </div>
                <p className="text-[#9eb3cfcb] text-center text-base font-bwmss01">
                  Figure 2.1 in the KAN paper from Ziming Liu et al.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  KANs are based on the Kolmogorov-Arnold representation
                  theorem, which says that if 𝑓 is a multivariate continuous
                  function on a bounded domain, then 𝑓 can be written as a
                  finite composition of continuous univariate functions and the
                  binary operation of addition. Putting it mathematically:
                </p>
                <div className="flex w-full gap-[5%]">
                  <Image
                    className="rounded-[20px] w-[100%]"
                    src="/blogs/kans/content/kans1.png"
                    width="400"
                    height="400"
                    alt=""
                  />
                </div>
                <p className="text-[#9eb3cfcb] text-center text-base font-bwmss01">
                  A multivariate continuous function can be written as a finite
                  composition of continuous univariate functions
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  {
                    "The equation looks complex, but it is just a function which takes a vector input x (hence multivariate), and gives out a real valued output (which is by definition of any function). It does so by applying only univariate functions (or single variable functions) ϕ as described above, and summing up the outputs of these ϕ's."
                  }
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Why is this relevant? Well, because this is equivalent to the{" "}
                  <b>Universal Approximation Theorem </b>- the theoretical
                  bedrock of the neural networks we have come to know and love -
                  which theoretically guarantees that we can approximate any
                  possible continuous function arbitrarily well enough, given we
                  have a complex enough neural network.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  KANs are basically a way of extending the concept of the above
                  equation (which can be thought of as a KAN which is 2 layers
                  deep. This will become more clear in a diagram later), and
                  being able to make arbitrarily deep networks.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  {
                    "  You may wonder that if a 2 layer KAN can represents that equation, which can in turn learn any function, why do we need deeper KANs? Well because there is a catch. We can’t use the power of the Kolmogorov-Arnold representation theorem as the continuous univariate functions ɸ in the original equation above are allowed to be non-smooth and even fractal, which may not be learnable in practice. Hence, we will need more layers to learn more complex functions."
                  }
                </p>
              </div>
              {/* topic-2 */}
              <div
                id="topic2"
                ref={(el) => (topicRefs.current[1] = el)}
                className="flex flex-col gap-[20px]"
              >
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Why should we care about KANs?
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Well, they are a novel way of thinking about neural networks,
                  which are in essence high dimensional function approximating
                  black boxes. They also offer certain advantages over MLPs, the
                  main advantages being:
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  1. <b>Better performance</b> with lesser number of parameters
                  than MLPs.
                  <br />
                  2. <b>Explainability!</b> something that has been missing from
                  deep neural networks.
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
                  B-splines
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  {`  Before proceeding to the details of the KAN, we first need to get a feel of the concepts of B-splines. Imagine you're drawing a curve on a piece of paper. Normally, you might use a pencil and just sketch it out. But what if you wanted to draw a really smooth curve that goes through specific points? That's where B-splines come in!`}
                  <b>
                    {" "}
                    B-splines are a way of creating smooth curves that pass
                    through a set of ‘control points’.
                  </b>
                  {`These control points are basically points that define the shape of the curve. The curve itself is made up of smaller segments called "splines".`}
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Now,{" here's"} where it gets interesting: the degree of the
                  B-spline determines how the curve behaves between the control
                  points. If the degree is low, like 1 or 2, the curve might
                  bend sharply between points. But if the degree is higher, like
                  3 or 4, the curve will be smoother and flow more gracefully
                  between the points.
                </p>
                <div className="flex w-full gap-[5%]">
                  <Image
                    className="rounded-[20px] w-[100%]"
                    src="/blogs/kans/content/kans2.png"
                    width="400"
                    height="400"
                    alt=""
                  />
                </div>
                <p className="text-[#9eb3cfcb] text-center text-base font-bwmss01">
                  Figure 2.2 from the KAN paper, zooming into an {"edge"} of the
                  KAN
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  {
                    " In the above figure, ɸ(x) is the black curve, which is formed by using a weighted sum of the control points c(i)'s corresponding to points t(i)'s on the x-axis. The weights are determined by something called the Basis functions B(i)'s (the curves in color below the black curve). Notice that when x=t(0), B1(x) i.e. the green curve, has the maximum value, hence the control point c(0), has the maximum weightage and hence influence on ɸ near point t(0). Similarly you can see that the influence of say c(7) is 0, while c(3) is a small non zero value. "
                  }
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  {
                    " Now that you understand that control points essentially form the shape of the curve, and that at the end of the day we need to learn some continuous function, can you guess what the learnable parameters of KAN are? Well of course the c(i)'s! The basis functions on the other hand are ugly looking recursive functions, and you can check it out"
                  }{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/B-spline#Definition"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    here.
                  </a>{" "}
                  {
                    "Furthermore, as you can guess higher the number of ‘grid points’ (G given in the above graph), better the approximation of the underlying curve."
                  }
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
                  Finally, the Kolmogorov-Arnold Network
                </h4>
                <div className="flex w-full gap-[5%]">
                  <Image
                    className="rounded-[20px] w-[100%]"
                    src="/blogs/kans/content/kans3.png"
                    width="400"
                    height="400"
                    alt=""
                  />
                </div>
                <p className="text-[#9eb3cfcb] text-center text-base font-bwmss01">
                  A two layer network with input dimension = 2, hidden dimension
                  = 5, and output dimension = 1.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  The original equation described in the first section can be
                  depicted as a 2-layer KAN as shown above. The nodes are where
                  the summation operation takes place, and the learnable
                  activations ɸ are on the edges, in contrast to MLPs where the
                  edges have learnable weights instead, and the activation is
                  fixed and is performed on the nodes.
                </p>
                <div className="flex w-full gap-[5%]">
                  <Image
                    className="rounded-[20px] w-[100%]"
                    src="/blogs/kans/content/kans4.png"
                    width="400"
                    height="400"
                    alt=""
                  />
                </div>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  The authors define ɸ(x) as given above, and{" "}
                  <b>
                    spline(x) is parametrized as a linear combination of
                    B-splines
                  </b>{" "}
                  as we discussed before this section. They include the w as a
                  factor to better control the overall magnitude of this
                  activation function. They also update the grid (size G) on the
                  fly according to its input activations, to address the issue
                  that splines are defined on bounded regions (for example t(0)
                  to t(5) in the previous sections spline curve diagram) but
                  activation values can evolve out of the fixed region during
                  training.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Furthermore, the authors give a proof giving a{" "}
                  <b>
                    theoretical upper bound to the error between the actual
                    function and the learned function of the network,
                  </b>{" "}
                  which **<i>drum rolls</i>**, is independent of the dimension
                  of the data (and actually depends on the grid size G)! This is
                  good news as KANs are{" "}
                  <b>less prone to the Curse of Dimensionality</b> than MLPs
                  (they are still prone to it, because of constant factor C in
                  the upper bound which may be dependent on the dimension of the
                  data. The authors leave that investigation to future work).
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Assuming <i>L</i> layers of equal width <i>N</i>, and with
                  each spline of degree (usually k = 3) with G grid points,
                  there are in total <i>{`O(N^2*L*(G+k)) ∼ O(N^2*L*G)`}</i>{" "}
                  parameters. In contrast, an MLP with depth <i>L</i> and width{" "}
                  <i>N</i> only needs <i>O(N^2*L)</i> parameters, which appears
                  to be more efficient than KAN. But, KANs require much smaller{" "}
                  <i>N</i> than MLPs, which not only saves parameters (at the
                  cost of more complex optimization of the network), but also
                  achieves better generalization and facilitates
                  interpretability.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  When we say it facilitates interpretability, it is in the
                  sense that you can prune the network to remove edges and nodes
                  which {"don't"} contribute much to the network, and can
                  substitute the activations by their corresponding univariate
                  lookalikes. So if an activation on an edge seems to behave
                  like a sine wave, we can fit a sine function using linear
                  regression, and finally see a composition of such univariate
                  functions making the target function or the function that the
                  KAN represents! You can check out the implementation details
                  of how the authors do it on their GitHub repo{" "}
                  <a
                    href="https://github.com/KindXiaoming/pykan/tree/master"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    here.
                  </a>
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  <b>Sparsification</b> of the network and subsequent{" "}
                  <b>pruning</b> using a <b>thresholding</b> technique is
                  discussed in the paper, and not too complicated. The authors
                  propose <b>regularization using L1 norm,</b> but{" "}
                  <b>define the L1 norm for activations</b> instead of weights
                  like we usually do in an MLP.
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
                  Final Thoughts
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  While the idea of KANs look promising, we take it with a pinch
                  of salt, mainly because of the two following reasons
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  1. The{" "}
                  <b>
                    authors do not show any experiments with real world
                    datasets,
                  </b>{" "}
                  not even the MNIST dataset which is the first dataset
                  beginners use when starting off with computer vision. They
                  only use toy examples, trying to fit the model to data
                  generated by complex mathematical equations (and do find
                  interesting results which you should check out in the paper).
                  <br />
                  2. The authors{" "}
                  <b>
                    {"don't"} give any details of training any network deeper
                    than 5 layers.
                  </b>{" "}
                  We may give them the benefit of the doubt that there{" "}
                  {"doesn't"} exist any optimized libraries available to
                  efficiently build deeper KANs, but the promise of KANs is yet
                  to be seen in real world applications, and whether they can
                  replace the already extremely efficient MLP.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  The authors also do mention that training is{" "}
                  <b>10x slower than MLPs,</b> which is the cost of learning
                  more accurate and interpretable functions. While it is too
                  soon to claim that this paper is as revolutionary as{" "}
                  <i>backpropagation or attention is all you need,</i> there
                  certainly seems potential in this novel approach of looking at
                  neural networks. Let us know your thoughts in the comments and
                  any interesting observations you got if you got a chance to
                  use KANs!
                </p>
              </div>
              {/* end topic-5 */}
              {/* topic-6 */}

              {/* <div
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
              </div> */}
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
                    2. Why should we care about KANs?
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
                    3. B-splines
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
                    4. The Kolmogorov-Arnold Network
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
                    5. Final Thoughts
                  </p>
                </a>
                {/* <a
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
                </a> */}
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
