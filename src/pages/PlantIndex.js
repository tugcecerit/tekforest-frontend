import React from "react";
import PlantsContainer from '../components/PlantsContainer'

const PlantIndex = (props) => {
        const plants = props.plants
        return (
        <section className="index">
            {/* <PlantCategories/> */}
            <PlantsContainer plants={plants}/>
        </section>
        )
}

export default PlantIndex;