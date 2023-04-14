import { useState } from "react";
import {Link} from "react-router-dom"

const PlantCardBody = (props) => {
    return (
        <>
            <h2>{props.commonName}</h2>
            <h4>{props.catory}</h4>
        </>
    )
}

export default PlantCardBody;