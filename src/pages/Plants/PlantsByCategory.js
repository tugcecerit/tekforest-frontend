import React from "react";
import Card from './components/Card'
import {useParams} from "react-router-dom"
import Container from './components/Container'
import './PlantsByCategory.css';

const PlantsContainerByCategory = (props) => {
    const [plants, setPlants] = React.useState([]);
    const apiKey = process.env.REACT_APP_PLANT_API_KEY;
    console.log(plants)
    const params = useParams()
    const category = params.categoryName
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
        }
    };

    const getPlantsByCategory = async () => {
        try {
            const response = await fetch(`https://house-plants2.p.rapidapi.com/category/${category}`, options);
            const data = await response.json();
            setPlants(data);
        } catch (err) {
            console.error(err.message)
        }
    }

    React.useEffect(() => {
        getPlantsByCategory(props.category);
    }, [params]);

    const loaded = () => {
        return (
            <>
                <section className="index">
                    <Container plants={plants} category={category}/>
                </section>
                </>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }
    return plants.length ? loaded() : loading()
}

export default PlantsContainerByCategory;