import React from "react";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import Cta from "../components/Cta";
import { Shortly } from "../components/Shortly";
import FormLink from "../components/FormLink";

interface Link {
  id: number;
  original_link: string;
  short_link: string;
}

export default function Home() {
  const [data, setData] = React.useState<Link[]>([]);
  let linkId = 0;

  async function getData(url: string): Promise<{ ok: boolean; result: Link }> {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    if (!res.ok) {
      alert("Sorry, there was a problem getting the data.");
    }

    return res.json();
  }

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    let url = e.target[0].value;
    const link: { ok: boolean; result: Link } = await getData(url);
    setData([...data, { id: linkId++, ...link.result }]);
  };

  return (
    <section>
      <Hero />
      <div className="relative z-10 w-full px-2">
        <FormLink onSubmit={onSubmit} />
      </div>
      <div className="relative w-full pt-36 pb-16 -mt-16 bg-neutral-200">
        {data.length > 0 && (
          <div className="flex flex-col gap-4 max-w-6xl m-auto px-4 mb-28">
            {data.map((link: Link) => {
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
  );
}
