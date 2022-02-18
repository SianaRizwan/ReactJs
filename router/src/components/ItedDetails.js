import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetails() {
    const [item , setItem] = useState();
    const {itemId} = useParams();

    async function fectItem() {
        const res = await fetch(
          `https://fortnite-api.theapinetwork.com/item/get?id=${itemId}`
        );
        const data = await res.json();
        console.log(data.data);
    
        setItem((previous) => data.data);
      }
    
      useEffect(() => {
        fectItem();
      }, []);

    return ( <div>
        <h1>Item Details</h1>
    <h3>Name: {item?.item.name}</h3>
    <img src={item?.item.images.background}/>
    </div> );
}

export default ItemDetails;