import React, { MutableRefObject, useEffect } from "react";
import { useIsomorphicLayoutEffect } from "usehooks-ts";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TitleProps {
  children: string;
  el?: any;
}

export const Title = ({ children, el }: TitleProps) => {
  const titleArr: Array<string> = children.split("");

  const titleRef: MutableRefObject<HTMLHeadingElement> = React.useRef(null);

  const animateTitle = () => {
    const letters = titleRef.current.children;
    const tl = gsap.timeline();
    tl.fromTo(
      letters,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          // start: "center center",
          scrub: 2,
        },
      }
    );
  };
  // const animateTitleScroll = () => {
  //   const letters = titleRef.current.children;
  // };

  useIsomorphicLayoutEffect(() => {
    animateTitle();
  }, []);

  return (
    <div>
      <h1 className="text-5xl text-red-600" ref={titleRef}>
        {titleArr.map((letter, index) => (
          <span key={index} className="inline-block">
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
};
