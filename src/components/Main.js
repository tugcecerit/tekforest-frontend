import { useEffect, useState } from 'react'
import React from "react";
import {Routes, Route} from 'react-router-dom'
import PlantNew from '../pages/PlantNew'
import PlantEdit from '../pages/PlantEdit'
import PlantShow from '../pages/PlantShow'
import PlantIndex from '../pages/PlantIndex'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Signin from '../pages/Signin'
import PlantCategories from '../pages/PlantCategories'
import PlantsByCategory from '../pages/PlantsByCategory'

const Main = (props) => {

    const [plants, setPlants] = React.useState([])
    const apiKey = process.env.REACT_APP_PLANT_API_KEY
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
        }
    };

    const getPlants = async () => {
        try {
            const response = await fetch('https://house-plants2.p.rapidapi.com/all-lite', options)
            const data = await response.json();
            setPlants(data)
            
        } catch (err) {
            console.error(err.message);
        }
    }

    const [userPlants, setUserPlants] = useState(null)
    const URL = "http://localhost:4000/plants/"

    const getUserPlants = async() => {
        const response = await fetch(URL);
        const data = await response.json()
        setUserPlants(data.data)
    }

    const createPlant = async (plant) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(plant)
        })
        getUserPlants()
    }

    const updatePlant = async (plant, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(plant)
        })
        getUserPlants()
    }

    const deletePlant = async (id) => {
        await fetch(URL + id, {
            method: "DELETE",
        });
        getUserPlants();
      };

      useEffect(() => {
        getPlants()
        getUserPlants()
    }, [])

    return (
        <main>
            <Routes>
                <Route path="/about" element={<About plants={plants}/>} />
                <Route path="/contact" element={<Contact plants={plants}/>} />
                <Route path="/register" element={<Register plants={plants}/>} />
                <Route path="/signin" element={<Signin plants={plants}/>} />
                <Route path="/" element={<Home plants={plants}/>} />
                <Route path="/categories" element={<PlantCategories plants={plants}/>} />
                <Route path="/plantsByCategory/:categoryName" element={<PlantsByCategory />} />
                <Route path="/plants" element={<PlantIndex plants={plants}/>} />
                <Route path="/plants/new/:id" element={<PlantNew plants={plants} createPlant={createPlant}/>} />
                <Route path="/plants/:id/edit" element={<PlantEdit plants={plants} 
                updatePlant={updatePlant}/>} />
                <Route path="/plants/:id" element={<PlantShow plants={plants}/>} />
            </Routes>
        </main>
    )
}

export default Main;