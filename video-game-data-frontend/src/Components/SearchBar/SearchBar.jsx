import React, { useState } from 'react';
import ResultTable from "../ResultTable/ResultTable";
import Container from 'react-bootstrap/Container'

const SearchBar = ({ games, setFilteredGames, filteredGames }) => {
    const [searchTerm, setSearchTerm] = useState('')
    // const [results, setResults] = useState([])
    // const [selectedGame, setSelectedGame] = useState({})
    

    function handleSearch(event){
        event.preventDefault()
        let filteredVideoGames = games.filter((game) => game.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setFilteredGames(filteredVideoGames)
        console.log(filteredVideoGames)
        setSearchTerm('')
    }



    return ( 
        <Container fluid>
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
        </Container>
    );
}
 
export default SearchBar;