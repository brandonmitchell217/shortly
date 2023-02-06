import Image from "next/image";
import React from "react";

const LinkText: { placeholder: string; button: string } = {
  placeholder: "Shorten a link here...",
  button: "Shorten it!",
};

const LinkForm = ({ onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="relative flex flex-col gap-3 p-6 rounded-xl bg-primary2 bg-shortMobile bg-no-repeat bg-right-top md:flex-row md:p-12 md:bg-shortDesktop md:bg-cover max-w-6xl m-auto"
    >
      <input
        className="p-3 rounded-md text-sm md:flex-1 lg:text-base"
        type="text"
        placeholder={LinkText.placeholder}
      />
      <button
        type="submit"
        className="py-2 md:px-8 bg-primary1 text-white rounded-md text-md lg:text-lg "
      >
        {LinkText.button}
      </button>
    </form>
  );
};

export default LinkForm;
