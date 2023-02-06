import Link from "next/link";
import React from "react";

interface CtaProps {
  title: string;
  cta: string;
}

const ctaText: CtaProps = {
  title: "Boost your links today",
  cta: "Get Started",
};
const Cta = () => {
  return (
    <div className="w-full py-16 flex justify-center bg-primary2 bg-boostMobile bg-no-repeat bg-cover md:bg-boostDesktop text-white">
      <div className="flex flex-col items-center gap-3 lg:gap-6 max-w-6xl m-auto">
        <h2 className="text-lg lg:text-title">{ctaText.title}</h2>
        <Link
          href="#"
          className="w-max mt-2 py-3 px-10 rounded-full bg-primary1 text-white text-md lg:text-lg"
        >
          {ctaText.cta}
        </Link>
      </div>
    </div>
  );
};

export default Cta;
