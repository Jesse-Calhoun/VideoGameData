import { useParams } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container'
import './VideoGameDetailPage.css'

const VideoGameDetailPage = ({}) => {
    const { gameId } = useParams();
    const [game, setGame] = useState(null);

    async function fetchGame(){
        const response = await axios.get(`http://localhost:8080/getById/${gameId}`)
        setGame(response.data);
    }

    useEffect(() => {
        fetchGame();
        window.scrollTo(0,0)
    }, [gameId])

    console.log(game)
    return (
        game && (
            <div className="centered">
                <Container>
                        <h1 className="game-title">Game Title: {game.name}</h1>
                    <Container className="border-box centered">
                        <h1>Publisher: {game.publisher}</h1>
                        <h1>Platform: {game.platform}</h1>
                        <h2>Year: {game.year}</h2>
                        <h2>Game Rank: {game.game_rank}</h2>
                        <h2>Global Sales: {game.globalsales} Million</h2>
                        <h3>Genre: {game.genre}</h3>
                        <h3>North America Sales: {game.northamericasales} Million</h3>
                        <h3>Europe Sales: {game.europesales} Million</h3>
                        <h3>Japan Sales: {game.japansales} Million</h3>
                        <h3>Other Sales: {game.othersales} Million</h3>
                    </Container>
                </Container>
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