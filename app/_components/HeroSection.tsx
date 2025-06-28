"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

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
  const container = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      const tl = gsap
        .timeline({ paused: true })
        .fromTo(
          ".header",
          {
            autoAlpha: 0,
            y: 64,
            duration: 0.6,
            ease: "power1.inOut",
          },
          { autoAlpha: 1, y: 0 }
        )
        .fromTo(
          ".desc",
          {
            autoAlpha: 0,
            y: 64,
            duration: 0.6,
            ease: "power1.inOut",
          },
          { autoAlpha: 1, y: 0 },
          "<+0.1"
        )
        .fromTo(
          ".cta",
          {
            autoAlpha: 0,
            y: 64,
            duration: 0.6,
            ease: "power1.inOut",
          },
          { autoAlpha: 1, y: 0 },
          "<+0.2"
        );

      tl.play();
    },
    { scope: container }
  );
  return (
    <div
      ref={container}
      className="relative w-full h-[calc(100svh-80px)] h-[calc(100svh-80px)]-fallback  flex flex-col justify-between"
    >
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
            <SwiperSlide className="h-full">
              <div className="h-full">
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

      <div className="absolute z-[10] grid place-items-center w-full h-[calc(100%-80px)] margin">
        <div className="container">
          <div className=" max-w-[830px] flex flex-col gap-6 md:gap-8  h-min top-0 left-0 inset-0 justify-center items-start text-white bg-opacity-30">
            <h1 className="header opacity-0 font-sans text-left font-bold  max-w-[532.62px]">
              Driving Sustainability, Empowering Lives.
            </h1>
            <p className="desc opacity-0 text-left max-w-[532.62px]">
              Welcome to EkoMobility, Tanzania’s premier tech-driven mobility
              platform, designed to empower gig workers and mobility
              entrepreneurs with access to affordable, energy-efficient
              vehicles, digital tools, and life-changing opportunities. We
              connect the dots between access, technology, and sustainability to
              transform Africa's mobility landscape.
            </p>
            <Button className="cta opacity-0" asChild>
              <Link href={"/#become-a-captain"}>Become a captain</Link>
            </Button>
            {/* <div className="cta h-[40px] w-[200px] rounded-full bg-accent"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
