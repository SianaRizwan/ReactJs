import { useState } from "react";
import "./Book.css";

function Book(props){
    // const [myvote, setMyVote] = useState(props.votes);
    function upVote(e){    
        // myvote++; 
        // setMyVote(myvote + 1);
        // console.log(props.id);
        props.upVote(props.id);

    }
    // console.log(props);
    // const img_url = "https://m.media-amazon.com/images/I/511-vIg1HaL._AC_UY327_FMwebp_QL65_.jpg";
    // const name = "Harry potter";
    // const desc = "This is a fictional book";
    // const price = 12;

    return(
        <div className="book" >
            <img src={props.img_url} alt=""/>
            <h2>Name : {props.name}</h2>
            <p>description: {props.desc}</p>
            <span>Price: {props.price}</span><br/>
            <span className="vote_count">Votes: {props.votes}</span>
            <div>
                <img className="upvote_img" src="assets/upvote.jpg" alt="" onClick={upVote}/>
            </div>
        </div>
    );
}

export default Book;