import { useState } from "react";
import {useParams, useNavigate} from "react-router-dom"

const PlantShow= (props) => {
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const plants = props.plants
    const plant = plants.find((p) => p._id === id)

    return (
        <div>
            <h1>{plant.commonName}</h1>
            <img src={plant.image}/>
        </div>
    )
}

export default PlantShow;