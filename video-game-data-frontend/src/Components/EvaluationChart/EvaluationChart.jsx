import Chart from "react-google-charts";
import React from 'react';
import Container from 'react-bootstrap/Container'

const EvaluationChart = ({ games }) => {

    function generateDataForChart(){

        let filteredGames = games.filter(game => game.year > 2000 && game.year < 2010)

        let platforms = filteredGames.map(game => game.platform)


        let distinctPlatforms = [...new Set(platforms)]

        let platformArrays = distinctPlatforms.map(platform => {
            
            let allGamesForThisPlatform = filteredGames.filter(game => game.platform === platform);

            let sum = 0;
            for (let i = 0; i < allGamesForThisPlatform.length; i++){
                sum += allGamesForThisPlatform[i].globalsales
            }

            return [platform, sum, "blue"]
        })
        
        const data = [
            ["Platform", "Sales", { role: "style" }],
            ...platformArrays

        ];

        return data;
    }
    return ( 
        <Container>
            <h2>What was the gaming market for each platform's , to have a game released in the early 2000's(2000-2010), global sales?(In Millions)</h2>
            {/* Has more platforms many with few games to their nam, showing the ending of some platforms. */}
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataForChart()}  />
        </Container>
    );
}
 
export default EvaluationChart;