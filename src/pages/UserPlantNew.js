import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './UserPlantNew.css';
import { Link } from 'react-router-dom';

const UserPlantNew = (props) => {
    const navigate = useNavigate()
    // state to hold all form data
    const [form, setForm] = useState({
        commonName: '',
        image: '',
        category: '',
    })

    // handle changes in the form
    const handleChanges = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
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
        <div className="user-plant-new">
            <div className="container">
                <Link to='/userPlants' className='return-link'>
                    <i className="bi bi-arrow-left"></i> Return
                </Link>
                <h1 className="user-plant-new-name">New Plant</h1>
                <form onSubmit={handleSubmit} className="pure-form pure-form-stacked">
                            <label htmlFor="nickname">Nickname</label>
                            <input
                                id="nickname"
                                className="pure-u-1"
                                type="text"
                                value={form.nickname}
                                name="nickname"
                                placeholder="Plant Nickname"
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
                                onChange={handleChanges}
                            />
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                className="pure-u-1"
                                value={form.description}
                                name="description"
                                placeholder="Description"
                                onChange={handleChanges}
                            ></textarea>
                            <label htmlFor="commonName">Common Name</label>
                                <input
                                    id="commonName"
                                    className="pure-u-1"
                                    type="text"
                                    value={form.commonName}
                                    name="commonName"
                                    placeholder="Common Name"
                                    onChange={handleChanges}
                                />
                                <label htmlFor="climate">Climate</label>
                                <input
                                    id="climate"
                                    className="pure-u-1"
                                    type="text"
                                    value={form.climat}
                                    name="climat"
                                    placeholder="Climate"
                                    onChange={handleChanges}
                                />
                                <label htmlFor="category">Category</label>
                                <input
                                    id="category"
                                    className="pure-u-1"
                                    type="text"
                                    value={form.category}
                                    name="category"
                                    placeholder="Category"
                                    onChange={handleChanges}
                                />
                                <label htmlFor="family">Family</label>
                                <input
                                    id="family"
                                    className="pure-u-1"
                                    type="text"
                                    value={form.family}
                                    name="family"
                                    placeholder="Family"
                                    onChange={handleChanges}
                                />
                                <label htmlFor="origin">Origin</label>
                                <input
                                    id="origin"
                                    className="pure-u-1"
                                    type="text"
                                    value={form.origin}
                                    name="origin"
                                    placeholder="Origin"
                                    onChange={handleChanges}
                                />
                                <label htmlFor="latinName">Latin Name</label>
                                <input
                                    id="latinName"
                                    className="pure-u-1"
                                    type="text"
                                    value={form.latinName}
                                    name="latinName"
                                    placeholder="Latin Name"
                                    onChange={handleChanges}
                                />
                                <label htmlFor="otherNames">Other Names</label>
                                <input
                                    id="otherNames"
                                    className="pure-u-1"
                                    type="text"
                                    value={form.otherNames}
                                    name="otherNames"
                                    placeholder="Latin Name"
                                    onChange={handleChanges}
                                />
                        <input className="new-button" type="submit" value="Create Plant" />
                </form>
            </div>
        </div>
    )
}

export default UserPlantNew;