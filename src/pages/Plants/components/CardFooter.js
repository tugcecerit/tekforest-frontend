
import {Link} from "react-router-dom"

const PlantCardFooter = (props) => {
    const plant = props.plant
    return (
        <div className="plant-card-footer">
            <Link to={`/plants/${plant.id}`}>VIEW</Link>
            <Link to={`/plants/new/${plant.id}`} >ADD</Link>
        </div>
    )
}

export default PlantCardFooter;