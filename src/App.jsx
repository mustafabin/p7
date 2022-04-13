import "./App.css";
import React from "react";
import Card from "./movieCard";
import { useRef, useEffect, useState } from "react";
import axios from "axios";
function App() {
  const galleryRef = useRef(null);
  const arrowRef = useRef(null);
  const [movies, setMovies] = useState([]);
  const [randomTen, setRandomTen] = useState([]);
  let slideGallery = (dir) => {
    galleryRef.current.scrollBy(window.innerWidth * dir, 0);
  };
  let getmovies = async () => {
    let res = await axios.get(
      "https://top100-superhero-movie-api.herokuapp.com/api/movies"
    );
    setMovies(res.data);
  };

  useEffect(() => {
    getmovies();
  }, []);
  useEffect(() => {
    updateRandom();
  }, [movies]);

  let updateRandom = () => {
    let random = Math.random() * (90 - 0) + 0;
    setRandomTen(movies.slice(random, random + 10));
  };
  return (
    <div className="App">
      <h1>Movie Finder</h1>
      <button onClick={updateRandom} className="generate-button">
        Random 10
      </button>
      <div className="gallery-container">
        <div ref={arrowRef} className="arrows">
          <div onClick={() => slideGallery(1)} className="gallery-arrow right">
            {">"}
          </div>
          <div onClick={() => slideGallery(-1)} className="gallery-arrow left">
            {"<"}
          </div>
        </div>
        <div ref={galleryRef} className="card-container">
          {randomTen.map((movie, i) => (
            <Card key={i} movie={movie}></Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
