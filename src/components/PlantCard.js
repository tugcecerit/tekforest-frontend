import { useState } from "react";
import {Link} from "react-router-dom"

const PlantCard = (props) => {
    const plant = props.plant
    return (
        <Link to ={`/plants/${plant._id}`}>
        <div className="plant-card" >
            <img src={plant.image}/>
            <h1>{plant.commonName}</h1>
        </div>
        </Link>
    )
}

export default PlantCard;