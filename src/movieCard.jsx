import React from "react";
import { Rating } from "@mui/material/";

const Card = (props) => {
  let { movie } = props;
  return (
    <div className="card">
      <div
        style={{
          borderColor: "#" + Math.round(Math.random() * 16777215).toString(16),
        }}
        className="title"
      >
        <p className="title-name">{movie.Title}</p>
      </div>
      <a target="_blank" href={movie.URL}>
        IMDb Link
      </a>
      <div className="info">
        <p>
          <span>Director : </span>
          {movie.Director}
        </p>
        <p>
          <span>Run Time : </span>
          {movie.Runtime_mins}
        </p>
        <p>
          <span>Year : </span>
          {movie.Year}
        </p>

        <p>
          <span>Genres</span> {movie.Genres}
        </p>
        <div className="rating">
          <p>
            <span>Rating : </span>
          </p>
        </div>
      </div>
      <Rating
        value={movie.IMDb_Rating / 2}
        max={5}
        precision={0.1}
        size="large"
        readOnly
      />
    </div>
  );
};

export default Card;
