const PlantCardBody = (props) => {
    
    const plant = props.plant
    const commonNames = plant['Common name']
    let commonName = ''
    if (commonNames != null) {
        commonName = commonNames[0]
    }
    return (
        <div className="plant-card-body">
            <p className="plant-card-body-name">{commonName}</p>
            <p className="plant-card-body-category">{plant.Categories}</p>
        </div>
    )
}

export default PlantCardBody;