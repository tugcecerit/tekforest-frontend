import { useState } from "react";
import {Link} from "react-router-dom"
import PlantCard from './PlantCard'

const PlantsContainer = (props) => {

    return props.plants.map((plant) => (
        <div key={plant._id} className="plant">
            <PlantCard plant={plant}/>
        </div>
    ))
}

export default PlantsContainer;