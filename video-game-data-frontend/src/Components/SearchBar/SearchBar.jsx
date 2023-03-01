import { useState } from "react";
import { useNavigate } from "react-router";
import ResultTable from "../ResultTable/ResultTable";

const SearchBar = ({ games, setFilteredGames, filteredGames }) => {
    const [searchTerm, setSearchTerm] = useState('')
    // const [results, setResults] = useState([])
    const [selectedGame, setSelectedGame] = useState({})
    

    function handleSearch(event){
        event.preventDefault()
        let filteredVideoGames = games.filter((game) => game.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setFilteredGames(filteredVideoGames)
        console.log(filteredVideoGames)
        setSearchTerm('')
    }

    // const navigate = useNavigate()

    // function handleCLick(game){
    //     setSelectedGame(game)
    //     navigate(`game/${selectedGame.id}`)
    // }

    // let resultRow = filteredGames.map((game) => {
    //     return (
    //         <tr key={game.id} onClick={handleCLick(game)}>
    //             <td>{game.name}</td>
    //             <td></td>
    //             {/* <td>
    //             <button onClick={handleCLick(game)}>
    //               Go to Game Page
    //             </button>
    //           </td> */}
    //         </tr>
    //     )
    // })


    return ( 
        <div>
            <form onSubmit={handleSearch}>
                <input type="search" placeholder="Search Game Name" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
                <button type="submit">Search</button>
            </form>
            <ResultTable filteredGames={filteredGames}  />
            {/* <div> */}
                {/* <table className="table">
                    <thead>
                    <tr >
                        <th>Game Name</th>
                        {/* <th>Game Detail Page</th> */}
                        {/* <th>Platform</th>
                        <th>Publisher</th>
                        <th>Year</th> */}
                    {/* </tr>
                    </thead>
                    <tbody>
                        {resultRow}
                    </tbody> */}
                {/* // </table> */} 
             {/* </div> */}
        </div>
    );
}
 
export default SearchBar;