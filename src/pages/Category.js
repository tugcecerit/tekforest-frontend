import React from "react";
import PlantCard from '../components/PlantCard'
import {useParams} from "react-router-dom"

const PlantsContainerByCategory = (props) => {
    const [plants, setPlants] = React.useState([]);
    const apiKey = process.env.REACT_APP_PLANT_API_KEY;
    const params = useParams()
    console.log(params);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
        }
    };

    const getPlantsByCategory = async (category) => {
        const response = fetch(`https://house-plants2.p.rapidapi.com/category/${category}`, options)
            .then(response => response.json())
            .then((data) => {
                setPlants(data);
                console.log(plants);
            })
            .catch(err => console.error(err.message));
    }

    React.useEffect(() => {
        getPlantsByCategory(props.category);
    }, []);

    const loaded = () => {
        return (
            <div className="PlantsContainer">
                <div className="pure-g">
                    {plants.map((plant) => {
                        return (
                            <div key={plant.id} className="pure-u-1 pure-u-md-1-3">
                                <PlantCard plant={plant} />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }
    return plants ? loaded() : loading()
}

export default PlantsContainerByCategory;