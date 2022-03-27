import React, { useState } from "react";
import SideBar from "./components/SideBar";
import Navbar from "./components/NavBar/NavBar";
import GlobalStyle from "./globalStyles";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import UpComing from "./components/pages/UpComing";
import PopularMovies from "./components/pages/PopularMovies";
import PopularTVShows from "./components/pages/PopularTVShows";
import MovieView from "./components/pages/MovieView";
import MovieSearch from "./components/pages/MovieSearch";
import ShowSearch from "./components/pages/ShowSearch";
import NotFound from "./components/NotFound";

const App: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar open={openMenu} handleMenuClick={handleMenuClick} />
      <SideBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="upcoming-movies" element={<UpComing />} />
        <Route path="popular-movies" element={<PopularMovies />} />
        <Route path="top-tv-shows" element={<PopularTVShows />} />
        <Route path=":movieTitle/:movieId" element={<MovieView />} />
        <Route path="movie">
          <Route path="search" element={<MovieSearch />} />
        </Route>
        <Route path="show">
          <Route path="search" element={<ShowSearch />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
