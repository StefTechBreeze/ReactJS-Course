import React from "react";
import { MovieCard } from "./MovieCard/MovieCard";

import "./Content.css";

export const Content = () => {
  return (
    <main>
      <MovieCard
        title="Matrix"
        description="Best movie ever"
        posterUrl="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4jfQQt_0vCA4XSwGiWkffC32Tv2oajdWhaYHHVYylYGJ3v17Q"
      />
      <MovieCard
        title="Ghost in the shell"
        description="Best scifi film"
        posterUrl="https://m.media-amazon.com/images/M/MV5BMzJiNTI3MjItMGJiMy00YzA1LTg2MTItZmE1ZmRhOWQ0NGY1XkEyXkFqcGdeQXVyOTk4MTM0NQ@@._V1_.jpg"
      />
    </main>
  );
};
