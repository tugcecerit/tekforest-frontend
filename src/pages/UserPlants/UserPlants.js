import React from "react";
import Container from './components/Container'

const UserPlants = (props) => {
        const plants = props.plants
        return (
        <section className="index">
            <h1>User Plants</h1>
            <Container plants={plants}/>
        </section>
        )
}

export default UserPlants;