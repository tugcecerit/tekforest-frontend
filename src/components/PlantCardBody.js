

const PlantCardBody = (props) => {
    const plant = props.plant
    console.log(plant)
    return (
        <>
            <h2>{plant['Common name']}</h2>
            <h4>{plant.Categories}</h4>
        </>
    )
}

export default PlantCardBody;