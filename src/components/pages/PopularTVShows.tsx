import React, { useState, useEffect } from "react";
import Text from "../Text/Text";
import Container from "../Container/Container";
import { IMovie } from "../../models/movies";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import { Grid, Row } from "../Grid/Grid";
import MovieCard from "../Card/Card";
import { Navigate } from "react-router-dom";

const PopularTVShows: React.FC = () => {
  const [popularTVShows, setPopularTVShows] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getMovies = async (): Promise<void> => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/movies/popularTVShows"
      );
      const { items } = res.data;

      setPopularTVShows(items);
      setLoading(false);
    } catch (error) {
      if (error) {
        <Navigate replace to="*" />;
      }
    }
  };

  const renderMovies = () => {
    return popularTVShows.map((show) => {
      return (
        <MovieCard
          id={show.id}
          key={show.rank}
          title={show.title}
          image={show.image}
          year={show.year}
          imDbRating={show.imDbRating}
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
        <Text>Popular TV Shows</Text>
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

export default PopularTVShows;
