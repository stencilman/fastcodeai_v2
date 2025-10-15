import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./CaseStudiesSlide.css";
import Link from "next/link";

const CaseStudiesSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  const paginationSwiperRef = useRef(null);
  const progressRefs = useRef([]);

  const caseStudies = [
    {
      id: 1,
      title: "DripLabs AI",
      description:
        "AI-powered photoshoots and Virtual Try-ons, delivering on-brand creatives at half the cost of traditional shoots.",
      image: "/v2/case-studies/driplab.jpg",
      link: "/v2/case-studies/driplabs",
    },
    {
      id: 2,
      title: "Mercedes Benz",
      description:
        "Revolutionizing automotive quality control with AI-powered visual inspection systems.",
      image: "/our-work/mercedes.webp",
      link: "/case-study/mercedes",
    },
    {
      id: 3,
      title: "AI Dermatology",
      description:
        "Advanced skin condition analysis using deep learning and computer vision.",
      image: "/our-work/ai_dermo.webp",
      link: "/case-study/dermatology",
    },
    {
      id: 4,
      title: "ModeFin",
      description:
        "Next-generation financial technology solutions powered by artificial intelligence.",
      image: "/our-work/modefin_cover.webp",
      link: "/case-study/modefin",
    },
    {
      id: 5,
      title: "Gesture Recognition",
      description:
        "Real-time gesture recognition system for intuitive human-computer interaction.",
      image: "/our-work/gesrec.png",
      link: "/case-study/gesture",
    },
  ];

  useEffect(() => {
    // Initialize progress refs array
    progressRefs.current = progressRefs.current.slice(0, caseStudies.length);

    const updateProgress = (swiper) => {
      const currentIndex = swiper.realIndex;
      progressRefs.current.forEach((ref, index) => {
        if (ref) {
          if (index === currentIndex) {
            ref.style.width = `${
              ((swiper.autoplay.running ? swiper.autoplay.timeLeft : 3000) /
                3000) *
              100
            }%`;
          } else {
            ref.style.width = index < currentIndex ? "100%" : "0%";
          }
        }
      });
    };

    const swiper = mainSwiperRef.current?.swiper;
    if (swiper) {
      swiper.on("autoplayTimeLeft", (s, time, progress) => {
        updateProgress(s);
      });
      swiper.on("slideChange", () => {
        setActiveIndex(swiper.realIndex);
      });

      return () => {
        swiper.off("autoplayTimeLeft");
        swiper.off("slideChange");
      };
    }
  }, [caseStudies.length]);

  return (
    <div className="relative bg-[#030B17] py-16">
      <div className="container mx-auto px-4">
        {/* Top Pagination Section */}
        <div className="grid grid-cols-7 gap-3 mb-12">
          {caseStudies.slice(0, 7).map((study, index) => (
            <div
              key={study.id}
              className={`group cursor-pointer relative bg-[#1B2534] rounded-lg p-4 transition-all duration-300 overflow-hidden ${
                index === activeIndex ? "ring-1 ring-blue-500" : ""
              }`}
              onClick={() => mainSwiperRef.current?.swiper.slideTo(index)}
            >
              {/* Progress animation pseudo-element only, no width progress logic */}
              <span
                className={`absolute top-0 left-0 h-full w-full pointer-events-none progress-bar-animate ${
                  index === activeIndex ? "active-progress" : ""
                }`}
                style={{
                  zIndex: 1,
                  backgroundColor:
                    index === activeIndex ? "#dbdbdb" : "transparent",
                  opacity: index === activeIndex ? 1 : 0,
                }}
              ></span>
              <div className="relative z-10">
                <div
                  className={`text-sm transition-colors duration-300 ${
                    index === activeIndex
                      ? "text-white font-medium"
                      : "text-gray-400"
                  }`}
                >
                  {study.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="relative">
          <Swiper
           loop={true}
            ref={mainSwiperRef}
            modules={[Autoplay, Navigation, Controller]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            navigation={{
              prevEl: ".prev-button",
              nextEl: ".next-button",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="case-studies-swiper"
          >
            {caseStudies.map((study) => (
              <SwiperSlide key={study.id}>
                <div className="bg-[#030B17] relative overflow-hidden">
                  {/* Full Image Section */}
                  <div className="relative w-full">
                    <div className="relative  w-full">
                      <div className="bg-[#1a1a1a] w-full h-full ">
                        <div className="relative w-[100%] ">
                          {/* Mac Book style mockup */}
                          <div className="relative">
                            {/* Screen */}
                            <div className="relative w-full aspect-[16/9.2] bg-white rounded-t-lg overflow-hidden">
                              <Image
                                src={study.image}
                                alt="DripLabs Interface"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1200px) 90vw, 1100px"
                                priority
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section - Dark Glass Effect */}
                  <div className="absolute z-50 px-4 bottom-11 w-full ">
                    <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.10)] py-6 px-8 rounded-2xl">
                      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                        <div className="max-w-xl">
                          <p className="text-[#9EB3CF] text-lg">
                            AI-powered photoshoots and Virtual Try-ons,
                            delivering on-brand creatives at half the cost of
                            traditional shoots.
                          </p>
                        </div>

                        <Link
                          href={study.link}
                          className={`relative rounded-full z-[1] flex items-center gap-[7px] p-[15px] text-lg justify-between main_cta_button bg-gradient-to-br from-[#2DC1C3] to-[#0268F2]  text-white`}
                        >
                          <div className={``}>Experience {study.title}</div>
                          <div className="flex items-center justify-center relative">
                            <>
                              <Image
                                className="button__icon-svg transition-transform duration-300"
                                src="/rightArrow.svg"
                                alt="arrow"
                                width="25"
                                height="25"
                              />
                              <Image
                                className="button__icon-svg--copy absolute"
                                src="/rightArrow.svg"
                                alt="arrow"
                                width="25"
                                height="25"
                              />
                            </>

                            {/* <span className="button__icon-wrapper ">
          <svg
            width="10"
            className="button__icon-svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 15"
          >
            <path
              fill="currentColor"
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            ></path>
          </svg>

          <svg
            className="button__icon-svg  button__icon-svg--copy"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            fill="none"
            viewBox="0 0 14 15"
          >
            <path
              fill="currentColor"
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            ></path>
          </svg>
        </span> */}
                            {/* <Image src="/rightArrow.svg" alt="arrow" width="16" height="13" /> */}
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesSlide;
