import { useEffect, useState } from 'react'
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
    const [plants, setPlants] = useState(null)
    const URL = "http://localhost:4000/plants/"

    const getPlants = async() => {
        const response = await fetch(URL);
        const data = await response.json()
        console.log(data.data)
        setPlants(data.data)
    }

    const createPlant = async (plant) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(plant)
        })
        getPlants()
    }

    const updatePlant = async (plant, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(plant)
        })
        getPlants()
    }

    const deletePlant = async (id) => {
        await fetch(URL + id, {
            method: "DELETE",
        });
        getPlants();
      };

      useEffect(() => {
        getPlants()
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
                <Route path="/plants/new" element={<PlantNew plants={plants} createPlant={createPlant}/>} />
                <Route path="/plants/:id/edit" element={<PlantEdit plants={plants} 
                updatePlant={updatePlant}/>} />
                <Route path="/plants/:id" element={<PlantShow plants={plants} 
                deletePlant={deletePlant}/>} />
            </Routes>
        </main>
    )
}

export default Main;