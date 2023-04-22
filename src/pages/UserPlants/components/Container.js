import React from "react";
import Card from './Card'
import Button from '../../../components/Button'


const Container = (props) => {
    const plants = props.plants

    return (
        <div className="container">
            <div className="heading-container">
                <h1>My Plants</h1>
                <Button to={`/userPlants/new`}  label="NEW" />
            </div>
            <div className="row g-4">
                    {plants.map((plant) => {
                        return (
                            <div key={plant._id} className="col-12 col-lg-4 col-xxl-3">
                                <Card plant={plant}/>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Container;