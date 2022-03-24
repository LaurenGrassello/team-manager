import React, { useState } from 'react'
import axios from 'axios'
import PlayerForm from '../components/PlayerForm'
import { useHistory, Link } from 'react-router-dom'

const AddPlayer = () => {
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const createPlayer = p => {
        axios.post('http://localhost:8000/api/player', p)
            .then(res => { history.push("/players/list") }
            )
            .catch(err => {
                const errorResponse = err.response.data.errors
                const errorArr = []
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key]['message'])
                }
                setErrors(errorArr)
            })
    }


    return (
        <div>
            <h4><Link to={`/players/list`}>List</Link>|
                <Link to={`/players/addplayer`}>Add Player</Link></h4>
            <PlayerForm handleSubmitProp={createPlayer} initialName='' initialPosition='' />
            {
                errors.map((err, i) => (
                    <p key={i} style={{ color: "red" }}>{err}</p>
                ))
            }
        </div>
    )

}

export default AddPlayer