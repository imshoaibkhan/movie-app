import React, { useState } from "react";

const Card = ({
  poster,
  title,
  vote,
  overview,
  toggleOverview,
  currentOverviewBox,
}) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  return (
    <div className="movies">
      <img
        className="poster"
        src={IMG_PATH + poster}
        alt={title}
        onClick={toggleOverview}
      />

      <div className="movies-info">
        <h3>{title}</h3>
        <span className={vote >= 8 ? "green" : vote >= 5 ? "orange" : "red"}>
          {vote.toFixed(1)}
        </span>
      </div>
      <div
        className={`overview ${currentOverviewBox ? "show" : "hide"}`}
        onClick={toggleOverview}
      >
        <h3>overview:</h3>
        {overview}
      </div>
    </div>
  );
};

export default Card;
