import Chart from "react-google-charts";

const EvaluationChart = ({ games }) => {

    function generateDataForChart(){

        let filteredGames = games.filter(game => game.year > 2000 && game.year < 2010)

        // console.log(filteredGames)
        let platforms = filteredGames.map(game => game.platform)


        let distinctPlatforms = [...new Set(platforms)]

        // console.log(distinctPlatforms)
        let platformArrays = distinctPlatforms.map(platform => {
            
            let allGamesForThisPlatform = filteredGames.filter(game => game.platform === platform);

            // console.log(allGamesForThisPlatform)
            let sum = 0;
            for (let i = 0; i < allGamesForThisPlatform.length; i++){
                sum += allGamesForThisPlatform[i].globalsales
            }
            // console.log(sum)

            return [platform, sum, "lightgreen"]
        })
        
        const data = [
            ["Platform", "Sales", { role: "style" }],
            ...platformArrays

        ];

        return data;
    }
    return ( 
        <div>
            <h3>What was the gaming market like in the early 2000's(2000-2010)?</h3>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataForChart()}  />
        </div>
    );
}
 
export default EvaluationChart;