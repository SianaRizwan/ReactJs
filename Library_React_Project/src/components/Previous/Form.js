import React, { useState, useContext, useRef } from "react";
import { useEffect } from "react";
import { BookContext } from "./BookContext";
import styles from "./Form.module.css";

function Form() {
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();

  const [errorM, setErrorM] = useState(false);
  const [book_image, setBookImage] = useState(null);
  // const [name, setName] = useState('');
  // const [price, setPrice] = useState('');

  const [books, setBooks] = useContext(BookContext);

  // function handleName(e){
  //     setName(e.target.value.toUpperCase());
  // }
  // function handlePrice(e){
  //     setPrice(e.target.value);
  // }

  function handleSubmit(e) {
    e.preventDefault();

    // if (nameRef.current.value === "" || priceRef.current.value === "") {
    //   setErrorM(true);
    //   return;
    // } else {
    //   setErrorM(false);
    // }

    // console.log(nameRef.current.value+ " : " + priceRef.current.value);
    let name_ = nameRef.current.value;
    let price_ = priceRef.current.value;
    let image_ = imageRef.current.files[0];

    console.log(image_);

    // setBooks((previouBooks) => [
    //   { name: name_, price: price_ , book_image: image_},
    //   ...previouBooks,
    // ]);

    // console.log(books);
    // // console.log(nameRef.current.value+ " : " + priceRef.current.value);
    // // setName('');
    // // setPrice('');
    // // console.log(nameRef.current.value);
    // nameRef.current.value = "";
    // priceRef.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {errorM && <span>The field can not be empty</span>}
      <div className={styles.control}>
        <label>Name</label>
        <input type="text" ref={nameRef} />
      </div>
      <div className={styles.control}>
        <label>Price</label>
        <input type="text" ref={priceRef} />
      </div>
      <div className={styles.control}>
        <label>Image</label>
        <input type="file" ref={imageRef}/>
      </div>
      <button type="submit" className={styles.button} >Add</button>
    </form>
  );
}

export default Form;
