import React from "react";

import "./MovieCard.css";

export const MovieCardFunction = ({
  title,
  description,
  imgUrl,
  imdbLink,
  rottenTomatoLink,
}) => {
  return (
    <div
      className="movie-card"
      style={{ background: `url(${imgUrl}) center center` }}
    >
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__description">{description}</p>
      <div className="more">
        <img src="/assets/svg/dots.svg" className="more__icon" />
      </div>
    </div>
  );
};
