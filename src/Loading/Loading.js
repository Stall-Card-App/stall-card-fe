import React from "react";
import loadingGif from "../assets/blackHorse.gif";

const Loading = () => {
    return (
        <div>
            <img src={loadingGif} alt="animation of running horse"/>
            <p>Loading, please wait...</p>
        </div>
    )
}

export default Loading;