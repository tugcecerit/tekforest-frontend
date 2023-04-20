import React from "react";
import Card from './Card'

const PlantsContainer = (props) => {
    const plants = props.plants
    
    return (
        <div className="container ">
            <h1>Plants Index</h1>
            <div className="row g-4">
                    {plants.map((plant) => {
                        return (
                            <div key={plant.id} className="col-12 col-lg-4 col-xxl-3">
                                <Card plant={plant}/>
                            </div>
                        )
                    })}
            </div>
        </div>
        )
    }

export default PlantsContainer;