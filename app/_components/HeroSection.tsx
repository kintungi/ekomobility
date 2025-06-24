"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";

const sliderImages = [
  {
    url: "/images/hero1.png",
    alt: "hero1",
  },
  {
    url: "/images/hero2.jpeg",
    alt: "hero2",
  },
  {
    url: "/images/hero3.jpeg",
    alt: "hero3",
  },
  {
    url: "/images/hero4.png",
    alt: "hero4",
  },
];

export default function HeroSection() {
  return (
    <div className="relative w-full h-[calc(100dvh-80px)] flex flex-col justify-between">
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        pagination={{
          clickable: true,
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        className="w-full h-full 
"
      >
        <div
          className="absolute z-[90] top-0 left-0 bg-gradient-to-r from-black to-black/0
"
        />
        {sliderImages &&
          sliderImages.map((image, i) => (
            <SwiperSlide>
              <div>
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute w-full h-full z-[90] top-0 left-0 bg-gradient-to-r from-black to-black/0
  "
                ></div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="absolute z-[10] grid place-items-center w-full h-full margin">
        <div className="container">
          <div className=" max-w-[830px] flex flex-col gap-8  h-min top-0 left-0 inset-0 justify-center items-start text-white bg-opacity-30">
            <h1 className=" font-sans text-left font-bold mb-4 max-w-[532.62px]">
              Driving Sustainability, Empowering Lives.
            </h1>
            <p className="text-left max-w-[532.62px]">
              Welcome to EkoMobility, Tanzania’s premier tech-driven mobility
              platform, designed to empower gig workers and mobility
              entrepreneurs with access to affordable, energy-efficient
              vehicles, digital tools, and life-changing opportunities. We
              connect the dots between access, technology, and sustainability to
              transform Africa's mobility landscape.
            </p>
            <Button>Become a captain</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
