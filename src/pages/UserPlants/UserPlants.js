import React from "react";
import Container from './components/Container'
import Button from '../../components/Button'

const UserPlants = (props) => {
        const plants = props.plants
        return (
        <section className="index">
            <h1>User Plants</h1>
            <Button to={`/userPlants/new`}  label="NEW" />
            <Container plants={plants}/>
        </section>
        )
}

export default UserPlants;