import React, { useState, useEffect } from "react";
import { IMovie } from "../../models/movies";
import {
  Movie,
  MovieViewImg,
  MovieImgContainer,
  MovieDetails,
  MovieTitle,
  MoviePlot,
  MoviePlotDetails,
  MovieSubDetails,
  MovieSubDetail,
  MovieWikiUrl,
  MovieFooter,
  TrailerLink,
} from "../Card/CardView.styles";
import axios from "axios";
import Container from "../Container/Container";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { Grid } from "../Grid/Grid";
import { Navigate } from "react-router-dom";

const MovieView: React.FC = () => {
  const [movie, setMovie] = useState<IMovie>();
  const [trailer, setTrailer] = useState<string>();
  const [extUrl, setExtUrl] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  const { movieId } = useParams();

  const getMovie = async (): Promise<void> => {
    try {
      const movieRes = await axios.get(
        `http://localhost:8000/api/movies/${movieId}`
      );

      const trailerRes = await axios.get(
        `http://localhost:8000/api/movies/trailer/${movieId}`
      );

      const urlRes = await axios.get(
        `http://localhost:8000/api/movies/wiki/${movieId}`
      );

      if (movieRes.status === 200) {
        setMovie(movieRes.data);
        setTrailer(trailerRes.data.link);
        setExtUrl(urlRes.data.url);
        setLoading(false);
      }
    } catch (error) {
      if (error) {
        <Navigate replace to="*" />;
      }
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <Container>
        {loading ? (
          <Spinner />
        ) : (
          <Grid>
            <Movie>
              <MovieImgContainer>
                <MovieViewImg src={movie?.image} />
              </MovieImgContainer>
              <MovieDetails image={movie?.image}>
                <MovieTitle>{movie?.title}</MovieTitle>
                <MovieSubDetails>
                  <MovieSubDetail>
                    {movie?.contentRating ? movie?.contentRating : "N/A"}
                  </MovieSubDetail>
                  <MovieSubDetail>{movie?.year}</MovieSubDetail>
                  <MovieSubDetail>{movie?.genres}</MovieSubDetail>
                  <MovieSubDetail>{movie?.runtimeStr}</MovieSubDetail>
                </MovieSubDetails>
                <MoviePlot>
                  <MoviePlotDetails>
                    {movie?.plot?.slice(0, 650) + "..."}
                  </MoviePlotDetails>
                </MoviePlot>
                <MovieFooter>
                  <TrailerLink href={trailer} target="_blank">
                    Watch Trailer
                  </TrailerLink>
                  <MovieWikiUrl href={extUrl} target="_blank">
                    Read more
                  </MovieWikiUrl>
                  <MovieSubDetail>Imdb: {movie?.imDbRating}</MovieSubDetail>
                </MovieFooter>
              </MovieDetails>
            </Movie>
          </Grid>
        )}
      </Container>
    </>
  );
};

export default MovieView;
