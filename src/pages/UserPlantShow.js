import {useParams, useNavigate} from "react-router-dom"
import './UserPlantShow.css';

const UserPlantShow= (props) => {
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const plants = props.plants
    const plant = plants.find((p) => p._id === id)
    const deletePlant = (event) => {
        event.preventDefault()
        props.deletePlant(plant._id)
        navigate('/userPlants')
    }
    const loaded = () => {
        return (
            <div className="user-plant-show">

            <button id="delete" onClick={deletePlant}>DELETE</button>
                <img src={plant.image}/>
                <h1>{plant.commonName}</h1>
                <p><b>Categories: </b>{plant.category}</p>
                <p><b>Categories: </b>{plant.description}</p>
            </div>
        )
    }
    const loading = () => {
        console.log("Loading")
        return <h1>Loading...</h1>
    }
    return (
        <>
            {props.plants.length > 0 ? loaded() : loading()}
        </>
    )
}

export default UserPlantShow;