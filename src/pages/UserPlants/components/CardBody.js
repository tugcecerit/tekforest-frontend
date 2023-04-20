const CardBody = (props) => {
    const plant = props.plant
    return (
        <div className="plant-card-body">
            <p className="plant-card-body-name">{plant.commonName}</p>
            <p className="plant-card-body-category">{plant.category}</p>
        </div>
    )
}

export default CardBody;