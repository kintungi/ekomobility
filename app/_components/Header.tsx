import React from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navLinks = [
  { name: "About", url: "#about" },
  { name: "Solutions", url: "#solutions" },
  { name: "Why choose us", url: "#why-choose-us" },
  { name: "Impact", url: "#impact" },
  { name: "Contact", url: "#contact" },
  //   { name: "Become a captain", url: "#become-a-captain" },
];

export default function Header() {
  return (
    <header className="grid fixed w-full top-0 z-50 bg-secondary place-items-center overflow-visible h-[80px] margin">
      <div className="container overflow-visible">
        <div className="wrapper flex overflow-visible justify-between items-center">
          <Logo variant="onWhite" />
          <nav className="overflow-visible md:flex items-center gap-6">
            {navLinks &&
              navLinks.map((link, i) => (
                <Link key={i} href={link.url} className="font-medium">
                  {link.name}
                </Link>
              ))}

            <Button>Become a captain</Button>
            {/* <button className="bg-accent font-medium h-10 px-8 rounded-full text-primary shadow-[0_-12px_34px_0_rgba(247,148,32,0.3),0_12px_34px_0_rgba(247,148,32,0.3),12px_0_34px_0_rgba(247,148,32,0.3),-12px_0_34px_0_rgba(247,148,32,0.3),inset_0_-4px_4px_0_rgba(255,255,255,0.2),inset_0_4px_4px_0_rgba(255,255,255,0.2)]">
              Become a captain
            </button> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
