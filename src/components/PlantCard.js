import { useState } from "react";
import {Link} from "react-router-dom"

const PlantCard = (props) => {
    const plant = props.plant
    return (
            <div className="plant-card">
                <img src={plant.Img} className="pure-img"/>
                <h2>{plant['Common name']}</h2>
                <h4>{plant.Categories}</h4>
            </div>

    )
}

export default PlantCard;