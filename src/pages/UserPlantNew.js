import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={form.commonName}
                name="commonName"
                placeholder="Common Name"
                onChange={handleChanges}
            />
            <input
                type="text"
                value={form.image}
                name="image"
                placeholder="Image URL"
                onChange={handleChanges}
            />
            <input
                type="text"
                value={form.category}
                name="category"
                placeholder="Category"
                onChange={handleChanges}
            />
            <input type="submit" value="Create Plant" />
        </form>
    )
}

export default UserPlantNew;