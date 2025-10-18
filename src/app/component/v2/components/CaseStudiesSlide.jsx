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
      title: "Data Platform",
      description:
        "Our Data Intelligence Platform transforms petabytes of raw enterprise data into actionable AI-ready insights, automating labeling while ensuring governance.",
      image: "/v2/case-studies/case-1.jpg",
      link: "#",
      ctaText: "Start your pilot today",
    },
    {
      id: 2,
      title: "Arjun Jain",
      description:
        "Dr. Arjun Jain is the heart and soul of Fast Code AI, turning impossible AI problems into shipped solutions.",
      image: "/v2/case-studies/case-2.jpg",
      link: "https://www.linkedin.com/in/arjunjain/",
      ctaText: "Connect with him",
    },
    {
      id: 3,
      title: "ProcessFlow AI",
      description:
        "Our solution for Aramco in critical safety analysis, establishing a lasting partnership that continues to drive innovation.",
      image: "/v2/case-studies/case-3.jpg",
      link: "#",
      ctaText: "View case study",
    },
    {
      id: 4,
      title: "MiAI Law",
      description:
        "We engineered MiAI Law's advanced RAG pipeline with structured legal logic, eliminating hallucinations through verifiable reasoning, achieving 60x faster case analysis and 90% cost reduction for law firms.",
      image: "/v2/case-studies/case-4.jpg",
      link: "#",
      ctaText: "View case study",
    },
    {
      id: 5,
      title: "Seikor",
      description:
        "Seikor revolutionizes HR with AI that streamlines entire hiring workflows, from job posting to candidate management, making recruitment faster and smarter.",
      image: "/v2/case-studies/case-5.jpg",
      link: "https://seikor.ai/",
      ctaText: "View the product",
    },
    {
      id: 6,
      title: "Career",
      description:
        "We've cracked AI challenges for Mercedes, Bosch, and Aramco, but that's just the warm-up. The real game begins now: building breakthrough AI that doesn't exist yet.",
      image: "/v2/case-studies/case-6.jpg",
      link: "/careers",
      ctaText: "Join us",
    },
    {
      id: 7,
      title: "Spiral Health",
      description:
        "This revolutionizes physical therapy by using AI-powered posture analysis to deliver personalized, real-time corrective exercises through your smartphone.",
      image: "/v2/case-studies/case-7.jpg",
      link: "https://spiral.health/",
      ctaText: "See Spiral in action",
    },
    {
      id: 8,
      title: "Drip Labs",
      description:
        "AI-powered photoshoots and Virtual Try-ons, delivering on-brand creatives at half the cost of traditional shoots. ",
      image: "/v2/case-studies/case-8.jpg",
      link: "https://www.driplabs.ai/app",
      ctaText: "Experience DripLabs",
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

  const activeStudy = caseStudies[activeIndex] || {};

  return (
    <div className="relative bg-[#030B17] py-16">
      <div className="container mx-auto px-4">
        {/* Top Pagination Section */}
        <div className="flex gap-3 mb-12 flex-wrap -mx-4 px-4 md:mx-0 md:px-0">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`shrink-0 group cursor-pointer relative bg-[rgba(255,255,255,0.05)] backdrop-blur-[3px] rounded-full px-4 py-2 md:px-6 md:py-3 transition-all duration-300 overflow-hidden `}
              onClick={() => mainSwiperRef.current?.swiper.slideToLoop(index)}
            >
              {/* Progress animation pseudo-element only, no width progress logic */}
              <span
                className={`absolute top-0 left-0 h-full w-full pointer-events-none progress-bar-animate ${
                  index === activeIndex ? "active-progress" : ""
                }`}
                style={{
                  zIndex: 1,
                  backgroundColor:
                    index === activeIndex
                      ? "rgba(255, 255, 255, 0.15)"
                      : "transparent",
                  opacity: index === activeIndex ? 1 : 0,
                }}
              ></span>
              <div className="relative z-10">
                <div
                  className={`text-xs md:text-sm transition-colors duration-300 ${
                    index === activeIndex ? "text-white " : "text-[#FFFFFF80]"
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
            slidesPerView={1.1}
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

                  {/* Content Section - Dark Glass Effect (desktop/tablet) */}
                  <div className="hidden md:block absolute z-50 px-4 bottom-11 w-full ">
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
                          target="_blank"
                          className={`relative rounded-full z-[1] flex items-center gap-[7px] p-[15px] text-lg justify-between main_cta_button bg-gradient-to-br from-[#2DC1C3] to-[#0268F2]  text-white`}
                        >
                          <div className={``}>{study.ctaText}</div>
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
          {/* Mobile-only text/CTA card below the slider */}
          <div className="md:hidden mt-6">
            <div className="relative mx-auto w-full rounded-2xl border border-white/10 backdrop-blur-md bg-[rgba(255,255,255,0.06)] px-5 py-6">
              {/* caret */}
              <div className="absolute -top-2 left-8 w-4 h-4 rotate-45 bg-[rgba(255,255,255,0.06)] border-l border-t border-white/10" />

              <p className="text-[#9EB3CF] text-base leading-6 mb-5">
                {activeStudy?.description}
              </p>
              {activeStudy?.ctaText && (
                <Link
                  href={activeStudy?.link || "#"}
                  target={activeStudy?.link ? "_blank" : undefined}
                  className="relative block text-center rounded-[14px] px-6 py-4 text-white text-base font-medium bg-gradient-to-br from-[#2DC1C3] to-[#0268F2]"
                >
                  {activeStudy.ctaText}
                  <span className="align-middle inline-block ml-2">
                    <Image
                      src="/rightArrow.svg"
                      alt="arrow"
                      width="20"
                      height="20"
                    />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Utilities */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default CaseStudiesSlide;
