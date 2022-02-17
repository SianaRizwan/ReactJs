import { useContext, useState } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";
import "./style.css";

function MoviesList() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
        {/* <h1>{value}</h1> */}
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price}/>
      ))}
    </div>
  );
}

export default MoviesList;
