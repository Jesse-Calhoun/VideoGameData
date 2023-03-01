const ResultRow = ({ game }) => {
    return ( 
        <tr key={game.id} >
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