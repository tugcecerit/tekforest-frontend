import {Link} from "react-router-dom"

const CardFooter = (props) => {
    const plant = props.plant
    return (
        <div className="plant-card-footer">
            <Link to={`/userPlants/${plant._id}`} >VIEW</Link>
            <Link to={`/userPlants/${plant._id}/edit`} >UPDATE</Link>
        </div>
    )
}

export default CardFooter;