import React from "react";

import "./DogBreedViewer.css";

export const DogBreedViewer = ({ currentBreedUrl }) => {
  return (
    <div className="content__dog-viewer__container">
      <h2 className="content__dog-viewer__title">
        And make you <span>life problems go away</span>
      </h2>
      <img
        className="content__dog-viewer__img"
        src={
          currentBreedUrl
            ? currentBreedUrl
            : "https://en.bcdn.biz/Images/2018/4/30/3947c575-2a29-4127-9675-ff305a946278.jpg"
        }
      />
    </div>
  );
};
