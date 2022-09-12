import React from "react";
import "./style/homePage.css";
import ReactPlayer from "react-player/youtube";

function HomePage() {
    return (
        <div className="HomePage">
            <div className="video">
                <ReactPlayer
                    className="video"
                    url="https://youtu.be/EBYsx1QWF9A"
                    width="100%"
                    height="100%"
                    playing="true"
                    muted
                    loop="true"
                />
                <h1>
                    {" "}
                    <p className="title-r-m">Rick - And Morty</p>{" "}
                </h1>
            </div>
        </div>
    );
}
export default HomePage;
