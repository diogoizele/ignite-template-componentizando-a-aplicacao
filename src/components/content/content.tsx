import { FC } from "react";

import MovieCard from "../movieCard/movieCard";
import type { ContentProps } from "./content.types";

const Content: FC<ContentProps> = ({ movies, selectedGenreTitle }) => (
  <div className="container">
    <header>
      <span className="category">
        Categoria:<span> {selectedGenreTitle}</span>
      </span>
    </header>

    <main>
      <div className="movies-list">
        {movies.map(({ Poster, imdbID, Ratings, Title, Runtime }) => (
          <MovieCard
            key={imdbID}
            title={Title}
            poster={Poster}
            runtime={Runtime}
            rating={Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  </div>
);

export default Content;
