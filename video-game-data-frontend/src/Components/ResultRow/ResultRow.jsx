import { useNavigate } from "react-router";
import React from 'react';


const ResultRow = ({ game }) => {
    const navigate = useNavigate()


    function handleClick(){
        navigate(`/game/${game.id}`)
    }

    return ( 
        <tr key={game.id} onClick={handleClick}>
            <td>{game.name}</td>
            <td>{game.publisher}</td>
            <td>{game.platform}</td>
            <td>{game.game_rank}</td>
        </tr>
     );
}
 
export default ResultRow;