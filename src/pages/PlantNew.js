import { useState } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import style from './PlantNew.css';

const PlantNew = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id
    const plants = props.plants
    const plant = plants.find((p) => p.id === id)
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
                console.log('1')
                imageDisplay.src = event.target.value
            } else {
                console.log('2')
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

    return (
        <div className="container pure-g">
            <div className="row">
                <h1>Add a new {form.commonName} to your collection</h1>
            </div>
            <div className="row">
            <div className="col-12 col-md-6">
                <img id="imageDisplay" className="pure-u-1" src={form.defaultImage}/>
            </div>
            <div className="col-12 col-md-6">
                <form onSubmit={handleSubmit} className="pure-form pure-form-stacked">
                    <div className="pure-g">
                    <div className="pure-u-1">
                            <label htmlFor="nickname">Name</label>
                            <input
                                id="nickname"
                                type="text"
                                value={form.nickname}
                                name="nickname"
                                placeholder="Plant Name"
                                className="pure-input-1"
                                onChange={handleChanges}
                            />
                        </div>
                        <div className="pure-u-1">
                            <label htmlFor="image">Image</label>
                            <input
                                id="image"
                                type="text"
                                value={form.image}
                                name="image"
                                placeholder="Image Link"
                                className="pure-input-1"
                                onChange={handleChanges}
                            />
                        </div>
                        <div className="pure-u-1">
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                value={form.description}
                                name="description"
                                placeholder="Description"
                                className="pure-input-1"
                                onChange={handleChanges}
                            ></textarea>
                        </div>
                        <div className="pure-u-1">
                            <label htmlFor="size">Size</label>
                            <input
                                id="size"
                                type="text"
                                value={form.size}
                                name="size"
                                placeholder="Plant Size"
                                className="pure-input-1"
                                onChange={handleChanges}
                            />
                        </div>
                        <div className="pure-u-1">
                            <label htmlFor="commonName">Common Name</label>
                            <input
                                id="commonName"
                                type="text"
                                value={form.commonName}
                                name="commonName"
                                placeholder="Common Name"
                                className="pure-input-1"
                                onChange={handleChanges}
                            />
                        </div>
                        <div className="pure-u-1">
                            <label htmlFor="climat">Climat</label>
                            <input
                                id="climat"
                                type="text"
                                value={form.climat}
                                name="climat"
                                placeholder="Climat"
                                className="pure-input-1"
                                onChange={handleChanges}
                            />
                        </div>
                        <div className="pure-u-1">
                            <label htmlFor="category">Category</label>
                            <input
                                id="category"
                                type="text"
                                value={form.category}
                                name="category"
                                placeholder="Category"
                                className="pure-input-1"
                                onChange={handleChanges}
                            />
                        </div>
                        <div className="pure-u-1">
                            <label htmlFor="family">Family</label>
                            <input
                                id="family"
                                type="text"
                                value={form.family}
                                name="family"
                                placeholder="Family"
                                className="pure-input-1"
                                onChange={handleChanges}
                            />
                        </div>
                        <div className="pure-u-1">
                            <label htmlFor="defaultImage">Default Image</label>
                            <input
                                id="defaultImage"
                                type="text"
                                value={form.defaultImage}
                                name="defaultImage"
                                placeholder="Default Image Link"
                                className="pure-input-1"
                                onChange={handleChanges}
                            />
                        </div>
                        <div className="pure-u-1">
                            <label htmlFor="origin">Origin</label>
                            <input
                                id="origin"
                                type="text"
                                value={form.origin}
                                name="origin"
                                placeholder="Origin"
                                className="pure-input-1"
                                onChange={handleChanges}
                            />
                        </div>
                        <div className="pure-u-1">
                            <label htmlFor="latinName">Latin Name</label>
                            <input
                                id="latinName"
                                type="text"
                                value={form.latinName}
                                name="latinName"
                                placeholder="Latin Name"
                                className="pure-input-1"
                                onChange={handleChanges}
                            />
                        </div>
                        <div className="pure-u-1">
                            <label htmlFor="otherNames">Other Names</label>
                            <input
                                id="otherNames"
                                type="text"
                                value={form.otherNames}
                                name="otherNames"
                                placeholder="Latin Name"
                                className="pure-input-1"
                                onChange={handleChanges}
                            />
                        </div>
                        
                        <input type="submit" value="Create Plant" />
                    </div>
                </form>
        </div>
        </div>
        </div>
    )
}

export default PlantNew;