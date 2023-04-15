import React from "react";
import Card from './Card'

const Container = (props) => {
    console.log(props)
    const plants = props.plants
    

    return (
        <div className="PlantsContainer">
            <div className="pure-g">
                    {plants.map((plant) => {
                        return (
                            <div key={plant.id} className="pure-u-1 pure-u-md-1-3">
                                <Card plant={plant}/>
                            </div>
                        )
                    })}
            </div>
        </div>
        )
    }

export default Container;