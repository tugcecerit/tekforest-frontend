import { useState } from "react";
import {Link} from "react-router-dom"

const PlantCard = (props) => {
    const plant = props.plant
    return (
            <>
                <img src={plant.Img} className="cards"></img>
                <h4>{plant['Common name']}</h4>
            </>

    )
}

export default PlantCard;