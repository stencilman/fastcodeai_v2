import Link from "next/link";
import React from "react";

const LatestBlogs = () => {
  return (
    <div className="w-full h-auto px-[20px] md:px-[50px] lg:px-[100px] pt-[150px] pb-[200px]">
      <div className="mb-[40px]">
        <h1 className="text-[51px] text-white font-aeonik tracking-wide">
          Latest Blog
        </h1>
      </div>

      <div className="grid grid-cols-1 grid-rows-7 md:grid-cols-2 md:grid-rows-3 lg:grid-rows-4 2xl:grid-cols-3 2xl:grid-rows-3 gap-[30px] w-full">
        <div className=" lg:col-span-2">
          <Link href="/blogs/why-ai">
            <div className="rounded-[20px] w-full bg-cover 2xl:w-[833px] h-[327px] bg-no-repeat bg-blog1 relative p-[20px]">
              <div className="absolute bottom-[20px]">
                <h3 className="text-white text-2xl font-aeonik tracking-wide mb-[15px]">
                  The Dilemma: To ML or Not to ML?
                </h3>
                <div className="flex gap-[10px] items-center">
                  <div className="border border-[#707070] rounded-full bg-white w-[50px] h-[50px]"></div>
                  <div>
                    <b className="text-white font-bold font-aeonik tracking-wide ">
                      Waltor Gottera
                    </b>
                    <p className="text-[#FFFFFF] text-lg font-bwmss01">
                      08 April 2019
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* <Link href="/blogs/why-ai">
          <div className=" lg:col-start-3 ">
            <div className="bg-[#104E62] rounded-[20px] lg:w-[403px] h-[327px] relative p-[20px]">
              <div className="absolute bottom-[20px]">
                <h3 className="text-white text-2xl font-aeonik tracking-wide mb-[15px]">
                  Oil & Gas EPC - Digitizing P&ID
                </h3>
                <div className="flex gap-[10px] items-center">
                  <div className="border border-[#707070] rounded-full bg-white w-[50px] h-[50px]"></div>
                  <div>
                    <b className="text-white font-bold font-aeonik tracking-wide ">
                      Waltor Gottera
                    </b>
                    <p className="text-[#FFFFFF] text-lg font-bwmss01">
                      08 April 2019
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link> */}
        <Link href="/blogs/why-ai">
          <div className="row-start-2">
            <div className="w-full bg-cover rounded-[20px] 2xl:w-[402px] h-[328px] bg-no-repeat bg-blog2 relative p-[20px]">
              <div className="absolute bottom-[20px]">
                <h3 className="text-white text-2xl font-aeonik tracking-wide mb-[15px]">
                  How to deal with Unknown Classes during classification?
                </h3>
                <div className="flex gap-[10px] items-center">
                  <div className="border border-[#707070] rounded-full bg-white w-[50px] h-[50px]"></div>
                  <div>
                    <b className="text-white font-bold font-aeonik tracking-wide ">
                      Waltor Gottera
                    </b>
                    <p className="text-[#FFFFFF] text-lg font-bwmss01">
                      08 April 2019
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/blogs/why-ai">
          <div className="row-start-2">
            <div className="bg-[#001D3F] w-full rounded-[20px] 2xl:w-[403px] h-[327px] relative p-[20px]">
              <div className="absolute bottom-[20px]">
                <h3 className="text-white text-2xl font-aeonik tracking-wide mb-[15px]">
                  Oil & Gas EPC - Digitizing P&ID
                </h3>
                <div className="flex gap-[10px] items-center">
                  <div className="border border-[#707070] rounded-full bg-white w-[50px] h-[50px]"></div>
                  <div>
                    <b className="text-white font-bold font-aeonik tracking-wide ">
                      Waltor Gottera
                    </b>
                    <p className="text-[#FFFFFF] text-lg font-bwmss01">
                      08 April 2019
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/blogs/why-ai">
          <div className="row-start-2">
            <div className="bg-cover rounded-[20px]  w-full 2xl:w-[402px] h-[328px] bg-no-repeat bg-blog3 relative p-[20px]">
              <div className="absolute bottom-[20px]">
                <h3 className="text-white text-2xl font-aeonik tracking-wide mb-[15px]">
                  How to deal with Unknown Classes during classification?
                </h3>
                <div className="flex gap-[10px] items-center">
                  <div className="border border-[#707070] rounded-full bg-white w-[50px] h-[50px]"></div>
                  <div>
                    <b className="text-white font-bold font-aeonik tracking-wide ">
                      Waltor Gottera
                    </b>
                    <p className="text-[#FFFFFF] text-lg font-bwmss01">
                      08 April 2019
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/blogs/why-ai">
          <div className="row-start-3">
            <div className="bg-[#122057] rounded-[20px] w-full 2xl:w-[403px] h-[327px] relative p-[20px]">
              <div className="absolute bottom-[20px]">
                <h3 className="text-white text-2xl font-aeonik tracking-wide mb-[15px]">
                  The Dilemma: To ML or Not to ML?
                </h3>
                <div className="flex gap-[10px] items-center">
                  <div className="border border-[#707070] rounded-full bg-white w-[50px] h-[50px]"></div>
                  <div>
                    <b className="text-white font-bold font-aeonik tracking-wide ">
                      Waltor Gottera
                    </b>
                    <p className="text-[#FFFFFF] text-lg font-bwmss01">
                      08 April 2019
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/blogs/why-ai" className="lg:col-span-2 2xl:col-span-3">
          <div>
            <div className="rounded-[20px] w-full bg-cover 2xl:w-[833px] h-[327px] bg-no-repeat bg-blog4 relative p-[20px]">
              <div className="absolute bottom-[20px]">
                <h3 className="text-white text-2xl font-aeonik tracking-wide mb-[15px]">
                  How to deal with Unknown Classes during classification?
                </h3>
                <div className="flex gap-[10px] items-center">
                  <div className="border border-[#707070] rounded-full bg-white w-[50px] h-[50px]"></div>
                  <div>
                    <b className="text-white font-bold font-aeonik tracking-wide ">
                      Waltor Gottera
                    </b>
                    <p className="text-[#FFFFFF] text-lg font-bwmss01">
                      08 April 2019
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LatestBlogs;
