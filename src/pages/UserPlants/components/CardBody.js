const CardBody = (props) => {
    const plant = props.plant
    return (
        <>
            <h2>{plant.commonName}test</h2>
            <h4>{plant.category}</h4>
        </>
    )
}

export default CardBody;