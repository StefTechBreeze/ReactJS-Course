import React from "react";

import "./MovieCard.css";

export class MovieCardClass extends React.Component {
  state = {
    openMenu: false,
  };

  setOpenMenu = () => {
    this.setState({ openMenu: !this.state.openMenu });
  };

  render() {
    const { title, description, imgUrl, imdbLink, rottenTomatoLink } =
      this.props;

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
            onClick={this.setOpenMenu}
          />
          {this.state.openMenu && (
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
  }
}
