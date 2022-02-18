import React, { useState } from "react";
import Book from "./Book";

let book_lib = [
  {
    id: 1,
    name: "React",
    img_url:
      "https://m.media-amazon.com/images/I/511-vIg1HaL._AC_UY327_FMwebp_QL65_.jpg",
    desc: "This is an Intro to react",
    price: 49,
    votes: 3,
  },
  {
    id: 2,
    name: "Computer Vision",
    img_url:
      "https://m.media-amazon.com/images/I/61TKTkmD4FL._AC_UY327_FMwebp_QL65_.jpg",
    desc: "This is an Intro to Computer vision",
    price: 100,
    votes: 8,
  },
  {
    id: 3,
    name: "Will",
    img_url:
      "https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL254_SR254,254_.jpg",
    desc: "This is a personal book",
    price: 49,
    votes: 1,
  },
];

function BookList() {
  book_lib.sort(function (a, b) {
    return b.votes - a.votes;
  });
  let newbooklist = book_lib.map((bk) => (
    <Book
      key={bk.id}
      id={bk.id}
      name={bk.name}
      img_url={bk.img_url}
      desc={bk.desc}
      price={bk.price}
      votes={bk.votes}
      upVote={upVote}
    />
  ));

  const [bl, setBl] = useState(newbooklist);

  function upVote(up_id) {
    const index = book_lib.findIndex((obj) => obj.id === up_id);
    book_lib[index].votes++;
    sort();
  }

  function sort() {
    console.log("Sorting");
    book_lib.sort(function (a, b) {
      return b.votes - a.votes;
    });

    newbooklist = book_lib.map((bk) => (
      <Book
        key={bk.id}
        id={bk.id}
        name={bk.name}
        img_url={bk.img_url}
        desc={bk.desc}
        price={bk.price}
        votes={bk.votes}
        upVote={upVote}
      />
    ));
    console.log(newbooklist);
    setBl(newbooklist);
  }
  function filterLikes(number) {
    if (number == 0) return;
    book_lib = book_lib.filter((books) => books.votes <= number);
    book_lib.sort(function (a, b) {
      return b.votes - a.votes;
    });

    newbooklist = book_lib.map((bk) => (
      <Book
        key={bk.id}
        id={bk.id}
        name={bk.name}
        img_url={bk.img_url}
        desc={bk.desc}
        price={bk.price}
        votes={bk.votes}
        upVote={upVote}
      />
    ));
    console.log(newbooklist);
    setBl(newbooklist);
  }
  function numberlikesHandler(e) {
    console.log(e.target.value);
    filterLikes(e.target.value);
  }
  // book_lib[2].price = 52;

  // console.log(book_lib);
  return (
    <div>
      <h1>Book List</h1>
      <form>
        <label>Number of Likes</label>
        <select onChange={numberlikesHandler}>
          <option value="0">All</option>
          <option value="5">0-5</option>
          <option value="10">6-10</option>
          <option value="15">11-15</option>
          <option value="16"> {">"} 15</option>
        </select>
      </form>
      {bl}
    </div>
  );
}

export default BookList;
