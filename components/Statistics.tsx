import Image from "next/image";
import React from "react";

const statsHeader: { title: string; description: string } = {
  title: "Advanced Statistics",
  description: `Track how your links are performing across the web with our advanced statistics dashboard.`,
};
const stats: { title: string; description: string; icon: string }[] = [
  {
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    icon: "assets/icon-brand-recognition.svg",
  },
  {
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    icon: "assets/icon-detailed-records.svg",
  },
  {
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    icon: "assets/icon-fully-customizable.svg",
  },
];

const Statistics = () => {
  return (
    <div className="max-w-6xl m-auto lg:py-12 text-center">
      <div className="space-y-3 mb-20">
        <h2 className="text-lg lg:text-title">{statsHeader.title}</h2>
        <p className="text-md lg:text-base lg:w-1/2 lg:m-auto text-neutral2">
          {statsHeader.description}
        </p>
      </div>
      <div className="w-full px-3 flex flex-col md:flex-row gap-16 md:gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`relative flex flex-col justify-center items-center lg:items-start lg:justify-start lg:text-left gap-6 md:w-1/3 h-64 border pt-16 pb-6 bg-white rounded  shadow-lg lg:shadow-xl ${
              index === 1 && "md:mt-12"
            } ${index === 2 && "md:mt-24"}`}
          >
            <div className="w-20 h-20 bg-primary2 rounded-full absolute -top-10 lg:left-6 flex items-center justify-center">
              <Image src={stat.icon} alt={stat.title} height={45} width={45} />
            </div>
            <div className="space-y-4 px-4">
              <h3 className="lg:text-lg">{stat.title}</h3>
              <p className="text-sm text-neutral2">{stat.description}</p>
            </div>
            <div
              className={`absolute -bottom-12 left-1/2 -translate-x-1/2 z-0 bg-primary1 w-2 h-12 ${
                index === 2 && "hidden"
              } md:h-2 md:w-12 md:bottom-1/2 md:-translate-y-1/2 md:translate-x-0 md:left-full`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
