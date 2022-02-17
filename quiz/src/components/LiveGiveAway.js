import { useState, useEffect } from "react";
import "./style.css";

function LiveGiveAway() {
  const [games, setGames] = useState([]);

  async function fetchGames() {
    const res = await fetch("https://mmo-games.p.rapidapi.com/giveaways", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
        "x-rapidapi-key": "9814a55d49mshe78ec1747835a28p136c16jsn663c2f1b5cb7",
      },
    });
    const data = await res.json();
    console.log(data);
    setGames(data);
  }
  useEffect(() => {
    fetchGames();
  }, []);

  const sortByKeysDesc = () => {
    let toSort = [...games];
    setGames(
      toSort.sort(function (a, b) {
        console.log(b.keys_left.substring(0, 2));
        return b.keys_left.substring(0, 2) - a.keys_left.substring(0, 2);
      })
    );
  };

  const sortByKeysAsc = () => {
    let toSort = [...games];
    setGames(
      toSort.sort(function (a, b) {
        console.log(b.keys_left.substring(0, 2));
        return a.keys_left.substring(0, 2) - b.keys_left.substring(0, 2);
      })
    );
  };

  return (
    <div>
      <h1>Live GiveAways Till Now</h1>
      
        <div onClick={sortByKeysDesc} className="button">
          Click To Sort By Keys Left in Descending Order
        </div>
        <div onClick={sortByKeysAsc} className="button">
          Click To Sort By Keys Left in Ascending Order
        </div>
      
      {games.map((g) => (
        <div className="game2">
          <img src={g.thumbnail} />
          <h5>{g.title}</h5>
          <h6>{g.short_description}</h6>
          <p>
            <b>{g.keys_left}</b>
          </p>
        </div>
      ))}
    </div>
  );
}

export default LiveGiveAway;
