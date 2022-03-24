import React, { useState } from "react";

const PlayerForm = (props) => {
    const {
        initialName, 
        initialPosition, 
        handleSubmitProp
    } = props
    const [name, setName] = useState(initialName)
    const [position, setPosition] = useState(initialPosition)

    const handleSubmit = (e) => {
        e.preventDefault()
        setName('')
        setPosition('')
        handleSubmitProp({name, position})
    }

    return (
        <form className="productForm" onSubmit={handleSubmit}>
            <p>
                <label className="form-label">Player Name</label>
                <input type='text' name='name' value={name} 
                onChange={(e) => {setName(e.target.value)}} />
            </p>
            <p>
                <label>Preferred Position </label>
                <input type='text' name='position' value={position} 
                onChange={(e)=> {setPosition(e.target.value)}} />
            </p>
            <button className="btn btn-dark" disabled={!name} >Submit</button>
        </form>
    )
}

export default PlayerForm;