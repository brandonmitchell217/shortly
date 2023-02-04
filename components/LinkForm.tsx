import React from "react";

const LinkForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input className="p-1 mr-2" type="text" placeholder="link" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LinkForm;
