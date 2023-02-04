import React, {
  HTMLAttributes,
  HtmlHTMLAttributes,
  MutableRefObject,
} from "react";

import { Title } from "../components/Title";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LinkForm from "../components/LinkForm";
import Hero from "../components/Hero";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const targetSection = React.useRef(null);
  const [data, setData] = React.useState(null);

  async function getData(url: string) {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    if (!res.ok) {
      alert("Sorry, there was a problem getting the data.");
    }

    return res.json();
  }

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const url = e.target[0].value;
    const link = await getData(url);

    setData(link);
  };

  return (
    <main>
      <section className="h-screen flex flex-col justify-center items-center">
        <Hero />
        <div>
          <LinkForm onSubmit={onSubmit} />
          <div>{data ? data.result.short_link : null}</div>
        </div>
      </section>
    </main>
  );
}
