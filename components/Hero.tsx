import Image from "next/image";
import React from "react";
import Image1 from "../public/assets/illustration-working.svg";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex-1">
        <h1>Hero</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa
          id rerum quaerat? Eos consectetur totam explicabo nisi!
        </p>
        <a href="#">Get Started</a>
      </div>
      <div className="relative w-full h-64">
        <Image
          src={"/assets/illustration-working.svg"}
          alt="SVG image of a dude doing some work"
          fill={true}
        />
      </div>
    </div>
  );
};

export default Hero;
