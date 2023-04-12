import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"
import PlantCard from './PlantCard'

const PlantsContainer = (props) => {
    const [plants, setPlants] = React.useState([])
    const apiKey = process.env.REACT_APP_PLANT_API_KEY
    console.log(apiKey)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
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
        <div className="pure-g">
                {plants.map((plant) => {
                    return (
                        <div key={plant.id} className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-4">
                            <PlantCard plant={plant}/>
                        </div>
                    )
                })}
        </div>
        )
    }
    const loading = () => {
        return <h1>Loading...</h1>
    }
    return plants ? loaded() : loading()
}

export default PlantsContainer;