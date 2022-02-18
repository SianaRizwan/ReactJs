import "./style.css";
function Book(props) {
    return ( 
        <div className="book">
            <img src={props.book_image}/>
            <h3>
                { props.name}
            </h3>
            <p>
                <b><i>Price:</i></b> { props.price}
            </p>
        </div>
     );
}

export default Book;