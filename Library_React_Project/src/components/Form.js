import React, { useState, useContext, useRef } from "react";
import { useEffect } from "react";
import { BookContext } from "./BookContext";
import styles from "./Form.module.css";

function Form() {
  const [errorM, setErrorM] = useState(false);
  // const [name, setName] = useState('');
  // const [price, setPrice] = useState('');
  // const [image, setImage] = useState(null);

  const nameRef = useRef();
  const priceRef = useRef();


  const [books, setBooks] = useContext(BookContext);

  // function handleName(e){
  //     setName(e.target.value.toUpperCase());
  // }
  // function handlePrice(e){
  //     setPrice(e.target.value);
  // }

  function handleSubmit(e) {
    e.preventDefault();
    
    console.log(nameRef.current.value);
    // if(name==='' || price===''){
    //   setErrorM(true);
    //   return;
    // }
    let name_ = nameRef.current.value;
    let price_  = priceRef.current.value;
    setBooks((previouBooks) => [
      { name: name_, price: price_ , book_image: "./assets/geo.jpg"},
      ...previouBooks,
    ]);

    nameRef.current.value = "";
    priceRef.current.value = "";
    // setName('');
    // setPrice('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {errorM && <span style={{color: "red"}}>The Fields can not be empty</span>}
      <div className={styles.control}>
        <label>Name</label>
        <input type="text" ref={nameRef}/>
      </div>
      <div className={styles.control}>
        <label>Price</label>
        <input type="text" ref={priceRef} />
      </div>
      {/* <div className={styles.control}>
        <label>Image</label>
        <input type="file" ref={imageRef}/>
      </div> */}
      <button type="submit" className={styles.button} >Add</button>
    </form>
  );
}

export default Form;
