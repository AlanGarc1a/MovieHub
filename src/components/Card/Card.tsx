import React from "react";
import { IMovie } from "../../models/movies";
import {
  MovieBox,
  MovieImage,
  MovieTitle,
  MovieImageBox,
  MovieRatingBox,
} from "./Card.styles";
import { Link } from "react-router-dom";

const MovieCard: React.FC<IMovie> = ({
  id,
  title,
  image,
  year,
  imDbRating,
}) => {
  return (
    <MovieBox>
      <MovieRatingBox>{imDbRating ? imDbRating : 0.0}</MovieRatingBox>
      <Link to={`/${title}/${id}`}>
        <MovieImageBox>
          <MovieImage src={image} />
        </MovieImageBox>
      </Link>
      <Link to={`/${title}/${id}`}>
        <MovieTitle>
          {title} ({year})
        </MovieTitle>
      </Link>
    </MovieBox>
  );
};

export default MovieCard;
