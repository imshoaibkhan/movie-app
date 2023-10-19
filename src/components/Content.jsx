import React, { useEffect, useState } from "react";
import App from "../App";
import Card from "./Card";
import axios from "axios";

const Content = ({ getMovies, movieCards }) => {
  const MOVIE_API =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

  const [openCardIndex, setOpenCardIndex] = useState(null);

  useEffect(() => {
    getMovies(MOVIE_API);
  }, []);

  const handleToggleOverview = (id) => {
    if (id === openCardIndex) {
      setOpenCardIndex(null)
    } else {
      setOpenCardIndex(id)
    }
  }

  return (
    <main id="main">
      {movieCards.map((card) => (
        <Card
          key={card.id}
          poster={card.poster_path}
          title={card.title}
          vote={card.vote_average}
          overview={card.overview}
          currentOverviewBox={card.id === openCardIndex}
          toggleOverview={() => handleToggleOverview(card.id)}
        />
      ))}
    </main>
  );
};

export default Content;
