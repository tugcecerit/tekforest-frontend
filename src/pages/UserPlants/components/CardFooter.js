import Button from '../../../components/Button'

const CardFooter = (props) => {
    const plant = props.plant
    return (
        <>
            <Button to={`/plants/${plant.id}`}  label="VIEW" />
            <Button to={`/plants/new/${plant.id}`}  label="ADD" />
        </>
    )
}

export default CardFooter;