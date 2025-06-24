import React from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 md:px-8 lg:px-16 grid place-items-center">
      <div className="flex flex-col justify-between items-center w-full gap-16 container">
        <div className="flex justify-between w-full">
          <h3 className="max-w-[512.69px]">
            Let’s build Africa’s sustainable mobility ecosystem together. Get in
            touch.
          </h3>
          <Button>Become a captain</Button>
        </div>
        <div className="flex justify-between w-full">
          <Logo variant="onBlack" />

          <div className="text-center md:text-right text-gray-400">
            <p>
              Dar es Salaam,
              <br />
              Tanzania
            </p>
            <p>+255 (0) 674 648 966</p>
            <p>info@ekomobility.co</p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400">
        Made by Francis Kintungi
      </div>
    </footer>
  );
}
