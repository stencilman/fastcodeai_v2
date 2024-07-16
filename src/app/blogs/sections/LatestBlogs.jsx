import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestBlogs = () => {
  const dataArray = [
    {
      title: "De-Mystifying Kolmogorov-Arnold Networks (KANs)",
      href: "/blogs/kans",
      authorName: "Rishabh Gupta",
      authorImg: "/team/rishabh2.jpg",
      publicationDate: "07 May 2024",
      background: "bg-kans",
    },
    {
      title:
        "Applying Physics-Informed Neural Networks (PINNs): Hands-On Modeling of Lid Driven Cavity",
      href: "/blogs/pinns-hom-lid",
      authorName: "Dhaval Taunk ",
      authorImg: "/team/Dhaval.webp",
      publicationDate: "03 May 2024",
      background: "bg-pinnslid",
    },
   
    {
      title:
        "Applying Physics-Informed Neural Networks (PINNs): Hands-On Modeling of 2D Plates",
      href: "/blogs/pinns-hom2d",
      authorName: "Dhaval Taunk ",
      authorImg: "/team/Dhaval.webp",
      publicationDate: "22 March 2024",
      background: "bg-pinns2d",
    },
    {
      title: "Physics Informed Neural Networks (PINNs)",
      href: "/blogs/pinns",
      authorName: "Dhaval Taunk ",
      authorImg: "/team/Dhaval.webp",
      publicationDate: "13 March 2024",
      background: "bg-pinns",
    },
   
    {
      title:
        "Mobile-First DVDB (Dart Vector DB): The Pocket-Sized Powerhouse for Your Apps ",
      href: "/blogs/dvdb",
      authorName: "Dhaval Taunk",
      authorImg: "/team/Dhaval.webp",
      publicationDate: "11 March 2023",
      background: "bg-[#122057]",
    },
    
    {
      title: "Deepfakes, AI-imagery, and the Race for Authenticity ",
      href: "/blogs/authenticity-race",
      authorName: "Arjun Jain",
      authorImg: "/arjun.jpg",
      publicationDate: "21 Dec 2023",
      background: "bg-authRace",
    },
    {
      title: "RLHF: Shaping Language Models with Human Wisdom ",
      href: "/blogs/rlhf",
      authorName: "Arjun Jain",
      authorImg: "/arjun.jpg",
      publicationDate: "01 Dec 2023",
      background: "bg-[#122057]",
    },
    {
      title: "Crafting Visions: The Magic of DALL-E 3 ",
      href: "/blogs/crafting-visions",
      authorName: "Arjun Jain",
      authorImg: "/arjun.jpg",
      publicationDate: "08 Nov 2023",
      background: "bg-[#104E62]",
    },
    {
      title:
        "Federated Learning: A Game-Changer for Data Privacy and Machine Learning ",
      href: "/blogs/federated-learning",
      authorName: "Arjun Jain",
      authorImg: "/arjun.jpg",
      publicationDate: "01 Oct 2023",
      background: "bg-[#001D3F]",
    },
 

   
    {
      title: "The Dilemma: To ML or Not to ML?",
      href: "/blogs/why-ai",
      authorName: "Arjun Jain",
      authorImg: "/arjun.jpg",
      publicationDate: "04 Feb 2021",
      background: "bg-blog1",
    },
    {
      title: "How to deal with Unknown Classes during classification?",
      href: "/blogs/unknown-classes",
      authorName: "Arjun Jain",
      authorImg: "/arjun.jpg",
      publicationDate: "01 Feb 2021",
      background: "bg-blog4",
    },

    {
      title: "  Oil & Gas EPC - Digitizing P&ID",
      href: "/blogs/oil-gas",
      authorName: "Tarun Kumar",
      authorImg: "",
      publicationDate: "03 June 2020",
      background: "bg-blog3",
    },
  ];
  return (
    <div className="w-full h-auto px-[20px] md:px-[50px] lg:px-[100px] pt-[150px] pb-[100px]">
      <div className="mb-[40px]">
        <h1 className="text-[51px] text-white font-aeonik tracking-wide">
          Blogs
        </h1>
      </div>

      {/* <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 lg:grid-rows-2 2xl:grid-cols-3 2xl:grid-rows-2 gap-[30px] w-full">
        <div className=" lg:col-span-2">
          <Link href="/blogs/why-ai">
            <div className="rounded-[60px] w-full bg-cover 2xl:w-[833px] h-[327px] bg-no-repeat bg-blog1 relative p-[20px]">
              <div className="absolute bottom-[20px]">
                <h3 className="text-white text-2xl font-aeonik tracking-wide mb-[15px]">
                  The Dilemma: To ML or Not to ML?
                </h3>
                <div className="flex gap-[10px] items-center">
                  <div className="border border-[#707070] rounded-full  w-[50px] h-[50px]">
                    <Image
                      className="rounded-full"
                      src="/arjun.jpg"
                      width="50"
                      height="50"
                      alt=""
                    />
                  </div>
                  <div>
                    <b className="text-white font-bold font-aeonik tracking-wide ">
                      Arjun Jain
                    </b>
                    <p className="text-[#FFFFFF] text-lg font-bwmss01">
                      04 Feb 2021
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>


        <div className="lg:col-span-2 2xl:col-span-3">
        <Link href="/blogs/oil-gas">
          <div className="">
            <div className="bg-cover rounded-[60px]  w-full 2xl:w-[402px] h-[328px] bg-no-repeat bg-blog3 relative p-[20px]">
              <div className="absolute bottom-[20px]">
                <h3 className="text-white text-2xl font-aeonik tracking-wide mb-[15px]">
                  Oil & Gas EPC - Digitizing P&ID
                </h3>
                <div className="flex gap-[10px] items-center">
                  <div className="border border-[#707070] rounded-full bg-white w-[50px] h-[50px]">
                    
                  </div>
                  <div>
                    <b className="text-white font-bold font-aeonik tracking-wide ">
                      Tarun Kumar
                    </b>
                    <p className="text-[#FFFFFF] text-lg font-bwmss01">
                      03 June 2020
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        </div>

        <Link
          href="/blogs/unknown-classes"
          className="lg:col-span-2 2xl:col-span-3"
        >
          <div>
            <div className="rounded-[60px] w-full bg-cover 2xl:w-[833px] h-[327px] bg-no-repeat bg-blog4 relative p-[20px]">
              <div className="absolute bottom-[20px]">
                <h3 className="text-white text-2xl font-aeonik tracking-wide mb-[15px]">
                  How to deal with Unknown Classes during classification?
                </h3>
                <div className="flex gap-[10px] items-center">
                  <div className="border border-[#707070] rounded-full w-[50px] h-[50px]">
                    <Image
                      className="rounded-full"
                      src="/arjun.jpg"
                      width="50"
                      height="50"
                      alt=""
                    />
                  </div>
                  <div>
                    <b className="text-white font-bold font-aeonik tracking-wide ">
                      Arjun Jain
                    </b>
                    <p className="text-[#FFFFFF] text-lg font-bwmss01">
                      01 Feb 2021
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div> */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {/* Map over dataArray for first row */}
        {dataArray.slice(0, 2).map((e, index) => (
          <div
            key={index}
            className={`col-span-1 ${
              index === 0
                ? "sm:col-span-1 md:col-span-2"
                : "sm:col-span-1 md:col-span-1"
            }`}
          >
            <Link href={e.href}>
              <div
                className={`card-zoom w-full h-[327px] relative  overflow-hidden group rounded-3xl`}
              >
                <div
                  className={`card-zoom-image absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover ${e.background} group-hover:scale-150`}
                ></div>
                <div className="absolute inset-0  bg-[#23478e8a] rounded-[24px]"></div>
                <div className="absolute bottom-[20px] m-[20px]">
                  <h3 className="text-white text-2xl font-aeonik tracking-wide mb-[15px]">
                    {e.title}
                  </h3>
                  <div className="flex gap-[10px] items-center">
                    {e?.authorImg && (
                      <div className="border border-[#707070] rounded-full  w-[50px] h-[50px] relative overflow-hidden">
                        <Image
                          className="rounded-full"
                          src={e?.authorImg}
                          width="50"
                          height="50"
                          alt=""
                        />
                      </div>
                    )}
                    <div>
                      <b className="text-white font-bold font-aeonik tracking-wide ">
                        {e.authorName}
                      </b>
                      <p className="text-[#FFFFFF] text-lg font-bwmss01">
                        {e.publicationDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
        {/* Map over dataArray for second row */}
        {dataArray.slice(2, 5).map((e, index) => (
          <div key={index} className="col-span-1 sm:col-span-1 md:col-span-1">
            <Link href={e.href}>
              <div
                className={`card-zoom w-full h-[327px] relative  overflow-hidden group rounded-3xl`}
              >
                <div
                  className={`card-zoom-image absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover ${e.background} group-hover:scale-150`}
                ></div>
                <div className="absolute inset-0  bg-[#23478e8a] rounded-[24px]"></div>
                <div className="absolute bottom-[20px] m-[20px]">
                  <h3 className="text-white text-2xl font-aeonik tracking-wide mb-[15px]">
                    {e.title}
                  </h3>
                  <div className="flex gap-[10px] items-center">
                    {e?.authorImg && (
                      <div className="border border-[#707070] rounded-full  w-[50px] h-[50px] relative overflow-hidden">
                        <Image
                          className="rounded-full"
                          src={e?.authorImg}
                          width="50"
                          height="50"
                          alt=""
                        />
                      </div>
                    )}
                    <div>
                      <b className="text-white font-bold font-aeonik tracking-wide ">
                        {e.authorName}
                      </b>
                      <p className="text-[#FFFFFF] text-lg font-bwmss01">
                        {e.publicationDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
        {/* Map over dataArray for third row */}
        {dataArray.slice(5, 7).map((e, index) => (
          <div
            key={index}
            className={`col-span-1 ${
              index === 0
                ? "sm:col-span-1 md:col-span-1"
                : "sm:col-span-1 md:col-span-2"
            }`}
          >
            <Link href={e.href}>
              <div
                className={`card-zoom w-full h-[327px] relative  overflow-hidden group rounded-3xl`}
              >
                <div
                  className={`card-zoom-image absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover ${e.background} group-hover:scale-150`}
                ></div>
                <div className="absolute inset-0  bg-[#23478e8a] rounded-[24px]"></div>
                <div className="absolute bottom-[20px] m-[20px]">
                  <h3 className="text-white text-2xl font-aeonik tracking-wide mb-[15px]">
                    {e.title}
                  </h3>
                  <div className="flex gap-[10px] items-center">
                    {e?.authorImg && (
                      <div className="border border-[#707070] rounded-full  w-[50px] h-[50px] relative overflow-hidden">
                        <Image
                          className="rounded-full"
                          src={e?.authorImg}
                          width="50"
                          height="50"
                          alt=""
                        />
                      </div>
                    )}
                    <div>
                      <b className="text-white font-bold font-aeonik tracking-wide ">
                        {e.authorName}
                      </b>
                      <p className="text-[#FFFFFF] text-lg font-bwmss01">
                        {e.publicationDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
        {/* Map over dataArray for fourth row */}
        {dataArray.slice(7, 10).map((e, index) => (
          <div key={index} className="col-span-1 sm:col-span-1 md:col-span-1">
            <Link href={e.href}>
              <div
                className={`card-zoom w-full h-[327px] relative  overflow-hidden group rounded-3xl`}
              >
                <div
                  className={`card-zoom-image absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover ${e.background} group-hover:scale-150`}
                ></div>
                <div className="absolute inset-0  bg-[#23478e8a] rounded-[24px]"></div>
                <div className="absolute bottom-[20px] m-[20px]">
                  <h3 className="text-white text-2xl font-aeonik tracking-wide mb-[15px]">
                    {e.title}
                  </h3>
                  <div className="flex gap-[10px] items-center">
                    {e?.authorImg && (
                      <div className="border border-[#707070] rounded-full  w-[50px] h-[50px] relative overflow-hidden">
                        <Image
                          className="rounded-full"
                          src={e?.authorImg}
                          width="50"
                          height="50"
                          alt=""
                        />
                      </div>
                    )}
                    <div>
                      <b className="text-white font-bold font-aeonik tracking-wide ">
                        {e.authorName}
                      </b>
                      <p className="text-[#FFFFFF] text-lg font-bwmss01">
                        {e.publicationDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
        {/* Map over dataArray for fifth row */}
        {dataArray.slice(10, 12).map((e, index) => (
          <div
            key={index}
            className={`col-span-1 ${
              index === 0
                ? "sm:col-span-1 md:col-span-2"
                : "sm:col-span-1 md:col-span-1"
            }`}
          >
            <Link href={e.href}>
              <div
                className={`card-zoom w-full h-[327px] relative  overflow-hidden group rounded-3xl`}
              >
                <div
                  className={`card-zoom-image absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover ${e.background} group-hover:scale-150`}
                ></div>
                <div className="absolute inset-0  bg-[#23478e8a] rounded-[24px]"></div>
                <div className="absolute bottom-[20px] m-[20px]">
                  <h3 className="text-white text-2xl font-aeonik tracking-wide mb-[15px]">
                    {e.title}
                  </h3>
                  <div className="flex gap-[10px] items-center">
                    {e?.authorImg && (
                      <div className="border border-[#707070] rounded-full  w-[50px] h-[50px] relative overflow-hidden">
                        <Image
                          className="rounded-full"
                          src={e?.authorImg}
                          width="50"
                          height="50"
                          alt=""
                        />
                      </div>
                    )}
                    <div>
                      <b className="text-white font-bold font-aeonik tracking-wide ">
                        {e.authorName}
                      </b>
                      <p className="text-[#FFFFFF] text-lg font-bwmss01">
                        {e.publicationDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
