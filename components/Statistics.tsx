import Image from "next/image";
import React from "react";

const Statistics = () => {
  const stats = [
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
  return (
    <div className="text-center">
      <div className="space-y-3 mb-16">
        <h2 className="text-[22px]">Advanced Statistics</h2>
        <p className="text-[15px] text-neutral2">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="w-full px-3 grid grid-col-1 gap-20 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-center items-center gap-6 border pt-14 pb-6 bg-white"
          >
            <div className="w-20 h-20 bg-primary2 rounded-full absolute -top-10 flex items-center justify-center">
              <Image src={stat.icon} alt={stat.title} height={45} width={45} />
            </div>
            <div className="space-y-4 px-4">
              <h3>{stat.title}</h3>
              <p className="text-[15px] text-neutral2">{stat.description}</p>
            </div>
            <div
              className={`absolute -bottom-12 left-1/2 -translate-x-1/2 -z-10 bg-primary1 w-2 h-12 ${
                index === 2 && "hidden"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
