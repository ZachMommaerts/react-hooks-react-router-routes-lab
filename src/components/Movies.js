import React from "react";
import { movies } from "../data";

function Movies() {
  const renderMovies = movies.map(movie => {
    return (
      <div key={movie.title}>
        <h2>{movie.title}</h2>
        <br></br>
        Time: {movie.time}
        <br></br>
        <br></br>
        Genres:
        <ul>
          {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
        </ul>
      </div>
    )
  })
  return( 
    <div>
      <h1>Movies Page</h1>
      {renderMovies}
    </div>
  )
}

export default Movies;
