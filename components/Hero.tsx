import Image from "next/image";
import Link from "next/link";
import onClickFake from "../util/FakeClick";
import React from "react";

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

const HeroContainerStyles =
  "w-full max-w-6xl pb-16 lg:py-36 flex flex-col gap-8 items-center lg:flex-row-reverse lg:justify-start";

const ImageContainerStyles =
  "relative overflow-x-hidden flex-1 lg:absolute lg:-right-[120px]";

const ImageStyles = "ml-12 lg:ml-0";

// TO-DO: Add padding to mobile
const TextContainerStyles =
  "px-4 lg:px-0 flex-1 text-center lg:text-left flex flex-col items-center gap-2 lg:items-start";

const TitleStyles = "text-title lg:text-titleLg lg:w-1/2";

const DescriptionStyles = "text-neutral2 text-sm lg:text-base lg:w-2/5";

const ButtonStyles =
  "w-max mt-2 py-3 px-10 rounded-full bg-primary1 text-white text-md lg:text-lg";

const Hero = () => {
  return (
    <div className={HeroContainerStyles}>
      <div className={ImageContainerStyles}>
        <Image
          src={"/assets/illustration-working.svg"}
          alt="SVG image of a dude doing some work"
          className={ImageStyles}
          width={700}
          height={700}
        />
      </div>
      <div className={TextContainerStyles}>
        <h1 className={TitleStyles}>{HeroText.title}</h1>
        <p className={DescriptionStyles}>{HeroText.description}</p>
        <Link
          href="/"
          className={ButtonStyles}
          onClick={onClickFake}
          aria-label="Get Started"
        >
          {HeroText.cta}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
