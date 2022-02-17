import { MovieContext } from "./MovieContext";
import { useContext } from "react";

import "./style.css";

function Nav() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="nav">
      <p>Movies Website</p>
      <p>There are {movies.length} Movies</p>
    </div>
  );
}

export default Nav;
