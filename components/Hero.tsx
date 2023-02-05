import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row pb-16 lg:py-32">
      <div className="relative w-full overflow-x-hidden">
        <Image
          src={"/assets/illustration-working.svg"}
          alt="SVG image of a dude doing some work"
          className="ml-12"
          width={800}
          height={800}
        />
      </div>
      <div className="flex-1 text-center flex flex-col items-center gap-2">
        <h1 className="text-[34px]">More than just shorter links</h1>
        <p className="text-neutral2 text-[14px]">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing.
        </p>
        <Link
          href="#"
          className="w-max mt-2 py-3 px-10 rounded-full bg-primary1 text-white"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Hero;
