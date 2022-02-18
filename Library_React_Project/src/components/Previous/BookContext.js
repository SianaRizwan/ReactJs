// create
// provider
// usesage

import { createContext, useCallback, useEffect, useState } from "react";

export const BookContext = createContext();

export function BooKProvider(props) {
  const [books, setBooks] = useState([
    { name: "React", price: 12, book_image: './assets/react.jpg' },
    { name: "DATA structure", price: 120, book_image: './assets/cv.jpg' },
    { name: "Intro", price: 45, book_image: './assets/will.jpg' },
    { name: "DBMS", price: 20, book_image: './assets/geo.jpg' },
  ]);

  // const [books, setBooks] = useState([]);

  // const fetchBooks = useCallback(async ()=> {
  //   const url =
  //     "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=COoyOGRAyeD6TbsKtpjgtstqsoVbDTlo";

  //   fetch(url)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const newdata = data.results.books.map(function (book) {
  //         return { name: book.title, price: book.price };
  //       });
  //       setBooks(newdata);
  //     });
  // }, []);

  useEffect(async ()=>{
    const url =
      "https://http-project-a58ed-default-rtdb.asia-southeast1.firebasedatabase.app/";

    const response = await fetch(url, {method: POST});
    const data = await response.json();
    const newdata = data.results.books.map(function (book) {
      return { name: book.title, price: book.price , book_image: book.book_image};
    });
    setBooks(newdata);
  });

  // useEffect(()=>{
  //   fetchBooks()
  // }, [fetchBooks]);
  // fetchBooks();
  // fetchNYT();
  return (
    <BookContext.Provider value={[books, setBooks]}>
      {props.children}
    </BookContext.Provider>
  );
}
