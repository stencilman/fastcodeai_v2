"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import HoverDetailDialog from "./HoverDetailDialog";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      bgVideo: "/v2/hero/odo.mp4",
      title: "Frontier AI. Enterprise Scale. Delivered.",
      subtitle:
        "We help organisations harness AI to transform how they innovate, operate, and compete - from research to real-world deployment.",
      ctaText: "Discuss your AI Roadmap",
      ctaLink: "/contact",
      category: "ODO Research Paper",
      detail: {
        title: "Our latest breakthrough in AI-powered body reshaping:",
        description:
          "Fastcode AI introduces Odo, a cutting-edge diffusion model that transforms human body shapes while perfectly preserving identity, clothing, and background. Built on the first large-scale dataset of 18K+ images, achieving 45% lower reconstruction error than existing methods.",
        ctaText: "Experience the demo",
        ctaLink: "https://research.fastcode.ai/odo",
      },
    },
    {
      id: 2,
      bgVideo: "/v2/hero/roadside-assist.mp4",
      title: "Frontier AI. Enterprise Scale. Delivered.",
      // subtitle: "With Cutting-Edge AI\nResearch Solutions",
      subtitle:
        "We help organisations harness AI to transform how they innovate, operate, and compete - from research to real-world deployment.",
      ctaText: "Discuss your AI Roadmap",
      ctaLink: "/contact",
      category: "Roadside User Handling",
      detail: {
        title: "Advanced AI for safer roads:",
        description:
          "Our lane assist and vulnerable road user detection system for Bosch enhanced traffic sign recognition for Level 2-3 autonomy. This project sparked long-term partnerships with Mercedes and Bosch, leading to multiple breakthrough collaborations in autonomous driving technology.",
        ctaText: "View Documentation",
        ctaLink: "#",
      },
    },
    {
      id: 3,
      bgVideo: "/v2/hero/mbux.mp4",
      title: "Frontier AI. Enterprise Scale. Delivered.",
      subtitle:
        "We help organisations harness AI to transform how they innovate, operate, and compete - from research to real-world deployment.",
      ctaText: "Discuss your AI Roadmap",
      ctaLink: "/contact",
      category: "MBUX Case Study",
      detail: {
        title: "Transforming luxury driving with AI:",
        description:
          "We developed MBUX Vision, Mercedes-Benz's revolutionary gesture and occupant monitoring system, processing 10TB+ of cabin data for intuitive in-car experiences. This flagship project cemented our long-term partnerships with Mercedes and Bosch, leading to continuous innovation in automotive AI.",
        ctaText: "Watch demo video",
        ctaLink: "https://www.youtube.com/watch?v=cjM_oYk_Fqg",
      },
    },
    {
      id: 4,
      bgVideo: "/v2/hero/pose-estimation.mp4",
      title: "Frontier AI. Enterprise Scale. Delivered.",
      subtitle:
        "We help organisations harness AI to transform how they innovate, operate, and compete - from research to real-world deployment.",
      ctaText: "Discuss your AI Roadmap",
      ctaLink: "/contact",
      category: "Post Estimation",
      detail: {
        title:
          "Discover the pioneering research that transformed computer vision:",
        description:
          "This landmark paper by Arjun Jain (Fastcode AI's CEO) and collaborators introduced the revolutionary hybrid CNN-MRF architecture for human pose estimation, garnering 2149+ citations and establishing new benchmarks in the field.",
        ctaText: "Read the full paper",
        ctaLink:
          "https://proceedings.neurips.cc/paper_files/paper/2014/hash/893643e2dcd4b25212defd18141d58c4-Abstract.html",
      },
    },
  ];

  return (
    <div className="relative w-full h-auto md:h-screen">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        speed={1500}
        autoHeight={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
        pagination={{
          // dynamicBullets: true,
          clickable: true,
          type: "bullets",
          renderBullet: function (index, className) {
            // add data-index so we can read the number in CSS via attr(data-index)
            return `<span class="${className}" data-index="${
              index + 1
            }"></span>`;
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Background video (desktop/tablet only) */}
            <div className="absolute inset-0">
              <video
                src={slide.bgVideo}
                autoPlay
                muted
                loop
                playsInline
                className="hidden md:block w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00081F] via-[#00081F]/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-[100vh]   max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
              <div className="max-w-[700px]">
                <h1 className="text-3xl md:text-5xl text-white font-bold  font-aeonik tracking-wide mb-6 ">
                  {slide.title}
                </h1>
                <p className="text-lg text-white mb-8 font-bwmss01 whitespace-pre-line">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.ctaLink}
                  className="inline-flex bg-gradient-to-r from-[#00D1FF] to-[#0029FF] text-white px-[25px] py-[10px] rounded-full text-lg font-aeonik font-medium transition-transform hover:scale-105"
                >
                  {slide.ctaText}
                </Link>

                {/* Mobile: render video as a separate section below CTA */}
                <div className="md:hidden mt-8">
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/10">
                    <video
                      src={slide.bgVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Mobile: inline category pill and details */}
                <div className="md:hidden mt-6">
                  <HoverDetailDialog
                    label={slide.category}
                    detail={slide.detail}
                  />
                </div>
              </div>
            </div>

            {/* Category Tag + Hover Dialog */}
            <div className="hidden md:block absolute bottom-12 left-4 md:left-8 lg:left-16 z-20">
              <HoverDetailDialog label={slide.category} detail={slide.detail} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper pagination custom styling */}
      <style jsx global>{`
        .swiper .swiper-pagination.swiper-pagination-bullets {
          position: absolute !important;
          bottom: 48px !important;
          right: 4rem !important;
          width: auto !important;
          left: auto !important;
          margin: 0 !important;
          display: flex !important;
          gap: 0.5rem !important;
          align-items: center !important;
          z-index: 20 !important;
        }

        @media (max-width: 767px) {
          .swiper .swiper-pagination.swiper-pagination-bullets {
            bottom: 16px !important;
            left: 1rem !important;
            right: auto !important;
          }
        }

        .swiper .swiper-pagination-bullet {
          width: 15px !important;
          height: 15px !important;
          text-align: center !important;
          font-size: 12px !important;
          opacity: 1 !important;
          background: white !important;
          border-radius: 1px !important;
          position: relative !important;
          transition: all 0.3s ease !important;
          margin: 0 4px !important;
        }

        .swiper .swiper-pagination-bullet-active {
          width: 24px !important;
          height: 24px !important;
          background: transparent !important;
          color: #ffffff !important;
          border: 1px solid white !important;
          position: relative !important;
          font-weight: 600 !important;
        }

        .swiper .swiper-pagination-bullet-active::after {
          content: attr(data-index);
          position: absolute !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          color: #ffffff !important;
          font-size: 12px !important;
          font-weight: 500 !important;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
