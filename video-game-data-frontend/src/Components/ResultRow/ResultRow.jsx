import { useNavigate } from "react-router";

const ResultRow = ({ game }) => {
    const navigate = useNavigate()


    function handleClick(){
        navigate(`/game/${game.id}`)
    }

    return ( 
        <tr key={game.id} onClick={handleClick}>
            <td>{game.name}</td>
            {/* <td></td> */}
            {/* <td>
            <button onClick={handleCLick(game)}>
              Go to Game Page
            </button>
            </td> */}
        </tr>
     );
}
 
export default ResultRow;