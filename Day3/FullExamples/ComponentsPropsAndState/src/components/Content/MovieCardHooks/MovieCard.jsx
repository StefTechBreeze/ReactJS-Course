import React, { useState } from "react";

import "./MovieCard.css";

export const MovieCard = ({
  title,
  description,
  imgUrl,
  imdbLink,
  rottenTomatoLink,
}) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      className="movie-card"
      style={{ background: `url(${imgUrl}) center center` }}
    >
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__description">{description}</p>
      <div className="more">
        <img
          src="/assets/svg/dots.svg"
          className="more__icon"
          onClick={() => setOpenMenu(!openMenu)}
        />
        {openMenu && (
          <div className="more__items-list">
            <a
              target="_blank"
              className="more__items-list__link"
              href={imdbLink}
            >
              IMDB
            </a>
            <a
              target="_blank"
              className="more__items-list__link"
              href={rottenTomatoLink}
            >
              Rotten Tomato
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
