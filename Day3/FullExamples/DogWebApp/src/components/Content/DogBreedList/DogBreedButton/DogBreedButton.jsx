import React from "react";

import "./DogBreedButton.css";

export const DogBreedButton = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`content__dog-list__button ${
        isActive ? "content__dog-list__button--selected" : null
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
