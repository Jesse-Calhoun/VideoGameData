import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameSalesChart from '../../Components/GameSalesChart/GameSalesChart';
import SearchBar from '../../Components/SearchBar/SearchBar';
import EvaluationChart from '../../Components/EvaluationChart/EvaluationChart';
import './SearchPage.css'


const SearchPage = () => {
    const [games, setGames] = useState([])
    const [filteredGames, setFilteredGames] = useState([])

    useEffect(() => {
      getAllGames()
    }, [])
  
    async function getAllGames(){
      try{
        const response = await axios.get("http://localhost:8080/all")
        setGames(response.data);
        // console.log(games);
      } catch(ex){
        console.log(`ERROR in getAllGames EXCEPTION: ${ex}`)
      }
    }
    return ( 
        <div id='home' className='background' >
            <GameSalesChart games={games} />
            <EvaluationChart games={games}/>
            <SearchBar games={games} setFilteredGames={setFilteredGames} filteredGames={filteredGames} />
        </div>
     );
}
 
export default SearchPage;