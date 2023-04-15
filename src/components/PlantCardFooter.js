
import {Link} from "react-router-dom"
import Button from './Button'

const PlantCardFooter = (props) => {
    const plant = props.plant
    return (
        <>
            <Button to={`/plants/${plant.id}`}  label="VIEW" />
            <Button to={`/plants/new/${plant.id}`}  label="ADD" />
        </>
    )
}

export default PlantCardFooter;