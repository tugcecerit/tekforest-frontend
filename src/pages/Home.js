import React from "react";
import Button from "../components/Button";

const Home = (props) => {
    return (
        <div className="home">
            <div className="transparent-box">
                <h1>Find the perfect plant for your room</h1>
                <h3>Welcome to our plant paradise! Are you looking to add some greenery to your room? Look no further. Our website offers a wide selection of beautiful plants that are perfect for any room in your home.</h3>
                <Button to="/plants" label="PLANTS" />
                <Button to="/register" label="JOIN" />
                <img className="home-img" src="/home13.png"></img>
            </div>
        </div>
    )
}

export default Home;
