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

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="hook margin grid place-items-center py-[96px]">
        <div className="container">
          <div className="wrapper flex flex-col gap-8">
            <h2 className="max-w-[1027px] text-[36px] font-semibold">
              With EkoMobility, you don’t just rent a vehicle; you unlock a
              platform of support, training, and decent income generation.
            </h2>
            <p className="max-w-[586px]">
              Our flexible lease-to-own model, backed by technology, ensures you
              drive toward ownership while earning every day.
            </p>
            <Button className="w-min">Become a captain</Button>
          </div>
        </div>
      </section>
      <section className="solutions bg-primary margin py-[96px] grid place-items-center gap-16">
        <h2>Our Solutions</h2>
        <div className="wrapper justify-center gap-8 flex flex-row  flex-wrap">
          {solutions &&
            solutions.map((solution, i) => (
              <FeatureCard
                key={i}
                icon={solution.icon as IconType}
                title={solution.title}
                description={solution.description}
                bullets={solution.bullets}
              />
            ))}
        </div>
      </section>
      <section className="about-us bg-white margin grid place-items-center py-16">
        <div className="container flex flex-col gap-6">
          <div className="about bg-primary/50 p-8 h-[508px] rounded-[16px] gap-6 flex">
            <div className="w-[50%] py-8 flex flex-col justify-between">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.979 6.28296C28.106 5.39429 27.6253 4.5299 26.8033 4.16893C25.9814 3.80796 25.0197 4.03886 24.4512 4.73364L8.54411 24.1756C8.24214 24.5446 7.93541 24.9193 7.71233 25.2487C7.50026 25.5618 7.11651 26.1736 7.10949 26.9738C7.10144 27.892 7.51434 28.7634 8.2301 29.3386C8.85386 29.8398 9.57035 29.9302 9.94698 29.9644C10.3432 30.0003 10.8274 30.0002 11.3042 30.0001L21.6931 30.0001L20.0192 41.7173C19.8923 42.6059 20.373 43.4703 21.1949 43.8313C22.0169 44.1923 22.9786 43.9614 23.547 43.2666L39.4541 23.8246C39.7561 23.4557 40.0628 23.0809 40.2859 22.7515C40.498 22.4384 40.8818 21.8266 40.8888 21.0264C40.8968 20.1082 40.4839 19.2369 39.7682 18.6617C39.1444 18.1604 38.4279 18.07 38.0513 18.0359C37.6551 17.9999 37.1708 18 36.694 18.0001L26.3052 18.0001L27.979 6.28296Z"
                  fill="white"
                />
              </svg>
              <div className="flex flex-col gap-8">
                <h2>Get to know more about Ekomobility</h2>
                <p className="text-secondary">
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
              className="rounded-[8px] w-[50%] object-cover"
            />
          </div>
          <div className="mission-vision grid grid-cols-2 gap-6">
            {about &&
              about.map((item, i) => (
                <MissionVisionCard
                  key={i}
                  description={item.description}
                  icon={item.icon as IconType}
                  name={item.name}
                />
              ))}
          </div>
        </div>
      </section>
      <section id="impact" className="margin py-12  grid place-items-center">
        <div className="container flex flex-col gap-16">
          <h2 className="mb-4 text-center">Our impact</h2>
          <section className="flex gap-6">
            <Image
              className="object-cover rounded-2xl"
              src={"/images/graduates.jpeg"}
              alt="graduate drivers"
              height={479}
              width={662}
            />
            <div className="grid grid-cols-2 grid-rows-2 gap-6">
              {impact &&
                impact.map((item, i) => (
                  <FeatureCard
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
      <section className="partners bg-primary margin py-16 grid gap-16 place-items-center">
        <div className="max-w-[586.79px] flex flex-col gap-8">
          <h2 className="text-center">Our partners</h2>
          <p className="text-center text-secondary ">
            We power your operations with reliable Captains and energy-efficient
            fleets. Whether you’re scaling deliveries or aiming to offset
            emissions, EkoMobility is your transportation partner.
          </p>
        </div>
        <section className="flowery margin w-full grid place-items-center">
          <div className="container w-full py-16 relative">
            <Pill className="absolute right-[48px] top-[128px] ">
              E-commerce
            </Pill>
            <Pill className="absolute right-[128px] bottom-[128px] ">
              Logistics
            </Pill>
            <Pill className="absolute left-[20px] top-[156px] ">
              Development Partners
            </Pill>
            <Pill className="absolute left-[96px] bottom-[128px] ">
              Ride-hailing
            </Pill>
            <Pill className="absolute bottom-[4px] left-[50%] -translate-x-[50%]   ">
              OEMs
            </Pill>
            <Image
              src={"/images/delivery.jpeg"}
              alt="delivery man"
              height={392.45}
              width={543}
              className="rounded-2xl w-[48%] justify-self-center"
            />
          </div>
        </section>
      </section>
      <section className="why-choose-us margin bg-primary py-16 grid place-items-center">
        <div className="container grid gap-16 place-items-center">
          <h2 className="text-center">Why choose us</h2>
          <div className="wrapper w-full flex gap-8 flex-wrap justify-center">
            {reasons &&
              reasons.map((item, i) => (
                <FeatureCard
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
      <section className="form margin py-16 bg-white grid gap-16 place-items-center text-center">
        <div className="max-w-[464px] flex flex-col gap-6">
          <h2 className="">Join us today, become a captain</h2>
          <p>
            Apply now to start your journey toward vehicle ownership and
            financial freedom.
          </p>
        </div>
        <form className="mx-auto grid grid-cols-1 gap-2 gap-y-10 max-w-[924px]">
          <div className="wrapper gap-x-[128px] gap-y-[64px] grid grid-cols-2 grid-rows-2">
            <section className="personal-infomation form-section">
              <p className="form-section-title">Personal information</p>
              <div className="input-wrapper">
                <p className="form-input-title">Full name / Jina kamili</p>
                <input
                  type="text"
                  placeholder="Juma Rajabu"
                  className="input"
                />
              </div>
              <div className="input-wrapper">
                <p className="form-input-title">Phone number / Namba ya simu</p>
                <input
                  type="number"
                  placeholder="+255 692000000"
                  className="input"
                />
              </div>
            </section>

            <section className="location form-section">
              <p className="form-section-title">Location</p>
              <div className="input-wrapper">
                <p className="form-input-title">City / Town / Mji / Jiji</p>
                <input
                  type="text"
                  placeholder="eg Dar es salaam"
                  className="input"
                />
              </div>
              <div className="input-wrapper">
                <p className="form-input-title">Ward / Area / Kata / Tarafa</p>
                <input
                  type="number"
                  placeholder="eg Kisukulu"
                  className="input"
                />
              </div>
            </section>

            <section className="riding-experience form-section">
              <p className="form-section-title">Riding experience</p>
              <div className="input-wrapper">
                <p className="form-input-title">
                  Do you have a valid driving license? / Je, una leseni ya
                  udereva?
                </p>
                <input
                  type="text"
                  placeholder="eg Dar es salaam"
                  className="input"
                />
              </div>
              <div className="input-wrapper">
                <p className="form-input-title">
                  Years of Riding Experience / Miaka ya uzoefu wa udereva
                </p>
                <input
                  type="number"
                  placeholder="eg Kisukulu"
                  className="input"
                />
              </div>
            </section>

            <section className="Additional information form-section">
              <p className="form-section-title">Additional information</p>
              <div className="input-wrapper">
                <p className="form-input-title">
                  Do you own a smartphone? / Unamiliki simu janja?
                </p>
                <input
                  type="text"
                  placeholder="eg Dar es salaam"
                  className="input"
                />
              </div>
              <div className="input-wrapper">
                <p className="form-input-title">
                  How did you hear about us? (Social Media, Word of Mouth,
                  Referral, Roadshow, Other) / Ni wapi ulisikia kuhusu sisi?
                </p>
                <input
                  type="number"
                  placeholder="eg Kisukulu"
                  className="input"
                />
              </div>
            </section>
          </div>

          <Button>Submit</Button>
        </form>
      </section>
    </main>
  );
}
