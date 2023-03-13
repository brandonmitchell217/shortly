import Image from "next/image";
import onClickFake from "../util/FakeClick";
import React from "react";
import { Button } from "./Button";

interface HeroProps {
  title: string;
  description: string;
  cta: string;
}

const HeroText: HeroProps = {
  title: "More than just shorter links",
  description:
    "Build your brand’s recognition and get detailed insights on how your links are performing.",
  cta: "Get Started",
};

const HeroContainerStyles: string =
  "w-full max-w-6xl pb-16 lg:py-36 lg:px-6 xl:px-0 flex flex-col gap-8 items-center lg:flex-row-reverse lg:justify-start";

const ImageContainerStyles: string =
  "relative overflow-x-hidden flex-1 lg:absolute lg:-right-[120px]";

const ImageStyles: string = "ml-12 lg:ml-0";

const TextContainerStyles: string =
  "px-4 lg:px-0 flex-1 text-center lg:text-left flex flex-col items-center gap-2 lg:items-start";

const TitleStyles: string = "text-title lg:text-titleLg lg:w-1/2";

const DescriptionStyles: string = "text-neutral2 text-sm lg:text-base lg:w-2/5";

const Hero = () => {
  return (
    <div className={HeroContainerStyles}>
      <div className={ImageContainerStyles}>
        <Image
          src={"/assets/illustration-working.svg"}
          alt="SVG image of a person doing some work"
          className={ImageStyles}
          width={700}
          height={700}
          placeholder="blur"
          blurDataURL={"/assets/illustration-working.svg"}
        />
      </div>
      <div className={TextContainerStyles}>
        <h1 className={TitleStyles}>{HeroText.title}</h1>
        <p className={DescriptionStyles}>{HeroText.description}</p>
        <Button type="link" style="rounded-full" onClick={onClickFake}>
          {HeroText.cta}
        </Button>
      </div>
    </div>
  );
};

export default Hero;
