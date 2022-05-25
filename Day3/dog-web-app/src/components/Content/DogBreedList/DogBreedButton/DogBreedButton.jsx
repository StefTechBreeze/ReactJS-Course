import React from "react";

import "./DogBreedButton.css";

export const DogBreedButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={
        props.selected
          ? "content__dog-list__button content__dog-list__button--selected"
          : "content__dog-list__button"
      }
    >
      {props.children}
    </button>
  );
};
