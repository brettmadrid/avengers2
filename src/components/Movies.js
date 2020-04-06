import React from "react";

const Movies = ({ movielist }) => {
  console.log(movielist.movies);
  return (
    <div className="movies">
      {movielist.movies.map((movie) => (
        <p>{movie}</p>
      ))}
    </div>
  );
};

export default Movies;
