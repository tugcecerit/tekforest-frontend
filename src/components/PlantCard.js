import { useState } from "react";
import {Link} from "react-router-dom"

const PlantCard = (props) => {
    const plant = props.plant
    return (
        <Link to ={`/plants/${plant._id}`}>
            <div className="plant-card" >
                <img src={plant.Img}></img>
                <h4>{plant['Common name']}</h4>
            </div>
        </Link>
    )
}

export default PlantCard;