import { useState } from "react";
import {Link} from "react-router-dom"
import PlantsContainer from '../components/PlantsContainer'

const PlantIndex = (props) => {
    const plants = props.plants
    const loaded = () => {
        return (
        <section>
            <PlantsContainer plants={plants}/>
        </section>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            {props.plants ? loaded() : loading()}
        </section>
    )
}

export default PlantIndex;