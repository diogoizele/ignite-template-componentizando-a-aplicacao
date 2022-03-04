import "../../styles/movie-card.scss";
import { FC } from "react";

import { Star, Clock } from "react-feather";

import type { MovieCardProps } from "./movieCard.types";

const MovieCard: FC<MovieCardProps> = ({ poster, rating, runtime, title }) => (
  <div className="movie-card">
    <img src={poster} alt={title} />

    <div>
      <div className="movie-info">
        <span>{title}</span>
        <div className="meta">
          <div>
            <Star /> {rating}
          </div>

          <div>
            <Clock /> {runtime}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MovieCard;
