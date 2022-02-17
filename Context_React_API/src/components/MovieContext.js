// craete, provide, use
import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    { name: "Harry poter", price: 12 },
    { name: "GOT", price: 120 },
    { name: "New movie", price: 45 },
    { name: "Spyder man", price: 20 },
  ]);
  return(
      <MovieContext.Provider value={[movies, setMovies]}>
          {props.children}
      </MovieContext.Provider>
  );
};
