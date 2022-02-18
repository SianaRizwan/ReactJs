import React from "react";
import { useState } from "react/cjs/react.development";
import Book from "./Book";

let book_lib = [
  {
    id: 1,
    name: "React",
    img_url:
      "https://m.media-amazon.com/images/I/511-vIg1HaL._AC_UY327_FMwebp_QL65_.jpg",
    desc: "This is an Intro to react",
    price: 49,
    votes: 12,
  },
  {
    id: 2,
    name: "Computer Vision",
    img_url:
      "https://m.media-amazon.com/images/I/61TKTkmD4FL._AC_UY327_FMwebp_QL65_.jpg",
    desc: "This is an Intro to Computer vision",
    price: 100,
    votes: 19,
  },
  {
    id: 3,
    name: "Will",
    img_url:
      "https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL254_SR254,254_.jpg",
    desc: "This is a personal book",
    price: 49,
    votes: 22,
  },
];

function BookList() {
  let newbooklist = book_lib.map((bk) => (
    <Book
      key={bk.id}
      id={bk.id}
      name={bk.name}
      img_url={bk.img_url}
      desc={bk.desc}
      price={bk.price}
      votes={bk.votes}
      upvote={addVote}
    >
      <p>
        I wanted to take a class before giving the lab. Since both groups cannot
        participate in the lab today, I will prepare a pdf document with
        instructions for Lab 1. And tomorrow during our class time, I will
        explain what you have to do for the lab and then we will have our normal
        class.
      </p>
    </Book>
  ));
  const [bl, setBL] = useState(newbooklist);

  function addVote(id) {
    console.log("Clicked ID: " + id);
    let index = book_lib.findIndex((obj) => obj.id === id);
    book_lib[index].votes++;
    // console.log(book_lib);
    //  setBL(book_lib);
    newbooklist = book_lib.map((bk) => (
      <Book
        key={bk.id}
        id={bk.id}
        name={bk.name}
        img_url={bk.img_url}
        desc={bk.desc}
        price={bk.price}
        votes={bk.votes}
        upvote={addVote}
      >
        <p>
          I wanted to take a class before giving the lab. Since both groups
          cannot participate in the lab today, I will prepare a pdf document
          with instructions for Lab 1. And tomorrow during our class time, I
          will explain what you have to do for the lab and then we will have our
          normal class.
        </p>
      </Book>
    ));
    // console.log(newbooklist);
    setBL(newbooklist);
    console.log(bl);
  }

  // book_lib[2].price = 52;

  // console.log(book_lib);
  return (
    <div>
      <h1>Book List</h1>
      {bl}
    </div>
  );
}

export default BookList;
