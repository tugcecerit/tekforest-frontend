
import CardImage from './CardImage'
import CardBody from './CardBody'
import CardFooter from './CardFooter'

const Card = (props) => {
    const plant = props.plant
    return (
        <div className="plant-card">
            <CardImage image={plant.image} defaultImage={plant.defaultImage}/>
            <CardBody plant={plant} />
            <CardFooter plant={plant} />
        </div>
    )
}

export default Card;