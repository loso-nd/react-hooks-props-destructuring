import React from "react";

function MovieCard({posterSrc, title, genres}) {
  //let {posterSrc, title, genres} = props
  return (
    <div className="movie-card">
      <img src={posterSrc} alt={title} />
      <h2>{title}</h2>
      <small>{genres.join(", ")}</small>
    </div>
  );
}

export default MovieCard;
