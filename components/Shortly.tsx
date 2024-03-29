import Link from "next/link";
import React from "react";

interface ShortlyProps {
  original_link: string;
  short_link: string;
}

const ContainerStyles: string =
  "py-4 flex flex-col lg:flex-row gap-4 items-center justify-between bg-white rounded-lg";

const TitleContainerStyles: string = "max-w-full lg:flex-1 px-4";

const TitleStyles: string =
  "text-md lg:text-base line-clamp text-ellipsis leading-5";

const LinkContainerStyles: string =
  "w-full py-4 lg:w-auto border-t border-neutral1 lg:border-none";

const LinkInnerContainerStyles: string =
  "w-full px-4 flex flex-col lg:flex-row items-center gap-4";

export const Shortly = ({ original_link, short_link }: ShortlyProps) => {
  const [copy, setCopy] = React.useState<boolean>(false);

  const ButtonStyles: string = `w-full py-2 px-8 text-white rounded-md ${
    copy ? "bg-primary2" : "bg-primary1"
  }`;

  const handleClick = () => {
    navigator.clipboard.writeText(short_link);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };
  return (
    <div className={ContainerStyles}>
      <div className={TitleContainerStyles}>
        <h3 className={TitleStyles}>{original_link}</h3>
      </div>
      <div className={LinkContainerStyles}>
        <div className={LinkInnerContainerStyles}>
          <Link
            href={short_link}
            target="_blank"
            className="text-primary1 font-bold shortly"
            aria-label="Shortened Link"
          >
            {short_link}
          </Link>
          <button
            className={ButtonStyles}
            onClick={handleClick}
            aria-label="Copy button"
          >
            {copy ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
};
