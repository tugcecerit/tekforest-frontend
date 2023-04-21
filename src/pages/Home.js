import React from "react";
import Button from "../components/Button";
import './Home.css';

const Home = (props) => {
    return (
        <div className="home">
            <div className="transparent-box">
                <div className="home-content">
                    <h1>Find the perfect plant for your room</h1>
                    <p>Welcome to our plant paradise! Are you looking to add some greenery to your room? Look no further. Our website offers a wide selection of beautiful plants that are perfect for any room in your home.</p>
                    <div className="home-content-buttons">
                        <Button to="/plants" label="Plants"/>
                        <Button to="/register" label="Join"/>
                    </div>
                </div>
                <img className="home-img" src="/home15.png"></img>
            </div>
        </div>
    )
}

export default Home;