import { useState } from "react";
import { useContext } from "react";
import { MovieContext } from "./MovieContext";

function AddMovie() {
  const [movies, setMovies] = useContext(MovieContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handlePrice(e) {
    setPrice(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMovies((previousMovies) => [
      ...previousMovies,
      { name: name, price: price },
    ]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleName} />
      <input type="text" value={price} onChange={handlePrice} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddMovie;
