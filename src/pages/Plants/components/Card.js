
import {Link} from "react-router-dom"
import CardImage from './CardImage'
import CardBody from './CardBody'
import CardFooter from './CardFooter'

const PlantCard = (props) => {
    const plant = props.plant
    return (
        <div className="plant-card">
            <CardImage image={plant.Img}/>
            <CardBody plant={plant} />
            <CardFooter plant={plant} />
        </div>
    )
}

export default PlantCard;