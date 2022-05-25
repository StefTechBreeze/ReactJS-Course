import React, { useState } from "react";

import "./RandomDogBreedViewer.css";

export const RandomDogBreedViewer = () => {
  const [currentDogUrl, setCurrentDogUrl] = useState(null);

  return (
    <div className="content__random-dog-viewer__container">
      <button
        className="content__random-dog-viewer__button"
        onClick={() => {
          fetch("https://dog.ceo/api/breeds/image/random")
            .then((r) => r.json())
            .then(({ message }) => {
              setCurrentDogUrl(message);
            });
        }}
      >
        Click to see a <span>random dog</span>
      </button>
      <img
        className="content__random-dog-viewer__img"
        src={
          currentDogUrl
            ? currentDogUrl
            : "https://en.bcdn.biz/Images/2018/4/30/3947c575-2a29-4127-9675-ff305a946278.jpg"
        }
      />
    </div>
  );
};
