import React, { useState } from "react";

const Header = ({ getMovies }) => {
  const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  const [searchVal, setSearchVal] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchVal) {
      getMovies(SEARCH_API + searchVal);
    }
    setSearchVal("");
  };

  return (
    <header>
      <h2>
        <a href="index.html">FilmHunt</a>
      </h2>

      <form id="form" onSubmit={handleSearch}>
        <input
          type="text"
          className="search"
          id="search"
          placeholder="Search"
          onChange={(e) => setSearchVal(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Header;
