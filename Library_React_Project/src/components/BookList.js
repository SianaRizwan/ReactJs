import React, { useEffect } from "react";
import Book from "./Book";
import { useContext } from "react";
import { BookContext } from "./BookContext";

function BookList() {
  const [books, setBooks] = useContext(BookContext);

  return (
    <div className="booklist">
      {books.map((book, index) => (
        <Book key={index} name={book.name} price={book.price} book_image={book.book_image}/>
      ))}
    </div>
  );
}

export default BookList;
