import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Categories = (props) => {
    const [categories, setCategories] = useState([]);
    const apiKey = process.env.REACT_APP_PLANT_API_KEY
    console.log(apiKey)
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
            setCategories(data);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getCategory();
    }, []);

    const loaded = () => {
        return (
            <div className="PlantCategories">
                <div className="pure-g">
                    {categories.map((category) => {
                        return(
                        <div key={category.id} className="pure-u-1 pure-u-md-1-3">
                            <Link to={`/category/${category.Category}`} className='link'>{category.Category}</Link>
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