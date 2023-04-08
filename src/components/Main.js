import { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import PlantNew from '../pages/PlantNew'
import PlantEdit from '../pages/PlantEdit'
import PlantShow from '../pages/PlantShow'
import PlantIndex from '../pages/PlantIndex'

const Main = (props) => {
    const [plant, setPlant] = useState(null)
    const URL = "http://localhost:4000/plants/"

    const getPlant = async() => {
        const response = await fetch(URL);
        const data = await response.json()
        console.log(data.data)
        setPlant(data.data)
    }

    const createPlant = async (plant) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(plant)
        })
        getPlant()
    }

    const updatePlant = async (plant, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(plant)
        })
        getPlant()
    }

    const deletePlant = async (id) => {
        await fetch(URL + id, {
            method: "DELETE",
        });
        getPlant();
      };

      useEffect(() => {
        getPlant()
    }, [])

    return (
        <main>
            <Routes>
                <Route path="/plants" element={<PlantIndex plant={plant} getPlant={getPlant}/>} />
                <Route path="/plants/new" element={<PlantNew plant={plant} createPlant={createPlant}/>} />
                <Route path="/plants/:id/edit" element={<PlantEdit plant={plant} 
                updatePlant={updatePlant}/>} />
                <Route path="/plants/:id" element={<PlantShow plant={plant} 
                deletePlant={deletePlant}/>} />
            </Routes>
        </main>
    )
}

export default Main;