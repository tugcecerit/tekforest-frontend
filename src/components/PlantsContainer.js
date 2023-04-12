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
        <div>
            {plants.map((plant) => {
                return (
                    <div key={plant.id} className="plant">
                        <PlantCard plant={plant}/>
                    </div>

                    // <div key={plant.id}>
                    //     <img src={plant.Img}></img>
                    //     <h4>{plant['Common name']}</h4>
                    // </div>
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