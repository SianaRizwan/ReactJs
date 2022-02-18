import React from "react";
import Book from "./Book";

const book_lib = [
  {
    id:1,
    name: "React",
    img_url:
      "https://m.media-amazon.com/images/I/511-vIg1HaL._AC_UY327_FMwebp_QL65_.jpg",
    desc: "This is an Intro to react",
    price: 49,
  },
  {
    id:2,
    name: "Computer Vision",
    img_url:
      "https://m.media-amazon.com/images/I/61TKTkmD4FL._AC_UY327_FMwebp_QL65_.jpg",
    desc: "This is an Intro to Computer vision",
    price: 100,
  },
  {
    id:3,
    name: "Will",
    img_url:
      "https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL254_SR254,254_.jpg",
    desc: "This is a personal book",
    price: 49,
  },
];

function BookList() {
  const newbooklist = book_lib.map((bk) => (
    <Book key={bk.id} name={bk.name} img_url={bk.img_url} desc={bk.desc} price={bk.price} />
  ));
  book_lib[2].price = 52;

  console.log(book_lib);
  return (
    <div>
      <h1>Book List</h1>
      {newbooklist}
    </div>
  );
}

export default BookList;
