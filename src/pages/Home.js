import React from "react";
import Button from "../components/Button";

const Home = (props) => {
    return (
        <div className="home">
            <div className="transparent-box">
                <h1>Find the perfect plant for your room</h1>
                <Button to="/plants" label="PLANTS" />
                <Button to="/register" label="JOIN" />
            </div>
        </div>
    )
}

export default Home;
