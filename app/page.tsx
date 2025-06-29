"use client";
import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import { Button } from "@/components/ui/button";
import solutions from "@/app/_data/solutions.json";
import about from "@/app/_data/about.json";
import reasons from "@/app/_data/reasons.json";
import impact from "@/app/_data/impact.json";
import FeatureCard from "./_components/FeatureCard";
import MissionVisionCard from "./_components/MissionVisionCard";
import { IconType } from "./_lib/types";
import Pill from "./_components/Pill";
import Form from "./_components/Form";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { CustomBounce } from "gsap/CustomBounce";
import CustomEase from "gsap/CustomEase";
import Link from "next/link";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomBounce, CustomEase);

export default function Home() {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 767px)", // below sm
          isTablet: "(min-width: 768px) and (max-width: 1023px)",
          isDesktop: "(min-width: 1024px)",
        },
        (ctx) => {
          const { isMobile, isTablet, isDesktop } = ctx.conditions as {
            isMobile: boolean;
            isTablet: boolean;
            isDesktop: boolean;
          };
          const cardTriggerStart = isMobile ? "top 90%" : "top 70%";
          const hookTl = gsap
            .timeline({ paused: true })
            .fromTo(
              ".hook1",
              {
                autoAlpha: 0,
                y: 64,
                duration: 0.6,
                ease: "power1.inOut",
                // scrollTrigger: {
                //   trigger: ".hook-section",
                //   start: "top 50%",
                //   toggleActions: "play none none reset",
                //   markers: true,
                // },
              },
              { autoAlpha: 1, y: 0 }
            )
            .fromTo(
              ".hook2",
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
              ".hook3",
              {
                autoAlpha: 0,
                y: 64,
                duration: 0.6,
                ease: "power1.inOut",
                // scrollTrigger: {
                //   trigger: ".hook-section",
                //   start: "top 50%",
                //   toggleActions: "play none none reset",
                //   markers: true,
                // },
              },
              { autoAlpha: 1, y: 0 },
              "<+0.2"
            );

          ScrollTrigger.create({
            trigger: ".hook-section",
            start: "top 60%",
            // toggleActions: "play reset play reset",
            toggleActions: "play none play reverse",
            // markers: true,
            animation: hookTl,
            // markers: true,
            // onEnter: () => hookTl.play(),
            // onLeaveBack: () => hookTl.reverse(),

            // animation: hookTl,
          });
          // hookTl.play();

          //Solutions
          gsap.utils
            .toArray<HTMLElement>(".feature-card-one")
            .forEach((card, i) => {
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: card,
                  start: cardTriggerStart,
                  toggleActions: "play none play reverse", // or "play reset play reset"
                  // markers: true,
                },
              });

              // set custom delay using position inside the timeline
              const delay =
                i === 1 || i === 4 ? 0.1 : i === 2 || i === 5 ? 0.2 : 0;

              tl.from(
                card,
                {
                  autoAlpha: 0,
                  y: 64,
                  duration: 0.6,
                  ease: "power1.inOut",
                },
                delay
              ); // 👈 delay as timeline position
            });

          //Impact
          if (isDesktop) {
            const impactTl = gsap.timeline({
              scrollTrigger: {
                trigger: ".feature-cards-two-container",
                start: cardTriggerStart,
                toggleActions: "play none play reverse",
                // markers: true,
              },
            });

            impactTl
              .from(
                ".impact-card-1",
                {
                  autoAlpha: 0,
                  y: 64,
                  duration: 0.6,
                  ease: "power1.inOut",
                },
                0
              )
              .from(
                ".impact-card-2",
                {
                  autoAlpha: 0,
                  y: 64,
                  duration: 0.6,
                  ease: "power1.inOut",
                },
                0.1
              )
              .from(
                ".impact-card-3",
                {
                  autoAlpha: 0,
                  y: 64,
                  duration: 0.6,
                  ease: "power1.inOut",
                },
                0.2
              )
              .from(
                ".impact-card-4",
                {
                  autoAlpha: 0,
                  y: 64,
                  duration: 0.6,
                  ease: "power1.inOut",
                },
                0.3
              );
          }

          if (isMobile || isTablet) {
            gsap.utils
              .toArray<HTMLElement>(".feature-card-two")
              .forEach((card, i) => {
                const tl = gsap.timeline({
                  scrollTrigger: {
                    trigger: card,
                    start: cardTriggerStart,
                    toggleActions: "play none play reverse", // or "play reset play reset"
                    // markers: true,
                  },
                });

                // set custom delay using position inside the timeline
                const delay = i === 1 || i === 3 ? 0.1 : 0;

                tl.from(
                  card,
                  {
                    autoAlpha: 0,
                    y: 64,
                    duration: 0.6,
                    ease: "power1.inOut",
                  },
                  delay
                ); // 👈 delay as timeline position
              });
          }
          //Why choose us
          gsap.utils
            .toArray<HTMLElement>(".feature-card-three")
            .forEach((card, i) => {
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: card,
                  start: cardTriggerStart,
                  toggleActions: "play none play reverse", // or "play reset play reset"
                  // markers: true,
                },
              });

              // set custom delay using position inside the timeline
              const delay =
                i === 1 || i === 4 ? 0.1 : i === 2 || i === 5 ? 0.2 : 0;

              tl.from(
                card,
                {
                  autoAlpha: 0,
                  y: 64,
                  duration: 0.6,
                  ease: "power1.inOut",
                },
                delay
              ); // 👈 delay as timeline position
            });

          //Pills
          const pillTL = gsap.timeline({
            scrollTrigger: {
              trigger: ".delivery",
              start: isTablet ? "top 50%" : "top 30%",
              // markers: true,
              toggleActions: "play none play reverse",
            },
          });

          pillTL
            .from(
              ".pill1",
              {
                // x: 300,
                left: 0,
                autoAlpha: 0,
                duration: 0.5,
                ease: "elastic.out(1,0.8)",
              },
              0
            )
            .from(
              ".pill2",
              {
                // x: -300,
                right: 0,
                autoAlpha: 0,

                duration: 0.5,
                ease: "elastic.out(1,0.8)",
              },
              0.1
            )
            .from(
              ".pill3",
              {
                // x: 300,
                left: 0,
                autoAlpha: 0,

                duration: 0.5,
                ease: "elastic.out(1,0.8)",
              },
              0.2
            )
            .from(
              ".pill4",
              {
                // x: -300,
                right: 0,
                autoAlpha: 0,

                duration: 0.5,
                ease: "elastic.out(1,0.8)",
              },
              0.3
            )
            .from(
              ".pill5",
              {
                // y: -300,
                bottom: 0,
                autoAlpha: 0,

                duration: 0.5,
                ease: "elastic.out(1,0.8)",
              },
              0.4
            );

          //about
          const aboutTl = gsap.timeline({
            scrollTrigger: {
              trigger: ".about",
              start: cardTriggerStart,
              toggleActions: "play none play reverse", // or "play reset play reset"
              // markers: true,
            },
          });

          aboutTl.from(".about", {
            autoAlpha: 0,
            y: 64,
            duration: 0.6,
            ease: "power1.inOut",
          });

          //mission_vision
          gsap.utils
            .toArray<HTMLElement>(".mission-vision")
            .forEach((card, i) => {
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: card,
                  start: cardTriggerStart,
                  toggleActions: "play none play reverse", // or "play reset play reset"
                  // markers: true,
                },
              });

              // set custom delay using position inside the timeline
              const delay =
                i === 1 || i === 4 ? 0.1 : i === 2 || i === 5 ? 0.2 : 0;

              tl.from(
                card,
                {
                  autoAlpha: 0,
                  y: 64,
                  duration: 0.6,
                  ease: "power1.inOut",
                }
                // delay
              ); // 👈 delay as timeline position
            });
        }
      );
    },
    { scope: container }
  );
  return (
    <main ref={container}>
      <HeroSection />
      <section className="hook margin grid place-items-center py-[96px]">
        <div className="container">
          <div className="wrapper hook-section flex flex-col gap-8">
            <h2 className="max-w-[1027px] hook1 opacity-0  font-semibold">
              With EkoMobility, you don’t just rent a vehicle; you unlock a
              platform of support, training, and decent income generation.
            </h2>
            <p className="max-w-[586px] hook2 opacity-0">
              Our flexible lease-to-own model, backed by technology, ensures you
              drive toward ownership while earning every day.
            </p>
            <div className="hook3 opacity-0">
              <Button className="w-min  " asChild>
                <Link href={"/#become-a-captain"}>Become a captain</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="solutions"
        className="solutions scroll-mt-[80px] bg-primary margin py-[96px] grid place-items-center gap-16 relative"
      >
        <Image
          alt="blur"
          src={"/images/rayblur.png"}
          width={197.78}
          height={1271.72}
          className="absolute top-0 -left-[100px] md:left-[1%] w-[600px]"
        />
        <Image
          alt="blur"
          src={"/images/rayblur.png"}
          width={197.78}
          height={1271.72}
          className="absolute top-0 left-[20%] hidden md:flex w-[600px]"
        />
        <h2>Our Solutions</h2>
        <div className="wrapper justify-center gap-8 flex flex-row  flex-wrap">
          {solutions &&
            solutions.map((solution, i) => (
              <FeatureCard
                className="feature-card-one"
                key={i}
                icon={solution.icon as IconType}
                title={solution.title}
                description={solution.description}
                bullets={solution.bullets}
              />
            ))}
        </div>
      </section>
      <section
        id="about"
        className="about-us scroll-mt-[80px] bg-white margin grid place-items-center py-16"
      >
        <div className="container flex flex-col items-center gap-6">
          <h2 className="mb-8 md:mb-16 text-center max-w-[448px]">About us</h2>
          {/* <div className="about hidden  bg-black/50 border border-black/10 p-8 pl-[48px] h-[508px] rounded-[16px] gap-6 md:grid grid-cols-2"> */}
          <div className="about hidden  bg-[#F8F6F3] border border-black/10 p-8 pl-[48px] h-[508px] rounded-[16px] gap-6 md:grid grid-cols-2">
            {/* <div className="about hidden  bg-[#F5F0EC] p-8 h-[508px] rounded-[16px] gap-6 md:grid grid-cols-2"> */}
            <div className=" py-8 flex flex-col justify-between">
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="72"
                  height="72"
                  rx="36"
                  fill="#F79420"
                  fillOpacity="0.2"
                />
                <path
                  d="M37.3301 24L26.7555 36.9245C26.3001 37.4812 26.0724 37.7595 26.0703 37.9942C26.0685 38.1982 26.1603 38.3918 26.3194 38.5197C26.5023 38.6667 26.8619 38.6667 27.5811 38.6667H35.9968L34.6635 48L45.2381 35.0755C45.6935 34.5188 45.9212 34.2405 45.9233 34.0058C45.9251 33.8018 45.8333 33.6082 45.6743 33.4803C45.4913 33.3333 45.1317 33.3333 44.4126 33.3333H35.9968L37.3301 24Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="flex flex-col gap-4">
                <h3>The Drive Behind Ekomobility</h3>
                {/* <h2>Get to know more about Ekomobility</h2> */}
                <p className="text-primary max-w-[480px]">
                  EkoMobility is a Tanzanian-born platform transforming urban
                  mobility through technology and sustainability. We provide
                  affordable, clean vehicles and digital tools that empower gig
                  workers and entrepreneurs to earn, own, and grow.
                </p>
              </div>
            </div>
            <Image
              alt="drivers celebrating"
              src={"/images/highfive.jpeg"}
              width={612}
              height={445}
              className="rounded-[8px] h-full object-cover"
            />
          </div>
          <div className="about mobile gap-6 flex-col md:hidden   flex">
            <div className="w-full py-8 flex flex-col bg-[#F8F6F3] p-8 border border-black/10  rounded-[16px] gap-16 justify-between">
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="72"
                  height="72"
                  rx="36"
                  fill="#F79420"
                  fillOpacity="0.2"
                />
                <path
                  d="M37.3301 24L26.7555 36.9245C26.3001 37.4812 26.0724 37.7595 26.0703 37.9942C26.0685 38.1982 26.1603 38.3918 26.3194 38.5197C26.5023 38.6667 26.8619 38.6667 27.5811 38.6667H35.9968L34.6635 48L45.2381 35.0755C45.6935 34.5188 45.9212 34.2405 45.9233 34.0058C45.9251 33.8018 45.8333 33.6082 45.6743 33.4803C45.4913 33.3333 45.1317 33.3333 44.4126 33.3333H35.9968L37.3301 24Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="flex flex-col gap-4">
                <h3>The Drive Behind Ekomobility</h3>
                {/* <h2>Get to know more about Ekomobility</h2> */}
                <p className="text-primary">
                  EkoMobility is a Tanzanian-born platform transforming urban
                  mobility through technology and sustainability. We provide
                  affordable, clean vehicles and digital tools that empower gig
                  workers and entrepreneurs to earn, own, and grow.
                </p>
              </div>
            </div>
            <Image
              alt="drivers celebrating"
              src={"/images/highfive.jpeg"}
              width={612}
              height={445}
              className="rounded-[8px]  object-cover"
            />
          </div>
          <div className="mission-vision grid grid-cols-1 md:grid-cols-2 w-full gap-6">
            {about &&
              about.map((item, i) => (
                <MissionVisionCard
                  className="mission-vision"
                  key={i}
                  description={item.description}
                  icon={item.icon as IconType}
                  name={item.name}
                />
              ))}
          </div>
        </div>
      </section>
      <section
        id="impact"
        className="margin py-8 pt-2 scroll-mt-[96px] md:py-12  grid place-items-center"
      >
        <div className="container flex flex-col ">
          <h2 className="mb-8 md:mb-16 text-center">Our impact</h2>
          <section className="grid grid-cols-1 items-center lg:grid-cols-2 gap-6">
            {/* <section className="flex bg-black flex-col items-center lg:flex-row gap-6"> */}
            <Image
              className="object-cover w-full lg:h-full rounded-2xl"
              src={"/images/graduates.jpeg"}
              alt="graduate drivers"
              height={479}
              width={662}
            />
            <div className="grid feature-cards-two-container grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6">
              {impact &&
                impact.map((item, i) => (
                  <FeatureCard
                    className={`w-full feature-card-two impact-card-${i + 1}`}
                    variant={2}
                    key={i}
                    description={item.desc}
                    icon={item.icon as IconType}
                    title={item.title}
                  />
                ))}
            </div>
          </section>
        </div>
      </section>
      <section className="partners bg-primary margin py-16 grid gap-4 md:gap-16 place-items-center">
        <div className="max-w-[586.79px] flex flex-col gap-8">
          <h2 className="text-center">Our partners</h2>
          <p className="text-center text-secondary ">
            We power your operations with reliable Captains and energy-efficient
            fleets. Whether you’re scaling deliveries or aiming to offset
            emissions, EkoMobility is your transportation partner.
          </p>
        </div>
        <section className="flowery  w-full grid place-items-center">
          <div className="desktop w-full h-max md:h-[350px] lg:h-[550px] py-16 relative">
            <div className="absolute top-[50%] hiddem md:flex left-[50%] z-[0] overflow-visible  aspect-[6/4] md:w-[40%] lg:w-[48%] -translate-x-[50%] -translate-y-[50%] ">
              <Pill className="absolute z-0 pill2  hidden md:grid -right-[200px] top-[15%] ">
                E-commerce
              </Pill>
              <Pill className="absolute z-0  pill4 hidden md:grid -right-[160px] lg:-right-[180px] bottom-[30%] ">
                Logistics
              </Pill>
              <Pill className="absolute z-0  pill1 hidden md:grid -left-[270px] lg:-left-[280px] top-[20%] ">
                Development Partners
              </Pill>
              <Pill className="absolute z-0  pill3 hidden md:grid -left-[190px] bottom-[20%] ">
                Ride-hailing
              </Pill>
              <Pill className="absolute z-0 pill5 hidden md:grid -bottom-[64px] left-[50%] -translate-x-[50%]   ">
                OEMs
              </Pill>
            </div>
            <div className="flex flex-wrap gap-2  justify-center mb-8">
              <Pill className="md:hidden right-[48px] top-[128px] ">
                E-commerce
              </Pill>
              <Pill className="md:hidden right-[128px] bottom-[128px] ">
                Logistics
              </Pill>
              <Pill className="md:hidden left-[20px] top-[156px] ">
                Development Partners
              </Pill>
              <Pill className="md:hidden left-[96px] bottom-[128px] ">
                Ride-hailing
              </Pill>
              <Pill className="md:hidden bottom-[4px] left-[50%]    ">
                OEMs
              </Pill>
            </div>
            <Image
              src={"/images/delivery.jpeg"}
              alt="delivery man"
              height={392.45}
              width={543}
              className="rounded-2xl aspect-[6/4] md:absolute top-[50%] left-[50%] md:-translate-x-[50%] md:-translate-y-[50%] z-auto lg:z-[5] delivery md:w-[30%] lg:w-[48%] justify-self-center"
            />
          </div>
        </section>
      </section>
      <section
        id="why-choose-us"
        className="why-choose-us scroll-mt-[96px] margin bg-primary py:8 md:py-16 grid place-items-center"
      >
        <div className="container grid gap-16 place-items-center">
          <h2 className="text-center">Why choose us</h2>
          <div className="wrapper w-full flex gap-8 flex-wrap justify-center">
            {reasons &&
              reasons.map((item, i) => (
                <FeatureCard
                  className="feature-card-three"
                  description={item.desc}
                  icon={item.icon as IconType}
                  title={item.title}
                  key={i}
                  variant={3}
                />
              ))}
          </div>
        </div>
      </section>
      <section
        id="become-a-captain"
        className="form margin scroll-mt-[80px] py-16 bg-white grid gap-16 place-items-center text-center"
      >
        <div className="max-w-[464px] flex flex-col gap-6">
          <h2 className="">Join us today, become a captain</h2>
          <p>
            Apply now to start your journey toward vehicle ownership and
            financial freedom.
          </p>
        </div>
        <Form />
      </section>
    </main>
  );
}
