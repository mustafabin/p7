import "./App.css";
import React from "react";
import Card from "./movieCard";
function App() {
  let prop = {
    _id: "625470353f2aa52cd72e7d65",
    Position: 1,
    Const: "tt0468569",
    Created: "2012-08-13T00:00:00.000Z",
    Modified: "2012-08-13T00:00:00.000Z",
    Title: "The Dark Knight",
    URL: "https://www.imdb.com/title/tt0468569/",
    Title_Type: "movie",
    IMDb_Rating: 9.1,
    Runtime_mins: 152,
    Year: 2008,
    Genres: "Action, Crime, Drama, Thriller",
    Num_Votes: 2530527,
    Release_Date: "2008-07-14T00:00:00.000Z",
    Director: "Christopher Nolan",
    __v: 0,
  };

  return (
    <div className="App">
      <div className="options">
        <h1>Moive Finder</h1>
      </div>
      <span>Gallery</span>
      <div className="galler-container">
        <div className="arrows">
          <div className="gallery-arrow right">{">"}</div>
          <div className="gallery-arrow left">{"<"}</div>
        </div>
        <div className="card-container">
          <Card moive={prop}> </Card>
          <Card moive={prop}> </Card>
          <Card moive={prop}> </Card>
          <Card moive={prop}> </Card>
          <Card moive={prop}> </Card>
          <Card moive={prop}> </Card>
          <Card moive={prop}> </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
