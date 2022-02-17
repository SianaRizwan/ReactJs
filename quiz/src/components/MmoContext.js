// create
// provider
// usage

import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MmoContext = createContext();

export function MmoProvider(props) {
  const [games, setGames] = useState();

  async function fetchGames() {
    const url = "https://mmo-games.p.rapidapi.com/latestnews";
    axios
      .get(url, {
        headers: {
          "x-rapidapi-host": "mmo-games.p.rapidapi.com",
          "x-rapidapi-key":
            "9814a55d49mshe78ec1747835a28p136c16jsn663c2f1b5cb7",
        },
      })
      .then((res) => {
        const mmoList = res.data;
        const newGames = mmoList.map((game) => {
          return {
            name: game.title,
            short_description: game.short_description,
            thumbnail: game.thumbnail,
            article_url: game.article_url,
          };
        });
        setGames(newGames);
        console.log("Sttt");
      });
  }
  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <MmoContext.Provider value={[games, setGames]}>
      {games && props.children}
    </MmoContext.Provider>
  );
}
