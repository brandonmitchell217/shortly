import React from "react";

interface ShortlyProps {
  original_link: string;
  short_link: string;
}

const ContainerStyles =
  "py-4 flex flex-col lg:flex-row gap-4 items-center justify-between bg-white rounded-lg";

const TitleContainerStyles = "max-w-full lg:flex-1 px-4";

const TitleStyles = "text-md lg:text-base truncate text-ellipsis";

const LinkContainerStyles =
  "w-full py-4 lg:w-auto border-t border-neutral1 lg:border-none";

const LinkInnerContainerStyles =
  "w-full px-4 flex flex-col lg:flex-row items-center gap-4";

export const Shortly = ({ original_link, short_link }: ShortlyProps) => {
  const [copy, setCopy] = React.useState(false);

  const ButtonStyles = `w-full py-2 px-8 text-white rounded-md ${
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
          <h3 className="text-primary1">{short_link}</h3>
          <button className={ButtonStyles} onClick={handleClick}>
            {copy ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
};
