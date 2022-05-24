import React from "react";

export const MovieCard = (props) => {
  return (
    <div className="movie-card">
      <h3 className="movie-card__title">{props.title}</h3>
      <p className="movie-card__description">{props.description}</p>
      <img className="movie-card__description" src={props.posterUrl} />
    </div>
  );
};
