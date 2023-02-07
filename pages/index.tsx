import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LinkForm from "../components/LinkForm";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import Cta from "../components/Cta";
import { useRouter } from "next/router";
import { Shortly } from "../components/Shortly";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const router = useRouter();
  const targetSection = React.useRef(null);
  const [data, setData] = React.useState([]);
  let linkId = 0;

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
    // console.log(data);
    setData([...data, { id: linkId++, ...link.result }]);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  // const handleClick = (e: React.SyntheticEvent) => {};

  return (
    <main>
      <section>
        <Hero />
        <div className="relative z-10 w-full px-2">
          <LinkForm onSubmit={onSubmit} />
        </div>
        <div className="relative w-full pt-36 pb-16 -mt-16 bg-neutral-200">
          {data.length > 0 && (
            <div className="flex flex-col gap-4 max-w-6xl m-auto px-4 mb-28">
              {data.map((link) => {
                return (
                  <Shortly
                    key={link.id}
                    original_link={link.original_link}
                    short_link={link.short_link}
                  />
                );
              })}
            </div>
          )}

          <Statistics />
        </div>
        <Cta />
      </section>
    </main>
  );
}
