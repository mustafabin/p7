import React from "react";
import { Rating } from "@mui/material/";

const Card = (props) => {
  let { moive } = props;
  return (
    <div className="card">
      <div
        style={{
          borderColor: "#" + Math.round(Math.random() * 16777215).toString(16),
        }}
        className="title"
      >
        <p className="title-name">{moive.Title}</p>
      </div>
      <a target="_blank" href={moive.URL}>
        IMDb Link
      </a>
      <div className="info">
        <p>
          <span>Director : </span>
          {moive.Director}
        </p>
        <p>
          <span>Run Time : </span>
          {moive.Runtime_mins}
        </p>
        <p>
          <span>Year : </span>
          {moive.Year}
        </p>

        <p>
          <span>Genres</span> {moive.Genres}
        </p>
        <div className="rating">
          <p>
            <span>Rating : </span>
          </p>
        </div>
      </div>
      <Rating
        value={moive.IMDb_Rating / 2}
        max={5}
        precision={0.1}
        size="large"
        readOnly
      />
    </div>
  );
};

export default Card;
