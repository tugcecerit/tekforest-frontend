import React from "react";
import Container from './components/Container'
import './Plants.css';

const Plants = (props) => {
    console.log(props)
        const plants = props.plants
        return (
        <section className="index">
            <Container plants={plants}/>
        </section>
        )
}

export default Plants;