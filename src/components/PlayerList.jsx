import React from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'


const PlayerList = (props) => {

    return (
        <div className='container'>
            <table>
            <thead>
            <tr>
            <th>Author</th>
            <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {props.player.map((player, i)=>(
                <tr key={i}>
                <td>{player.name}</td>
                <td><Link to={`/player/${player._id}/edit`}/>Edit</td>
                <td><DeleteButton playerId={player._id} successCallback={()=>props.removeFromDom(player._id)}/></td>
                </tr>
            ))}
            </tbody>
            </table>
        </div>
    )
}

export default PlayerList;
