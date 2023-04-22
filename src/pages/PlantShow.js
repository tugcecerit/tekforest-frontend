import {useParams} from "react-router-dom"
import './PlantShow.css';
import { Link } from 'react-router-dom';

const PlantShow= (props) => {
    const params = useParams()
    console.log(props)
    const id = params.id
    const plants = props.plants
    const plant = plants.find((p) => p.id === id)

    const loaded = () => {
        return (
            <div className="plant-show">
                <div className="container">
                    <Link to='/plants' className='return-link'>
                    <i className="bi bi-arrow-left"></i> Return
                    </Link>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img className="plant-show-image"  src={plant.Img}/>
                        </div>
                        <div className="plant-show-data col-12 col-md-6">
                            <h1 className="plant-show-name">{plant['Common name']}</h1>
                            <p><span>Categories: </span>{plant['Categories']}</p>
                            <p><span>Climate: </span>{plant['Climat']}</p>
                            <p><span>Common name (fr.): </span>{plant['Common name (fr.)']}</p>
                            <p><span>Latin name: </span>{plant['Latin name']}</p>
                            <p><span>Description: </span>{plant['Description']}</p>
                            <p><span>Family: </span>{plant['Family']}</p>
                            <p><span>Origin: </span>{plant['Origin']}</p>
                            <p><span>Other names: </span>{plant['Other names']}</p>
                            <p><span>Zone: </span>{plant['Zone']}</p>
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

export default PlantShow;
