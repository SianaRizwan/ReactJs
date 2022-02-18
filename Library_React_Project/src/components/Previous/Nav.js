import { BookContext } from "./BookContext";
import { useContext, useState } from "react";
import "./style.css";

function Nav() {
    const [books, setBooks] = useContext(BookContext);
    return ( <div className="nav">
      <h3>This is The book store with {books.length} Books</h3>
    </div> );
}

export default Nav;