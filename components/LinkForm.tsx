import React from "react";

const LinkForm = ({ onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-3 p-6 rounded-xl bg-primary2"
    >
      <input
        className="p-3 rounded-md text-[14px]"
        type="text"
        placeholder="Shorten a link here..."
      />
      <button
        type="submit"
        className="bg-primary1 text-white rounded-md py-2 text-[15px]"
      >
        Shorten it!
      </button>
    </form>
  );
};

export default LinkForm;
