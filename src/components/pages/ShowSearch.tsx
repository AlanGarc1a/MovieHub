import React, { useState, useEffect } from "react";
import Container from "../Container/Container";
import { Grid } from "../Grid/Grid";
import { SearchInput } from "../Input/Search.styles";
import axios from "axios";
import { IMovie } from "../../models/movies";
import {
  List,
  ListItem,
  ListLink,
  ListContent,
  ListContentDetail,
  ListContentTitle,
  ListContentImg,
} from "../List/List.styles";
import { Navigate } from "react-router-dom";

const MovieSearch = () => {
  const [term, setTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<IMovie[]>([]);
  const timer: number = 1000;

  const handleChange = (event: { target: { value: string } }) => {
    setTerm(event.target.value);
  };

  const fetchResults = async (): Promise<void> => {
    try {
      if (term) {
        const results = await axios.get(
          `http://localhost:8000/api/movies/show/search/${term}`
        );

        if (results.status === 200) {
          setSearchResults(results.data.results);
        }
      }
    } catch (error) {
      if (error) {
        <Navigate replace to="*" />;
      }
    }
  };

  const renderSearchResults = () => {
    return searchResults.map((result) => {
      return (
        <ListItem key={result.id}>
          <ListLink to={`/${result.title}/${result.id}`}>
            <ListContent>
              <ListContentDetail>
                <ListContentImg src={result.image} alt={result.title} />
              </ListContentDetail>
              <ListContentTitle>
                {result.title} {result.description}
              </ListContentTitle>
            </ListContent>
          </ListLink>
        </ListItem>
      );
    });
  };

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      fetchResults();
    }, timer);

    return () => {
      clearTimeout(delaySearch);
      setSearchResults([]);
    };
  }, [term]);

  return (
    <>
      <Container>
        <Grid direction="column">
          <SearchInput
            type="text"
            placeholder="Search for show"
            value={term}
            onChange={handleChange}
          />
          {term ? <List>{renderSearchResults()}</List> : null}
        </Grid>
      </Container>
    </>
  );
};

export default MovieSearch;
