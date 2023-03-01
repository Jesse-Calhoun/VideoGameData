import { useParams } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from "react";

const VideoGameDetailPage = ({}) => {
    const { gameId } = useParams();
    const [game, setGame] = useState(null);

    async function fetchGame(){
        const response = await axios.get(`http://localhost:8080/getById/${gameId}`)
        setGame(response.data);
    }

    useEffect(() => {
        fetchGame();
    }, [gameId])

    console.log(game)
    return (
        game && (
            <div>
                <h1>Game Title: {game.name}</h1>
                <h2>Publuisher: {game.publisher}</h2>
                <h2>Platform: {game.game_rank}</h2>
                <h2>Year: {game.year}</h2>
                <h3>Game Rank: {game.game_rank}</h3>
                <h3>Global Sales: {game.globalsales} Million</h3>
                <h3>Genre: {game.genre}</h3>
                <h4>North America Sales: {game.northamericasales} Million</h4>
                <h4>Europe Sales: {game.europesales} Million</h4>
                <h4>Japan Sales: {game.japansales} Million</h4>
                <h4>Other Sales: {game.othersales} Million</h4>
            </div>
        )
    );
};
 
export default VideoGameDetailPage;

//  "northamericasales": 9.81,
// "europesales": 7.57,
// "japansales": 4.13,
// "othersales": 1.92,
// "globalsales": 23.42