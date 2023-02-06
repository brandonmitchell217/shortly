import Image from "next/image";
import React from "react";

const LinkForm = ({ onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="relative flex flex-col gap-3 p-6 rounded-xl bg-primary2 bg-shortMobile bg-no-repeat bg-right-top md:flex-row md:px-12 md:bg-shortDesktop md:bg-cover"
    >
      <input
        className="p-3 rounded-md text-[14px] md:flex-1"
        type="text"
        placeholder="Shorten a link here..."
      />
      <button
        type="submit"
        className="bg-primary1 text-white rounded-md py-2 text-[15px] md:px-8"
      >
        Shorten it!
      </button>
    </form>
  );
};

export default LinkForm;
