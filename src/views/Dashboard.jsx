import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = () => {
    const [players, setPlayers] = useState()
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/player`)
            .then(res => {
                setPlayers(res.data)
                setRefresh(!refresh)
            })
            .catch(err => console.log(err))
    }, [refresh])

    const handleDelete = (playerId) => {
        axios.delete(`http://localhost:8000/api/player/${playerId}`)
            .then(res => {
                setRefresh(!refresh)
            })
            .catch(err => console.log(err))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th> Team</th>
                    <th> Preferred Position</th>
                    <th> Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    players &&
                    players.map((player, i) => (
                        <tr key={i}>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                            <td> <button className="btn btn-dark" onClick={() => handleDelete(player._id)}>Delete</button></td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
    )
}

export default Dashboard