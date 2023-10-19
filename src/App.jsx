import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [movieCards, setMovieCards] = useState([]);

  const getMovies = async (url) => {
    try {
      const response = await axios.get(url);
      const resData = response.data.results;
      setMovieCards(resData);
    } catch (err) {
      console.error(`ERROR:${err}`);
    }
  };

  return (
    <>
      <Header getMovies={getMovies} />
      <Content movieCards={movieCards} getMovies={getMovies} />
      <Footer />
    </>
  );
}

export default App;
