import Link from "next/link";
import React from "react";
import onClickFake from "../util/FakeClick";
import { Button } from "./Button";

interface CtaProps {
  title: string;
  cta: string;
}

const ctaText: CtaProps = {
  title: "Boost your links today",
  cta: "Get Started",
};
const ContainerStyles: string =
  "w-full py-16 flex justify-center bg-primary2 bg-boostMobile bg-no-repeat bg-cover md:bg-boostDesktop text-white";
const InnerStyles: string =
  "max-w-6xl m-auto flex flex-col items-center gap-3 lg:gap-6";

const Cta = () => {
  return (
    <div className={ContainerStyles}>
      <div className={InnerStyles}>
        <h2 className="text-lg lg:text-title">{ctaText.title}</h2>
        <Button type="link" style="rounded-full" onClick={onClickFake}>
          {ctaText.cta}
        </Button>
      </div>
    </div>
  );
};

export default Cta;
