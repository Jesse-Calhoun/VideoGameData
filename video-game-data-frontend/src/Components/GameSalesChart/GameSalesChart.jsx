// import { useEffect, useState } from "react";
import Chart from "react-google-charts";


const GameSalesChart = ({games}) => {
    
    
    function generateDataFormChart(){

        console.log(games)

        // Filter the video game by year
        let filteredGames = games.filter(game => game.year >= 2013)

        console.log(filteredGames)

        let platforms = filteredGames.map(game => game.platform)

        console.log('Platforms:', platforms)

        // uniq = [...new Set(array)]

        let distinctPlatforms = [...new Set(platforms)]

        console.log('Distinct Platforms:', distinctPlatforms)

        // ["PS3", 10, "silver"]

        let platformArrays = distinctPlatforms.map(platform => {
            
            let allGamesForThisPlatform = filteredGames.filter(game => game.platform == platform);
            console.log(allGamesForThisPlatform)

            let sum = 0;
            for (let i = 0; i < allGamesForThisPlatform.length; i++){
                sum += allGamesForThisPlatform[i].globalsales
                // if (allGamesForPlatform[i].platform == platform)
            }
            // let globalSalesForPlatform = allGamesForPlatform.map(game => sum += game.globalsales)
            // console.log(globalSalesForPlatform)

            return [platform, sum, "silver"]
        })



        const data = [
            ["Platform", "Sales", { role: "style" }],
            ...platformArrays

        ];
        // ["Copper", 8.94, "#b87333"], // RGB value
        // ["Silver", 10.49, "silver"], // English color name
        // ["Gold", 19.3, "gold"],
        // ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
        return data;
    }

    let vAxis = {scaletype: 'log'}
    

    // const [chartData, setChartData] = useState([]);

    // useEffect(() => {
    //     let tempChartData = games.map(game => {
    //         return [game.platform, game.globalsales];
    //     });
    //     setChartData(tempChartData);
    // }, [games])
    return (
        <div>
            <h1>Platforms By Global Sales in Millions</h1>
            <Chart chartType="ColumnChart" width="100%" height="1000px" data={generateDataFormChart()}  />
        </div>
        // <Chart
        // chartType="ColumnChart"
        // data={[['Platforms', 'Globalsales'], ...chartData]}
        // width="100%"
        // height="500px"
        // options={{legend: {position: 'top'}}}
        // />
    );
}
 
export default GameSalesChart;