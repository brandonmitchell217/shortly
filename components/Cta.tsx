import Link from "next/link";
import React from "react";
import onClickFake from "../util/FakeClick";

interface CtaProps {
  title: string;
  cta: string;
}

const ctaText: CtaProps = {
  title: "Boost your links today",
  cta: "Get Started",
};
const ContainerStyles =
  "w-full py-16 flex justify-center bg-primary2 bg-boostMobile bg-no-repeat bg-cover md:bg-boostDesktop text-white";
const InnerStyles =
  "max-w-6xl m-auto flex flex-col items-center gap-3 lg:gap-6";
const ButtonStyles =
  "w-max mt-2 py-3 px-10 rounded-full bg-primary1 text-white text-md lg:text-lg";

const Cta = () => {
  return (
    <div className={ContainerStyles}>
      <div className={InnerStyles}>
        <h2 className="text-lg lg:text-title">{ctaText.title}</h2>
        <Link
          href="/"
          className={ButtonStyles}
          onClick={onClickFake}
          aria-label={`${ctaText.cta} link`}
        >
          {ctaText.cta}
        </Link>
      </div>
    </div>
  );
};

export default Cta;
