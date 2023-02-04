import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full h-64 ml-3">
        <Image
          src={"/assets/illustration-working.svg"}
          alt="SVG image of a dude doing some work"
          fill={true}
        />
      </div>
      <div className="flex-1 text-center">
        <h1 className="text-[46px]">More than just shorter links</h1>
        <p className="text-neutral1">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are perfomring.
        </p>
        <a href="#">Get Started</a>
      </div>
    </div>
  );
};

export default Hero;
