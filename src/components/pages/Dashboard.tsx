import React, { useState, useEffect } from "react";
import Container from "../Container/Container";
import { Row, Grid } from "../Grid/Grid";
import axios from "axios";
import { IMovie } from "../../models/movies";
import MovieCard from "../Card/Card";
import Text from "../Text/Text";
import Spinner from "../Spinner/Spinner";

const Dashboard: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const movieLength: number = 50;

  const getMovies = async (): Promise<void> => {
    try {
      const res = await axios.get("http://localhost:8000/api/movies/");
      const { items } = res.data;

      setMovies(items);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const renderMovies = () => {
    return movies.slice(0, movieLength).map((movie) => {
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
        <Text>Browse</Text>
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

export default Dashboard;
