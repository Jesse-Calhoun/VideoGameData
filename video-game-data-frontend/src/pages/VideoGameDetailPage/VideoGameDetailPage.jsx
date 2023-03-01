import { useParams } from "react-router";
import axios from 'axios'
import { useState, useEffect } from "react";

const VideoGameDetailPage = () => {
    const [game, setGame] = useState(null)
    const { gameId } = useParams

    async function fetchGame(){
        const response = await axios.get(`http://localhost:8080/getById/${gameId}`)
        setGame(response.data)
    }

    useEffect(() => {
        fetchGame();
    }, [gameId])


    return (
        <div>
            <h1>{game.name}</h1>
        </div>
    );
}
 
export default VideoGameDetailPage;