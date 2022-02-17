import React, { useEffect } from "react";
import Mmo from "./Mmo";
import "./style.css";
import { useContext } from "react";
import  {MmoContext}  from "./MmoContext";

function MmoList() {
  const [games, setGames] = useContext(MmoContext);

  return (
    <div className="gamelist">
        <h1> News Board </h1>
      {games.map((book, index) => (
        <Mmo key={index} name={book.name} short_description={book.short_description} thumbnail={book.thumbnail} article_url={book.article_url}/>
      ))}
    </div>
  );
}

export default MmoList;