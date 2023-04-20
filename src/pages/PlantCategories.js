import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Categories = (props) => {
    const [categories, setCategories] = React.useState([]);
    const apiKey = process.env.REACT_APP_PLANT_API_KEY

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
        }
    };
    const getCategory = async () => {
        try {
            const response = await fetch('https://house-plants2.p.rapidapi.com/categories', options);
            const data = await response.json();
            console.log('Data')
            console.log(data)
            setCategories(data);
            
        } catch (err) {
            console.error(err.message);
        }
    }

    React.useEffect(() => {
        getCategory();
    }, []);

    const loaded = () => {
        console.log('Categories')
            console.log(categories)
        return (
            
            <div className="PlantCategories">
                <div className="pure-g">
                    {categories.map((category) => {
                        const categoryName = category.Category
                        return(
                        <div key={category.Category} className="pure-u-1 pure-u-md-1-3">
                            <Link to={`/plantsByCategory/${categoryName}`} className='link'>{categoryName}</Link>
                        </div>
                        )
                    })}
                </div>
            </div>
        );
    }

    const loading = () => {
        return <h1>Loading...</h1>;
    }

    return categories ? loaded() : loading();
}

export default Categories;