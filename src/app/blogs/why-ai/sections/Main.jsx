"use client";
import React from "react";
import SocialShare from "../../components/SocialShare";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/component/Button";

const Main = () => {
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

  return (
    <div className="w-full h-auto pt-[100px] pb-[50px] px-[35px] md:px-[45px] lg:px-[80px] flex justify-center flex-col ">
      <div>
        <div className="flex flex-col-reverse md:flex-row gap-[50px] justify-center">
          <div className="flex flex-col md:flex-row gap-[50px] ">
            <SocialShare />
            <div className="md:w-[621%] md:max-w-[822px] flex flex-col gap-[30px] ">
              <div className="p-[40px] bg-white rounded-[20px] shadow-[0px_3px_6px_#00000029]">
                <Image
                  src="/blogs/why-ai/main/img1-2.png"
                  width="744"
                  height="355"
                  alt=""
                />
              </div>
              {/* content */}
              {/* topic-1 */}
              <div id="topic1" className="flex flex-col gap-[20px]">
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Task 1: Sorting a list of integers
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  What do we do if want to sort a list of integers [6, 99, 1,
                  108, 4, 6, 22] in ascending order?
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Well, we could simply write a function similar to the
                  rule-based algorithm on the left in picture above (bubble
                  sort) and we would be done. The input to our algorithm will be
                  the list above and the output will the be sorted list [1, 4,
                  6, 6, 22, 99, 108].
                </p>
              </div>
              {/* topic-2 */}
              <div id="topic2" className="flex flex-col gap-[20px]">
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Task 2: Reading hand-written digit{"1"}
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Now, let us suppose that our algorithm needs to decide if an
                  image contains hand written digit {"1"}.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Images can be represented using a 2D array as shown above. In
                  an image, white is usually represented using the value 255,
                  black with 0 and gray with a value between 0-255. The image
                  above of size 28x28 pixels, represented using a 2D array of
                  size 28x28.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  So, the input to our algorithm would be a 2D array of size
                  28x28. The output needs to be yes it indeed consists of the
                  hand-written digit {"1"} and no otherwise.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  So, how can we do this using a rule-based algorithm?
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Well, perhaps we can try and fit a line (orange) over the
                  non-white pixels and then measure the angle θ that this line
                  makes with the vertical axis as shown below. And, if this
                  angle θ is say between -30 to +30, then we would output yes
                  and otherwise no.
                </p>
                <div className="flex w-full gap-[5%]">
                  <Image
                    className="rounded-[20px] w-[47%]"
                    src="/blogs/why-ai/content/img1.jpeg"
                    width="400"
                    height="400"
                    alt=""
                  />
                  <Image
                    className="rounded-[20px] w-[47%]"
                    src="/blogs/why-ai/content/img2.jpeg"
                    width="400"
                    height="400"
                    alt=""
                  />
                </div>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  And this algorithm would even do a good job for images which
                  look like the ones in the figure above. However, if we wanted
                  our algorithm to be really robust, our algorithm should
                  correctly recognize {"1"} written in different handwritings
                  like shown below. Now, the current version of our algorithm
                  may not work as desired on all the images below, but perhaps
                  we can tweak it by adding more conditions, by fitting multiple
                  lines, etc.
                </p>
                <div className="flex w-full gap-[5%]">
                  <Image
                    className="rounded-[20px] w-[100%]"
                    src="/blogs/why-ai/content/img3.jpeg"
                    width="400"
                    height="400"
                    alt=""
                  />
                </div>
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
                  <Button to="" name="Know More" />
                </div>
              </div>
            </div>
          </div>
          {/* nav */}
          <div className="relative">
            <Image
              className=""
              src="/blogs/rec.svg"
              width="400"
              height="500"
              alt=""
            />
            <div className="absolute top-0 ">
              <h6 className="text-white text-lg font-aeonik px-[23px] pt-[23px]">
                TABLE OF CONTENTS
              </h6>
              <div className="mt-[15px] max-w-[400px] text-lg font-bwmss01 text-[#9EB3CF]">
                <a onClick={() => scrollToTopic("topic1")}>
                  <p className="pl-[20px] pb-[4px] pr-[15px] ml-[2px] mb-[4px] border-l-[3px] border-l-[#036BF0] text-[#036BF0]">
                    1. Sorting a list of integers
                  </p>
                </a>
                <a onClick={() => scrollToTopic("topic2")}>
                  <p className="pl-[20px] pb-[4px] pr-[15px] ml-[2px] mb-[4px] ">
                    2. Reading hand-written digit {"1"}
                  </p>
                </a>
                <p className="pl-[20px] pb-[4px] pr-[15px] ml-[2px] mb-[4px] ">
                  3. Reading hand-written digit {"2"}
                </p>
                <p className="pl-[20px] pb-[4px] pr-[15px] ml-[2px] mb-[4px] ">
                  4. Solution: Machine Learning or Data-Driven algorithms.
                </p>
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
        <div className="w-full relative flex flex-col md:flex-row gap-[56px] mt-[90px] md:mt-[220px]">
          {/* Blog Post 1 */}
          <div className="relative">
            <div>
              <Image
                src="/blogs/read-more/img1-2.png"
                width="376"
                height="353"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <ul className="flex gap-[13px] text-xs font-bwmss01 items-baseline mt-[20px] pl-[12px]">
                <li>Arjun Jain</li>
                <li className="text-[33px]">.</li>
                <li>Feb 4 2021</li>
                <li className="text-[33px]">.</li>
                <li>10 Comments</li>
              </ul>
              <b className="text-white text-2xl font-aeonik">
                To ML or not to ML, that is the question.
              </b>
              <p className="text-[#9EB3CF] text-base font-bwmss01">
                When do rule-based algorithms not work? When do we need machine
                learning (ML) based algorithms? Let us try and answer this
                question using the tasks.
              </p>
            </div>
          </div>
          {/* Blog Post 2 */}
          <div className="relative md:top-[-70px]">
            <div>
              <Image
                src="/blogs/read-more/img3-2.png"
                width="376"
                height="353"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <ul className="flex gap-[13px] text-xs font-bwmss01 items-baseline mt-[20px] pl-[12px]">
                <li>Arjun Jain</li>
                <li className="text-[33px]">.</li>
                <li>Feb 4 2021</li>
                <li className="text-[33px]">.</li>
                <li>10 Comments</li>
              </ul>
              <b className="text-white text-2xl font-aeonik">
                Oil & Gas EPC - Digitizing P&ID
              </b>
              <p className="text-[#9EB3CF] text-base font-bwmss01">
                When do rule-based algorithms not work? When do we need machine
                learning (ML) based algorithms? Let us try and answer this
                question using the tasks.
              </p>
            </div>
          </div>
          {/* Blog Post 3 */}
          <div className="relative">
            <div>
              <Image
                src="/blogs/read-more/img2-2.png"
                width="376"
                height="353"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <ul className="flex gap-[13px] text-xs font-bwmss01 items-baseline mt-[20px] pl-[12px]">
                <li>Arjun Jain</li>
                <li className="text-[33px]">.</li>
                <li>Feb 4 2021</li>
                <li className="text-[33px]">.</li>
                <li>10 Comments</li>
              </ul>
              <b className="text-white text-2xl font-aeonik">
                How to deal with Unknown Classes during classification?
              </b>
              <p className="text-[#9EB3CF] text-base font-bwmss01">
                When do rule-based algorithms not work? When do we need machine
                learning (ML) based algorithms? Let us try and answer this
                question using the tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
