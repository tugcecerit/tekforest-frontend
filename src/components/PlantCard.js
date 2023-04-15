
import {Link} from "react-router-dom"
import PlantCardImage from './PlantCardImage'
import PlantCardBody from './PlantCardBody'
import PlantCardFooter from './PlantCardFooter'

const PlantCard = (props) => {
    const plant = props.plant
    return (
            <div className="plant-card">
                <PlantCardImage image={plant.Img}/>
                <PlantCardBody plant={plant} />
                <PlantCardFooter plant={plant} />
            </div>

    )
}

export default PlantCard;