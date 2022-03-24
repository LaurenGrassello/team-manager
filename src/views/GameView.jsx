import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const GameView = () => {
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


    return (
        <div>
        <h4>Player Status - Game </h4>
        <div>
        <Link  to='/status/game/1' className='gameNum1'>Game 1</Link>|
        <Link  to='/status/game/2' className='gameNum'>Game 2</Link>|
        <Link  to='/status/game/3' className='gameNum'>Game 3</Link>
        </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th> Team</th>
                        <th> Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players &&
                        players.map((player, i) => (
                            <tr key={i}>
                                <td>{player.name}</td>
                                <td>
                                <button>Playing</button></td>

                                <td>
                                <button>Not Playing</button></td>

                                <td>
                                <button>Undecided</button></td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    )
}

export default GameView