import { useState } from "react";
import {useParams, useNavigate} from "react-router-dom"

const PlantShow= (props) => {
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const plants = props.plants
    console.log(props)
    const plant = plants.find((p) => p.id === id)
    console.log(plant)

    return (
        <div>
            <img src={plant.Img}/>
            <h1>{plant['Common name']}</h1>
            <p><b>Categories: </b>{plant['Categories']}</p>
            <p><b>Climat: </b>{plant['Climat']}</p>
            <p><b>Common name (fr.): </b>{plant['Common name (fr.)']}</p>
            <p><b>Latin name: </b>{plant['Latin name']}</p>
            <p><b>Description: </b>{plant['Description']}</p>
            <p><b>Family: </b>{plant['Family']}</p>
            <p><b>Origin: </b>{plant['Origin']}</p>
            <p><b>Other names: </b>{plant['Other names']}</p>
            <p><b>Zone: </b>{plant['Zone']}</p>
        </div>
    )
}

export default PlantShow;
