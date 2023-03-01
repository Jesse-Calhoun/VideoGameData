import { useNavigate } from "react-router";

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
        </tr>
     );
}
 
export default ResultRow;