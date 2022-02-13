import React from "react";
import loadingGif from "../assets/blackHorse.gif";
import "./Loading.scss";

const Loading = () => {
    return (
        <div className="loading">
            <img src={loadingGif} alt="animation of running horse"/>
            <p>Loading, please wait...</p>
        </div>
    )
}

export default Loading;