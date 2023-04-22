import React from "react";
import Card from './Card'

const PlantsContainer = (props) => {
    const plants = props.plants
    console.log(props)
    let headingText = ''
    if (props.category) {
        headingText = props.category
    } else {
        headingText = 'Plants'
    }
    console.log(headingText)
    console.log('test')
    return (
        <div className="container ">
            <h1>{headingText} Index</h1>
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