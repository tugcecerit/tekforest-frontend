import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"
import PlantsContainer from '../components/PlantsContainer'

const PlantIndex = (props) => {
    // const plants = props.plants
    const [plants, setPlants] = React.useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '20c00fa05fmsh0383970c5aedcd9p156a35jsn419b4845d72e',
            'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
        }
    };

    const getPlant = async () => {
        const response = fetch('https://house-plants2.p.rapidapi.com/all-lite', options)
        .then(response => response.json())
        .then((data) => {
            setPlants(data)
            console.log(plants)
        })
        .catch(err => console.error(err.message));
    }

    React.useEffect(() => {
        getPlant()
    }, [])

    const loaded = () => {
        
        return (
        <section>
            {plants.map((plant) => {
                return (
                    <div key={plant.id}>
                        
                        <h4>{plant.Categories}</h4>
                        <img src={plant.Img}></img>
                    </div>
                )
            })}
            {/* <PlantsContainer plants={plants}/> */}
        </section>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }
    return plants ? loaded() : loading()
    // return props.plants ? loaded() : loading()
}

export default PlantIndex;