import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full max-w-6xl pb-16 lg:py-36 flex flex-col gap-8 items-center lg:flex-row-reverse lg:justify-start ">
      <div className="relative overflow-x-hidden flex-1 lg:absolute lg:-right-[120px]">
        <Image
          src={"/assets/illustration-working.svg"}
          alt="SVG image of a dude doing some work"
          className="ml-12 lg:ml-0"
          width={700}
          height={700}
        />
      </div>
      <div className="flex-1 text-center lg:text-left flex flex-col items-center gap-2 lg:items-start">
        <h1 className="text-title lg:text-titleLg lg:w-1/2">
          More than just shorter links
        </h1>
        <p className="lg:w-2/5 text-neutral2 text-sm lg:text-base">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing.
        </p>
        <Link
          href="#"
          className="w-max mt-2 py-3 px-10 rounded-full bg-primary1 text-white text-md lg:text-lg"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Hero;
