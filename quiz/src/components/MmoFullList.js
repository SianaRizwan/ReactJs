import { useState, useEffect } from "react";
import "./style.css";

function MmoFullList() {

    const [games , setGames] = useState([]);

    async function fetchGames() {
        const res = await fetch("https://mmo-games.p.rapidapi.com/games", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                "x-rapidapi-key": "9814a55d49mshe78ec1747835a28p136c16jsn663c2f1b5cb7"
            }
        })
          const data = await res.json();
          console.log(data);
          setGames(data);
         
      }
      useEffect(() => {
        fetchGames();
      }, []);
    

  

    return ( <div>
        <h1>Full List of Mmo Games</h1>
        {games.map((g)=>(
            <div className="game2">
            <img src={g.thumbnail} />
            <h5>{g.title}</h5>
            <p>{g.short_description}</p>
            </div>
        ))}
    </div> );

}

export default MmoFullList;
