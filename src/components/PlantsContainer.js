import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"
import PlantCard from './PlantCard'

const PlantsContainer = (props) => {
    console.log(props)
    const plants = props.plants
    

    return (
        <div className="PlantsContainer">
            <div className="pure-g">
                    {plants.map((plant) => {
                        return (
                            <div key={plant.id} className="pure-u-1 pure-u-md-1-3">
                                <PlantCard plant={plant}/>
                            </div>
                        )
                    })}
            </div>
        </div>
        )
    }

export default PlantsContainer;