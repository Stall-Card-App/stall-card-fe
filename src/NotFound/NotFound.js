import React from "react";
import {Link} from "react-router-dom";
import barn from "../assets/barnIcon.png";
import "./NotFound.scss";

const NotFound = () => {
    return (
        <div className="not-found">
            <p>Sorry, something went wrong!</p>
            <img src={barn} alt="icon of a barn"/>
            <Link to={"/"} className="back-home">⬅ Return to the Barn</Link>
        </div>
    )
}

export default NotFound;