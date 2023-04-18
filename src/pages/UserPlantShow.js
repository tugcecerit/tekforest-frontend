import { useState } from "react";
import {useParams, useNavigate} from "react-router-dom"

const UserPlantShow= (props) => {
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const plants = props.plants
    console.log(props)
    const plant = plants.find((p) => p._id === id)
    console.log(plant)
    const deletePlant = (event) => {
        event.preventDefault()
        props.deletePlant(plant._id)
        navigate('/userPlants')
    }
    return (
        <div>

        <button id="delete" onClick={deletePlant}>DELETE</button>
            <img src={plant.image}/>
            <h1>{plant.commonName}</h1>
            <p><b>Categories: </b>{plant.category}</p>
            <p><b>Categories: </b>{plant.description}</p>
        </div>
    )
}

export default UserPlantShow;