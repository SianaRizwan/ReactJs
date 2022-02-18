import { useEffect, useState } from "react";

function Home() {
  const [items, setItems] = useState();
  async function fectItem() {
    const res = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    const data = await res.json();
    console.log(data.data);

    setItems((previous) => data.data);
  }

  useEffect(() => {
    fectItem();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {items?.map((item, index) => (
        <h1 key={index}>
          {" "}
          <a href={`/ItemDetails/${item.itemId}`}>{item.item.name}</a>
        </h1>
      ))}
    </div>
  );
}

export default Home;
