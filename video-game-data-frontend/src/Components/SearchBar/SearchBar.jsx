import { useState } from "react";

const SearchBar = ({ games, setFilteredGames, filteredGames }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState([])

    

    function handleSearch(event){
        event.preventDefault()
        let filteredVideoGames = games.filter((game) => game.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setFilteredGames(filteredVideoGames)
        console.log(filteredVideoGames)
        setSearchTerm('')
    }

    let resultRow = filteredGames.map((game) => {
        return (
            <div>
                <tr key={game.id}>
                  <td>{game.name}</td>
                  <td>
                    <button >
                      See Details
                    </button>
                  </td>
                </tr>
            </div>
        )
    })


    return ( 
        <div>
            <form onSubmit={handleSearch}>
                <input type="search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
                <button type="submit">Search</button>
            </form>
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Game Name</th>
                        <th>Check Game Details</th>
                        {/* <th>Platform</th>
                        <th>Publisher</th>
                        <th>Year</th> */}
                    </tr>
                    </thead>
                    <tbody>
                        {resultRow}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default SearchBar;