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
        try {
            const response = await fetch('https://house-plants2.p.rapidapi.com/all-lite', options)
            const data = await response.json();
            setPlants(data)
            
        } catch (err) {
            console.error(err.message);
        }
    }

    React.useEffect(() => {
        getPlant()
    }, [])

    const loaded = () => {
        console.log(plants)
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
    const loading = () => {
        return <h1>Loading...</h1>
    }
    return plants ? loaded() : loading()
}

export default PlantsContainer;