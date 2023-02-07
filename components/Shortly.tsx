import React from "react";

interface ShortlyProps {
  original_link: string;
  short_link: string;
}

export const Shortly = ({ original_link, short_link }: ShortlyProps) => {
  const [copy, setCopy] = React.useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(short_link);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };
  return (
    <div className="py-4 flex flex-col lg:flex-row gap-4 items-center justify-between bg-white rounded-lg">
      <div className="max-w-full lg:flex-1 px-4 ">
        <h3 className="text-md lg:text-base truncate text-ellipsis">
          {original_link}
        </h3>
      </div>
      <div className="w-full py-4 lg:w-auto border-t border-neutral1 lg:border-none">
        <div className="w-full px-4 flex flex-col lg:flex-row items-center gap-4">
          <h3 className="text-primary1">{short_link}</h3>
          <button
            className={`w-full py-2 px-8 text-white rounded-md ${
              copy ? "bg-primary2" : "bg-primary1"
            }`}
            onClick={handleClick}
          >
            {copy ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
};
