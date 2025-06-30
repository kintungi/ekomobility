"use client";

import { Button } from "@/components/ui/button";
// import { usePathname, useRouter } from "next/navigation";
// import { useContext, useEffect } from "react";
import Link from "next/link";
import Logo from "./_components/Logo";

function NotFound() {
  // const router = useRouter();
  // const page = usePathname();

  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  // }, []);

  return (
    <div className="text-defaultText  fixed left-0 margin  top-0 z-[99999] grid h-screen w-full items-center md:place-items-center bg-white">
      <div className=" rounded-3xl  bg-black/2 border border-black/10 margin py-16">
        <Logo variant="onWhite" />
        <h1 className=" mb-[32px] mt-16 text-4xl   md:text-5xl">
          Page not found.
        </h1>
        <div>
          <div className="mb-[24px] max-w-[400px] hidden  font-messina text-base font-[400]">
            The page you are looking for is not found, try again later or go
            back home
          </div>
          {/* {page !== "/" && ( */}
          <Link scroll={false} href={"/"}>
            <Button>Go back home</Button>
          </Link>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

export default NotFound;
