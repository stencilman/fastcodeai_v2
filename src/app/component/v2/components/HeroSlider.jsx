"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      bgImage: "/research/patentPage/pic1-2.png",
      title: "Empowering R&D Teams",
      subtitle: "With Cutting-Edge AI\nResearch Solutions",
      ctaText: "Tell Us Your Biggest Challenge",
      ctaLink: "/contact",
      category: "ODO Research Paper",
    },
    {
      id: 2,
      bgImage: "/research/patentPage/pic2-2.png",
      title: "Advanced AI Solutions",
      subtitle: "Transforming Research\nThrough Innovation",
      ctaText: "Tell Us Your Biggest Challenge",
      ctaLink: "/contact",
      category: "ODO Research Paper",
    },
    {
      id: 3,
      bgImage: "/research/patentPage/pic3-2.png",
      title: "AI-Driven Insights",
      subtitle: "Unlocking the Future of Research",
      ctaText: "Tell Us Your Biggest Challenge",
      ctaLink: "/contact",
      category: "ODO Research Paper",
    },
    {
      id: 4,
      bgImage: "/research/patentPage/pic4-2.png",
      title: "AI-Driven Insights",
      subtitle: "Unlocking the Future of Research",
      ctaText: "Tell Us Your Biggest Challenge",
      ctaLink: "/contact",
      category: "ODO Research Paper",
    },
  ];

  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        speed={1500}
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
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.bgImage}
                alt={slide.title}
                fill
                style={{ objectFit: "cover" }}
                priority={slide.id === 1}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00081F] via-[#00081F]/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
              <div className="max-w-[700px]">
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6 font-aeonik leading-tight">
                  {slide.title}
                </h1>
                <p className="text-2xl md:text-3xl lg:text-4xl text-white mb-8 font-bwmss01 whitespace-pre-line">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.ctaLink}
                  className="inline-flex bg-gradient-to-r from-[#00D1FF] to-[#0029FF] text-white px-8 py-4 rounded-full text-lg font-medium transition-transform hover:scale-105"
                >
                  {slide.ctaText}
                </Link>
              </div>
            </div>

            {/* Category Tag */}
            <div className="absolute bottom-12 left-4 md:left-8 lg:left-16 z-20">
              <div className="bg-[#1A2758] text-white px-6 py-3 rounded-lg font-medium">
                {slide.category}
              </div>
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
