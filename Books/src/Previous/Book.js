function Book(props){
    console.log(props);
    // const img_url = "https://m.media-amazon.com/images/I/511-vIg1HaL._AC_UY327_FMwebp_QL65_.jpg";
    // const name = "Harry potter";
    // const desc = "This is a fictional book";
    // const price = 12;

    return(
        <div className="book" >
            <img src={props.img_url} alt=""/>
            <h2>Name : {props.name}</h2>
            <p>description: {props.desc}</p>
            <span>Price: {props.price}</span>
        </div>
    );
}

export default Book;