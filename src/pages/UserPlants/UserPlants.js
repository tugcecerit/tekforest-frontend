import React from "react";
import Container from './components/Container'
import './UserPlants.css';

const UserPlants = (props) => {
    const plants = props.plants
    const loaded = () => {
        return (
            <section className="index">
                <Container plants={plants}/>
            </section>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <>
        {props.plants.length >= 0 ? loaded() : loading()}
        </>
    )
}

export default UserPlants;