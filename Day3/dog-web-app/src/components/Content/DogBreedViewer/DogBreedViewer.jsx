import React from "react";

import "./DogBreedViewer.css";

export const DogBreedViewer = (props) => {
  return (
    <div className="content__dog-viewer__container">
      <h2 className="content__dog-viewer__title">
        And make you <span>life problems go away</span>
      </h2>
      <img alt="" className="content__dog-viewer__img" src={props.dogViewUrl} />
    </div>
  );
};
