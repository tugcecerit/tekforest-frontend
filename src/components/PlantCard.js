import { useState } from "react";
import {Link} from "react-router-dom"
import PlantCardImage from './PlantCardImage'
import PlantCardBody from './PlantCardBody'

const PlantCard = (props) => {
    const plant = props.plant
    return (
            <div className="plant-card">
                <PlantCardImage image={plant.Img}/>
                <PlantCardBody commonName={plant['Common name']} catory={plant.Categories} />
            </div>

    )
}

export default PlantCard;