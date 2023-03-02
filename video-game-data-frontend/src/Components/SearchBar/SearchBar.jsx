import React, { useState } from 'react';
import ResultTable from "../ResultTable/ResultTable";
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

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
            <h4>Search for your desired game by name.</h4>
            <form onSubmit={handleSearch}>
                <input type="search" placeholder="Search Game Name" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
                <Button variant="success" type="submit">Search</Button>
            </form>
            <ResultTable filteredGames={filteredGames}  />
        </Container>
    );
}
 
export default SearchBar;