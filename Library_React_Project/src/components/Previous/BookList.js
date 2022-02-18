import React, { useEffect } from "react";
import Book from "./Book";
import { useContext } from "react";
import { BookContext } from "./BookContext";

function BookList() {
  const [books, setBooks] = useContext(BookContext);
  useEffect(()=>{
    const testEffect = "This is the use effect";
    console.log(testEffect);
  },[]);
  
  const testComp = "This is use of Component";
  // console.log(testComp);

  return (
    <div className="booklist">
      {books.map((book, index) => (
        <Book key={index} name={book.name} price={book.price} book_image={book.book_image}/>
      ))}
    </div>
  );
}

export default BookList;
