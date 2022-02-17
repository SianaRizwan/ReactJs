import { MmoContext } from "./MmoContext";
import { useContext, useState } from "react";
import "./style.css";

function Nav() {
  const [games, setGames] = useContext(MmoContext);
  return (
    <div className="nav">
      <h1>
        <i>Get the latest Mmo Games News</i>
      </h1>
      <div>
        <a href="/MmoNews">Home</a>
        <a href="/MmoFullList">Full List of Mmo Games</a>
        <a href="/LiveGiveAway">Live Mmo GiveAways</a>
      </div>
    </div>
  );
}

export default Nav;
