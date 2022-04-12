import "./App.css";
import React from "react";
import Card from "./movieCard";
import { useRef, useEffect, useState } from "react";
import axios from "axios";
function App() {
  const galleryRef = useRef(null);
  const galleryDisplay = useRef(null);
  const [movies, setMovies] = useState([]);
  const [randomTen, setRandomTen] = useState([]);
  let slideGallery = (dir) => {
    galleryRef.current.scrollBy(window.innerWidth * dir, 0);
  };

  useEffect(() => {
    getmovies();
  }, []);
  let hide = "hide";
  let getmovies = async () => {
    let res = await axios.get(
      "https://top100-superhero-movie-api.herokuapp.com/api/movies"
    );
    console.log(res);
    setMovies(res.data);
    updateRandom(movies.slice(0, 9));
  };
  let updateRandom = () => {
    galleryDisplay.current.classList.remove("hide");
    let random = Math.random() * (90 - 0) + 0;
    setRandomTen(movies.slice(random, random + 10));
  };
  return (
    <div className="App">
      <div className="options">
        <h1>Movie Finder</h1>
        <p>
          Random 10 movies:
          <button onClick={updateRandom} className="generate-button">
            Generate
          </button>
        </p>
      </div>
      <span ref={galleryDisplay} className="hide">
        Gallery
      </span>
      <div className="galler-container">
        <div className="arrows">
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
