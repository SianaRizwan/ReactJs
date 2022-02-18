import { useState } from "react";
import "./Book.css";

function Book(props){
    const [vote_count, setVoteCount] = useState(props.votes);
    // let vote_count = props.votes;
    // console.log(props);
    
    function likeHnadler(e){
        console.log("Clicked " + props.name);
        // props.votes++;
        // vote_count++;
        // setVoteCount(vote_count + 1);
        props.upvote(props.id);
        // console.log(vote_count);
    }

    return(
        <div className="book" >
            <img src={props.img_url} alt=""/>
            <h2>Name : {props.name}</h2>
            <p>description: {props.desc}</p>
            <span>Price: {props.price}</span><br/>
            <span className="vote_count">Likes: {props.votes}</span>
            <div>
                <img onClick={likeHnadler} src="assets/upvote.jpg" alt="" className="upvote_img"/>
            </div>
        </div>
    );
}

export default Book;