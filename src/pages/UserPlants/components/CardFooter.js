import Button from '../../../components/Button'

const CardFooter = (props) => {
    const plant = props.plant
    return (
        <>
            <Button to={`/userPlants/${plant._id}`}  label="VIEW" />
            <Button to={`/userPlants/${plant._id}/edit`}  label="UPDATE" />
        </>
    )
}

export default CardFooter;