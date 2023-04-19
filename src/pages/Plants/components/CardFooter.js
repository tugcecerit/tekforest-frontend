import Button from '../../../components/Button'

const PlantCardFooter = (props) => {
    const plant = props.plant
    return (
        <div className="plant-card-footer">
            {/* <Button to={`/plants/${plant.id}`}  label="VIEW" />
            <Button to={`/plants/new/${plant.id}`}  label="ADD" /> */}
        </div>
    )
}

export default PlantCardFooter;