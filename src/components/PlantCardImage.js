import { useState } from "react";
import {Link} from "react-router-dom"

const PlantCardImage = (props) => {
    return (
            
            <img src={props.image} className="pure-img"/>

    )
}

export default PlantCardImage;