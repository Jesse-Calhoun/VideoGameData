import { useNavigate } from "react-router"
import React from 'react';
import Table from 'react-bootstrap/Table';
import ResultRow from "../ResultRow/ResultRow";


const ResultTable = ({filteredGames}) => {
    const navigate = useNavigate()

    // function handleCLick(game){
    //     setSelectedGame(game)
    //     navigate(`game/${selectedGame.id}`)
    // }

    let resultRow = filteredGames.map((game) => <ResultRow game={game}/>)
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