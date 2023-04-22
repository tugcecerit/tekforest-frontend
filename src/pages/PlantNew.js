import { useState } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import './PlantNew.css';
import { Link } from 'react-router-dom';

const PlantNew = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id
    const plants = props.plants
    console.log(props)
    const plant = plants.find((p) => p.id === id)
    console.log(plant)
    // state to hold all form data
    const [form, setForm] = useState({
        commonName: `${plant['Common name']}`,
        latinName: `${plant['Latin name']}`,
        otherNames: `${plant['Other names']}`,
        defaultImage: `${plant.Img}`,
        category: `${plant.Categories}`,
        climat: `${plant.Climat}`,
        family: `${plant.Family}`,
        origin: `${plant.Origin}`,
        nickname: '',
        image: '',
        description: '',
        size: '',
    })

    // handle changes in the form
    const handleChanges = (event) => {
        let imageDisplay = document.getElementById('imageDisplay')
        setForm({ ...form, [event.target.name]: event.target.value })
        
        if (event.target.name == 'image') {
            if (event.target.value !== '') {
                imageDisplay.src = event.target.value
            } else {
                imageDisplay.src = form.defaultImage
            }
        }
    }

    // handle the submission of the form
    const handleSubmit = (event) => {
        event.preventDefault()
        props.createPlant(form).then(() => {
            navigate('/userPlants')
        }).catch((err) => {
            console.log(err)
        })
    }

    const loaded = () => {
        return (
            <div className="plant-new">
                <div className="container">
                    <Link to='/plants' className='return-link'>
                        <i class="bi bi-arrow-left"></i> Return
                    </Link>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img id="imageDisplay" className="plant-new-image" src={form.defaultImage}/>
                            <div className="plant-new-data">
                                <p><span>Common Name: </span>{plant['Common name']}</p>
                                <p><span>Categories: </span>{plant['Categories']}</p>
                                <p><span>Climate: </span>{plant['Climat']}</p>
                                <p><span>Common name (fr.): </span>{plant['Common name (fr.)']}</p>
                                <p><span>Latin name: </span>{plant['Latin name']}</p>
                                <p><span>Description: </span>{plant['Description']}</p>
                                <p><span>Family: </span>{plant['Family']}</p>
                                <p><span>Origin: </span>{plant['Origin']}</p>
                                <p><span>Other names: </span>{plant['Other names']}</p>
                                <p><span>Zone: </span>{plant['Zone']}</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <h1 className="plant-new-name">Add {form.commonName}</h1>
                            <form onSubmit={handleSubmit} className="pure-form pure-form-stacked">
                                        <label htmlFor="nickname">Nickname</label>
                                        <input
                                            id="nickname"
                                            className="pure-u-1"
                                            type="text"
                                            value={form.nickname}
                                            name="nickname"
                                            placeholder="Plant Nickname"
                                            className="pure-input-1"
                                            onChange={handleChanges}
                                        />
                                        <label htmlFor="image">Image</label>
                                        <input
                                            id="image"
                                            className="pure-u-1"
                                            type="text"
                                            value={form.image}
                                            name="image"
                                            placeholder="Image Link"
                                            className="pure-input-1"
                                            onChange={handleChanges}
                                        />
                                        <label htmlFor="size">Size</label>
                                        <input
                                            id="size"
                                            className="pure-u-1"
                                            type="text"
                                            value={form.size}
                                            name="size"
                                            placeholder="Plant Size"
                                            className="pure-input-1"
                                            onChange={handleChanges}
                                        />
                                        <label htmlFor="description">Description</label>
                                        <textarea
                                            id="description"
                                            className="pure-u-1"
                                            value={form.description}
                                            name="description"
                                            placeholder="Description"
                                            className="pure-input-1"
                                            onChange={handleChanges}
                                        ></textarea>
                                        
                                        <div className="hidden-fields">
                                            <input
                                                id="commonName"
                                                className="pure-u-1"
                                                type="text"
                                                value={form.commonName}
                                                name="commonName"
                                                placeholder="Common Name"
                                                className="pure-input-1"
                                                onChange={handleChanges}
                                            />
                                            <input
                                                id="climate"
                                                className="pure-u-1"
                                                type="text"
                                                value={form.climat}
                                                name="climat"
                                                placeholder="Climat"
                                                className="pure-input-1"
                                                onChange={handleChanges}
                                            />
                                            <input
                                                id="category"
                                                className="pure-u-1"
                                                type="text"
                                                value={form.category}
                                                name="category"
                                                placeholder="Category"
                                                className="pure-input-1"
                                                onChange={handleChanges}
                                            />
                                            <input
                                                id="family"
                                                className="pure-u-1"
                                                type="text"
                                                value={form.family}
                                                name="family"
                                                placeholder="Family"
                                                className="pure-input-1"
                                                onChange={handleChanges}
                                            />
                                            <input
                                                id="defaultImage"
                                                className="pure-u-1"
                                                type="text"
                                                value={form.defaultImage}
                                                name="defaultImage"
                                                placeholder="Default Image Link"
                                                className="pure-input-1"
                                                onChange={handleChanges}
                                            />
                                            <input
                                                id="origin"
                                                className="pure-u-1"
                                                type="text"
                                                value={form.origin}
                                                name="origin"
                                                placeholder="Origin"
                                                className="pure-input-1"
                                                onChange={handleChanges}
                                            />
                                            <input
                                                id="latinName"
                                                className="pure-u-1"
                                                type="text"
                                                value={form.latinName}
                                                name="latinName"
                                                placeholder="Latin Name"
                                                className="pure-input-1"
                                                onChange={handleChanges}
                                            />
                                            <input
                                                id="otherNames"
                                                className="pure-u-1"
                                                type="text"
                                                value={form.otherNames}
                                                name="otherNames"
                                                placeholder="Latin Name"
                                                className="pure-input-1"
                                                onChange={handleChanges}
                                            />
                                        </div>
                                    <input className="new-button" type="submit" value="Create Plant" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const loading = () => {
        return (
            <div className="loading-container">
                <h1 className="loading">Loading...</h1>
            </div>
        )
    }

    return (
        <>
        {props.plants.length > 0 ? loaded() : loading()}
        </>
    )
}

export default PlantNew;