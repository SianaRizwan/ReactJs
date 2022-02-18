// create
// provider
// usesage

import { createContext, useCallback, useEffect, useState } from "react";

export const BookContext = createContext();

export function BooKProvider(props) {
  const [books, setBooks] = useState([
    { name: "React", price: 12, book_image: "./assets/react.jpg" },
    { name: "DATA structure", price: 120, book_image: "./assets/cv.jpg" },
    { name: "Intro", price: 45, book_image: "./assets/will.jpg" },
    { name: "DBMS", price: 20, book_image: "./assets/geo.jpg" },
  ]);

  async function fetcBooks() {
    const url =
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=COoyOGRAyeD6TbsKtpjgtstqsoVbDTlo";
    
    const response =  await fetch(url);
    const data = await response.json();
    console.log(data.results.books);

    const newbooks = data.results.books.map((book) => (
      {name: book.title, 
      price: book.price,
      book_image: book.book_image
    }))

    setBooks((previous) => {
      [...previous]
    });
  
  }

  fetcBooks();
  return (
    <BookContext.Provider value={[books, setBooks]}>
      {props.children}
    </BookContext.Provider>
  );
}
