import { useNavigate } from "react-router"
import React from 'react';
import Table from 'react-bootstrap/Table';


const ResultTable = ({filteredGames}) => {
    const navigate = useNavigate()

    // function handleCLick(game){
    //     setSelectedGame(game)
    //     navigate(`game/${selectedGame.id}`)
    // }

    let resultRow = filteredGames.map((game) => {
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
        )
    })
    return (
        <Table variant="dark" hover >
            <thead>
                <tr >
                    <th>Game Name</th>
                    {/* <th>Game Detail Page</th> */}
                    {/* <th>Platform</th>
                    <th>Publisher</th>
                    <th>Year</th> */}
                </tr>
            </thead>
        <tbody>
            {resultRow}
        </tbody>
    </Table>
    );
}
 
export default ResultTable;