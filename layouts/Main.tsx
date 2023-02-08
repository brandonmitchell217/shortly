import { gsap } from "gsap";
import { useIsomorphicLayoutEffect } from "usehooks-ts";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
}
export const Main = ({ children }: SectionProps) => {
  const ref = React.useRef();

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(ref.current, { scale: 0, autoAlpha: 0, y: 300, duration: 0.5 });
    });
    return () => ctx.revert();
  }, []);
  return <main ref={ref}>{children}</main>;
};
