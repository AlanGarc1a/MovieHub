import React, { useState, useEffect } from "react";
import Text from "../Text/Text";
import Container from "../Container/Container";
import { IMovie } from "../../models/movies";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import { Grid, Row } from "../Grid/Grid";
import MovieCard from "../Card/Card";
import { Navigate } from "react-router-dom";

const PopularMovies: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getMovies = async (): Promise<void> => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/movies/popularMovies"
      );
      const { items } = res.data;

      setPopularMovies(items);
      setLoading(false);
    } catch (error) {
      if (error) {
        <Navigate replace to="*" />;
      }
    }
  };

  const renderMovies = () => {
    return popularMovies.map((movie) => {
      return (
        <MovieCard
          id={movie.id}
          key={movie.rank}
          title={movie.title}
          image={movie.image}
          year={movie.year}
          imDbRating={movie.imDbRating}
        />
      );
    });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Container>
        <Text>Popular Movies</Text>
        {loading ? (
          <Spinner />
        ) : (
          <Grid>
            <Row>{renderMovies()}</Row>
          </Grid>
        )}
      </Container>
    </>
  );
};

export default PopularMovies;
