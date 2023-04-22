import React from "react";
import Container from './components/Container'
import './Plants.css';

const Plants = (props) => {
    const plants = props.plants
    const loaded = () => {
        return (
            <section className="index">
                <Container plants={plants}/>
            </section>
        )
    }

    const loading = () => {
        return (
            <div className="loading-container">
                <h1 className="loading">Loading...</h1>
            </div>
        )
    }

    return props.plants.length > 0 ? loaded() : loading()
}

export default Plants;