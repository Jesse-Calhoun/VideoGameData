import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameSalesChart from './Components/GameSalesChart/GameSalesChart';

function App() {


  const [games, setGames] = useState([{}])

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
    <div className="App">
      {/* <h3>Hello World!</h3> */}
      <GameSalesChart games={games}/>
    </div>
  );
}

export default App;
