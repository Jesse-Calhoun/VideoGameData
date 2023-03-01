// import { useEffect, useState } from "react";
import Chart from "react-google-charts";


const GameSalesChart = ({games}) => {
    
    
    function generateDataFormChart(){

        let filteredGames = games.filter(game => game.year >= 2013)


        let platforms = filteredGames.map(game => game.platform)


        let distinctPlatforms = [...new Set(platforms)]

        let platformArrays = distinctPlatforms.map(platform => {
            
            let allGamesForThisPlatform = filteredGames.filter(game => game.platform === platform);

            let sum = 0;
            for (let i = 0; i < allGamesForThisPlatform.length; i++){
                sum += allGamesForThisPlatform[i].globalsales
            }
            return [platform, sum, "green"]
        })

        const data = [
            ["Platform", "Sales", { role: "style" }],
            ...platformArrays

        ];
        return data;
    }


    return (
        <div>
            <h3>What is the gaming market for each platform's, having released a game since 2013, global sales?(In Millions)</h3>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataFormChart()}  />
        </div>
    );
}
 
export default GameSalesChart;