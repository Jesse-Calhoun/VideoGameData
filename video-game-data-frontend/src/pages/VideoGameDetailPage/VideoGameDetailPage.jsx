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
            </div>
        )
    );
};
 
export default VideoGameDetailPage;