import { MovieContext } from "./MovieContext";
import { useContext } from "react";
import "./style.css";

function Movie(props) {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div className="movie">
      <h1>{props.name}</h1>
      <p>{props.price}</p>
      {movies.map(movie => <li>{movie.price}</li>)}
    </div>
  );
}

export default Movie;
