import React from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 md:px-8 lg:px-16 grid place-items-center">
      <div className="flex flex-col justify-between items-center w-full gap-16 container">
        <div className="flex md:justify-between flex-col gap-16 items-center md:flex-row w-full">
          <h3 className="max-w-[512.69px] text-center md:text-left">
            Let’s build Africa’s sustainable mobility ecosystem together. Get in
            touch.
          </h3>
          <Button className="w-max" asChild>
            <Link href={"/#become-a-captain"}>Become a captain</Link>
          </Button>
        </div>
        <div className="flex justify-between flex-col-reverse gap-16 md:flex-row items-center w-full">
          <Logo variant="onBlack" />

          <div
            id="contact"
            className="text-center flex flex-col md:flex-row gap-8 md:gap-16 md:text-right text-gray-400"
          >
            <p>
              Dar es Salaam,
              <br />
              Tanzania
            </p>
            <div>
              <p>+255 (0) 674 648 966</p>
              <p>info@ekomobility.co</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center  items-center flex flex-col gap-4 text-gray-400">
        <p>
          EkoMobility ©<span>{new Date().getFullYear()}</span>. All rights
          reserved
        </p>
        <Link
          className="opacity-70 shadow-[inset_0_4px_8px_0_rgba(255,255,255,0.2),inset_0_-4px_8px_0_rgba(255,255,255,0.2)] py-[2px] rounded-full w-max px-[12px] bg-white/15"
          target="_blank"
          href={"https://www.franciskintungi.com"}
        >
          <p className="text-[14px]">Made by @franciskintungi</p>
        </Link>
      </div>
    </footer>
  );
}
