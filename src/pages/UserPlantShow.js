import {useParams, useNavigate} from "react-router-dom"
import './UserPlantShow.css';
import { Link } from 'react-router-dom';

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
    let image = ''
    if (plant.image) {
        image = plant.image
    } else {
        image = plant.defaultImage
    }

    const loaded = () => {
        return (
            <div className="user-plant-show">
                <div className="container">
                    <div className="user-plant-show-header">
                        <Link to='/userPlants' className='return-link'>
                            <i class="bi bi-arrow-left"></i> Return
                        </Link>
                        <button className="delete-button" onClick={deletePlant}>Delete</button>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img className="user-plant-show-image"  src={image}/>
                        </div>
                        <div className="user-plant-show-data col-12 col-md-6">
                            <h1 className="user-plant-show-name">{plant.commonName}</h1>
                            <p><span>Nickname: </span>{plant.nickname}</p>
                            <p><span>Size: </span>{plant.size}</p>
                            <p><span>Categories: </span>{plant.category}</p>
                            <p><span>Climate: </span>{plant.climat}</p>
                            <p><span>Family: </span>{plant.family}</p>
                            <p><span>Latin name: </span>{plant.latinName}</p>
                            <p><span>Description: </span>{plant.description}</p>
                            <p><span>Origin: </span>{plant.origin}</p>
                            <p><span>Other names: </span>{plant.otherNames}</p>
                            <p><span>Zone: </span>{plant.zone}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const loading = () => {
        return (
            <div className="loading-container">
                <h1 className="loading">Loading...</h1>
            </div>
        )
    }
    return (
        <>
            {props.plants.length > 0 ? loaded() : loading()}
        </>
    )
}

export default UserPlantShow;