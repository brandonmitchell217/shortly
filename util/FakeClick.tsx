import React from "react";
export default function onClickFake(e: React.SyntheticEvent) {
  e.preventDefault();
  return alert("Sorry, this button doesn't work!");
}
