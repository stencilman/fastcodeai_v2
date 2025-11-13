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
        "Our Data Intelligence Platform transforms petabytes of raw enterprise data into actionable AI-ready insights.",
      image: "/v2/case-studies/case-1.jpg",
      link: "/case-studies/data-intelligence-platform",
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
        "Advanced computer vision digitizes engineering drawings for critical safety analysis in oil and gas.",
      image: "/v2/case-studies/case-3.jpg",
      link: "/case-studies/process-flow-ai",
      ctaText: "View case study",
    },
    {
      id: 4,
      title: "MiAI Law",
      description:
        "Engineered hallucination-free RAG with verifiable legal reasoning, achieving 60x faster analysis and 90% cost reduction.",
      image: "/v2/case-studies/case-4.jpg",
      link: "/case-studies/mi-ai-law",
      ctaText: "View case study",
    },
    {
      id: 5,
      title: "Seikor",
      description:
        "Seikor's AI streamlines hiring workflows from job posting to candidate management, making recruitment faster for everyone.",
      image: "/v2/case-studies/case-5.jpg",
      link: "https://seikor.com/",
      ctaText: "View the product",
    },
    {
      id: 6,
      title: "Career",
      description:
        "We've cracked AI challenges for Mercedes, Bosch, and Aramco, but that's just the warm-up. We still have a lot to build.",
      image: "/v2/case-studies/case-6.jpg",
      link: "/careers",
      ctaText: "Join us",
    },
    {
      id: 7,
      title: "Spiral Health",
      description:
        "AI-powered posture analysis delivers personalized physical therapy exercises in real-time through smartphones.",
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
              ((swiper.autoplay.running ? swiper.autoplay.timeLeft : 5000) /
                5000) *
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
    <div className="relative bg-[#00081F] pb-16">
      <div className="mt-[60px] md:mt-[170px] mx-auto px-4">
        {/* Top Pagination Section */}
        <div className="flex gap-3 mb-12 flex-wrap -mx-4 px-4 md:mx-0 md:px-20">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`shrink-0 group cursor-pointer relative bg-[rgba(255,255,255,0.05)] backdrop-blur-[3px] rounded-[4px] px-4 py-2 md:px-6 md:py-3 transition-all duration-300 overflow-hidden group`}
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
                  className={`text-xs md:text-sm transition-colors duration-300 group-hover:text-white ${
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
        <div className="relative group/slider">
          {/* Navigation Arrows */}
          <button
            className="prev-button absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-md bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 group"
            aria-label="Previous slide"
          >
            <Image
              src="/arrowRight.svg"
              alt="Previous"
              width={24}
              height={24}
              className="rotate-180 group-hover:scale-110 transition-transform"
            />
          </button>
          <button
            className="next-button absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-md bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 group"
            aria-label="Next slide"
          >
            <Image
              src="/arrowRight.svg"
              alt="Next"
              width={24}
              height={24}
              className="group-hover:scale-110 transition-transform"
            />
          </button>

          <Swiper
            loop={true}
            ref={mainSwiperRef}
            modules={[Autoplay, Navigation, Controller]}
            spaceBetween={25}
            slidesPerView={1.3}
            centeredSlides={true}
            navigation={{
              prevEl: ".prev-button",
              nextEl: ".next-button",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="case-studies-swiper"
          >
            {caseStudies.map((study) => (
              <SwiperSlide key={study.id}>
                <div className="bg-[#030B17] relative overflow-hidden">
                  {/* Full Image Section */}
                  <div className="relative w-full max-h-[400px] md:max-h-[450px] lg:max-h-[600px] overflow-hidden">
                    <div className="relative  w-full">
                      <div className="bg-[#1a1a1a] w-full h-full ">
                        <div className="relative w-[100%] ">
                          {/* Mac Book style mockup */}
                          <div className="relative">
                            {/* Screen */}
                            <div className="relative w-full bg-white rounded-t-lg overflow-hidden flex items-center justify-center">
                              <Image
                                src={study.image}
                                alt="DripLabs Interface"
                                width={1920}
                                height={1080}
                                className="w-full h-auto max-h-[400px] md:max-h-[450px] lg:max-h-[600px] object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
                                priority
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Desktop/Tablet text/CTA overlay synced with active slide */}
                  <div className="hidden md:block absolute z-50 px-4 bottom-11 w-full ">
                    <div className="backdrop-blur-[75px] bg-[#00000040] py-6 px-8 rounded-2xl">
                      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                        <div className="max-w-xl">
                          <p className="text-[#fff] text-lg">
                            {activeStudy?.description}
                          </p>
                        </div>
                        {activeStudy?.ctaText && (
                          <Link
                            href={activeStudy?.link || "#"}
                            // target={activeStudy?.link ? "_blank" : undefined}
                            className={`relative rounded-[4px] z-[1] flex items-center gap-[7px] px-[25px] py-[10px] text-lg justify-between main_cta_button bg-gradient-to-br from-[#2DC1C3] to-[#0268F2]  text-white font-bwmss01 capitalize`}
                          >
                            <div className={``}>{activeStudy.ctaText}</div>
                            <div className="flex items-center justify-center relative">
                              <>
                                <Image
                                  className=" "
                                  src="/cta_arrow.svg"
                                  alt="arrow"
                                  width="30"
                                  height="30"
                                />
                              </>
                            </div>
                          </Link>
                        )}
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
              {/* <div className="absolute -top-2 left-8 w-4 h-4 rotate-45 bg-[rgba(255,255,255,0.06)] border-l border-t border-white/10" /> */}

              <p className="text-[#9EB3CF] text-base leading-6 mb-5">
                {activeStudy?.description}
              </p>
              {activeStudy?.ctaText && (
                <Link
                  href={activeStudy?.link || "#"}
                  // target={activeStudy?.link ? "_blank" : undefined}
                  className="relative block text-center rounded-[4px] px-4 py-2 text-white text-base font-medium bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] font-bwmss01 capitalize"
                >
                  {activeStudy.ctaText}
                  <span className="align-middle inline-block ml-2">
                    <Image
                      className=" "
                      src="/cta_arrow.svg"
                      alt="arrow"
                      width="25"
                      height="25"
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
