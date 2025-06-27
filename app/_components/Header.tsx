"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navLinks = [
  { name: "About", url: "#about" },
  { name: "Solutions", url: "#solutions" },
  { name: "Why choose us", url: "#why-choose-us" },
  { name: "Impact", url: "#impact" },
  { name: "Contact", url: "#contact" },
  // { name: "Become a captain", url: "#become-a-captain" },
];

export default function Header() {
  const [MenuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <header className="grid fixed w-full top-0 z-[500] border-primary/10 border-b-[1px] bg-secondary place-items-center overflow-visible h-[80px] margin">
      <section
        className={`mobile-nav  lg:hidden fixed grid place-items-center top-0 left-0 h-[100dvh] w-full bg-accent text-primary transition-all duration-400 ${MenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="h-[80px] w-full margin grid justify-end absolute top-0 items-center">
          <svg
            onClick={() => setMenuOpen(!MenuOpen)}
            className={"cursor-pointer"}
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="20"
              height="2"
              transform="translate(2.21875 14.3633) rotate(-45)"
              fill="black"
            />
            <rect
              width="20"
              height="2"
              transform="translate(3.63281 0.222656) rotate(45)"
              fill="black"
            />
          </svg>
        </div>
        <nav className="overflow-visible  items-center gap-8 flex flex-col">
          {navLinks &&
            navLinks.map((link, i) => (
              <Link
                onClick={() => {
                  setMenuOpen(false);
                }}
                key={i}
                href={link.url}
                className="text-[24px] font-medium"
              >
                {link.name}
              </Link>
            ))}

          {/* <Button>Become a captain</Button> */}
          {/* <button className="bg-accent font-medium h-10 px-8 rounded-full text-primary shadow-[0_-12px_34px_0_rgba(247,148,32,0.3),0_12px_34px_0_rgba(247,148,32,0.3),12px_0_34px_0_rgba(247,148,32,0.3),-12px_0_34px_0_rgba(247,148,32,0.3),inset_0_-4px_4px_0_rgba(255,255,255,0.2),inset_0_4px_4px_0_rgba(255,255,255,0.2)]">
              Become a captain
            </button> */}
        </nav>
      </section>
      <div className="container overflow-visible">
        <div className="wrapper flex overflow-visible justify-between items-center">
          <Logo variant="onWhite" />
          <svg
            onClick={() => {
              setMenuOpen(!MenuOpen);
            }}
            className={"lg:hidden cursor-pointer"}
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="2" fill="black" />
            <rect
              width="20"
              height="2"
              transform="translate(0 6)"
              fill="black"
            />
            <rect
              width="20"
              height="2"
              transform="translate(0 12)"
              fill="black"
            />
          </svg>
          <nav className="overflow-visible  items-center gap-6 hidden lg:flex">
            {navLinks &&
              navLinks.map((link, i) => (
                <Link key={i} href={link.url} className="font-medium">
                  {link.name}
                </Link>
              ))}

            <Button asChild>
              <Link href={"/#become-a-captain"}>Become a captain</Link>
            </Button>
            {/* <button className="bg-accent font-medium h-10 px-8 rounded-full text-primary shadow-[0_-12px_34px_0_rgba(247,148,32,0.3),0_12px_34px_0_rgba(247,148,32,0.3),12px_0_34px_0_rgba(247,148,32,0.3),-12px_0_34px_0_rgba(247,148,32,0.3),inset_0_-4px_4px_0_rgba(255,255,255,0.2),inset_0_4px_4px_0_rgba(255,255,255,0.2)]">
              Become a captain
            </button> */}
          </nav>
        </div>
      </div>
    </header>
  );
}

function Hamburger({
  className,
  onClick,
}: {
  className?: string;
  onClick: (value: React.SetStateAction<boolean>) => void;
}) {
  return (
    <svg
      onClick={() => {
        onClick;
      }}
      className={className}
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="2" fill="black" />
      <rect width="20" height="2" transform="translate(0 6)" fill="black" />
      <rect width="20" height="2" transform="translate(0 12)" fill="black" />
    </svg>
  );
}

function CancelButton({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="20"
        height="2"
        transform="translate(2.21875 14.3633) rotate(-45)"
        fill="black"
      />
      <rect
        width="20"
        height="2"
        transform="translate(3.63281 0.222656) rotate(45)"
        fill="black"
      />
    </svg>
  );
}
