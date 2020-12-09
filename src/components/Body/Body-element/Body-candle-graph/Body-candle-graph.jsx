import './Body-candle-graph.scss';
import '../../../../vars_and_mixins/colors.scss';
import '../../../../App.scss';
import women from './svg/women.svg';
import men from './svg/men.svg';
import { VictoryChart } from 'victory';
import { VictoryBar } from 'victory';
import { VictoryGroup } from 'victory';
import { VictoryAxis } from 'victory';

const BodyCandleGraph = () => {

    const dataMen = [
        { x: "<18", y: 7},
        { x: "18-21", y: 8 },
        { x: "21-24", y: 15 },
        { x: "24-27", y: 25 },
        { x: "27-30", y: 30 },
        { x: "30-35", y: 27 },
        { x: "35-40", y: 60 },
        { x: ">40", y: 40 },
    ];

    const dataWomen = [
        { x: "<18", y: 15 },
        { x: "18-21", y: 8 },
        { x: "21-24", y: 30 },
        { x: "24-27", y: 50 },
        { x: "27-30", y: 74 },
        { x: "30-35", y: 80 },
        { x: "35-40", y: 62 },
        { x: ">40", y: 30 },
    ];

    const secondaryTextColor = "#979797";

    const chartTheme = {
        axis: {
            style: {

            ticks: {
                size: 15,
                stroke: secondaryTextColor
            },
            grid: {
                stroke: secondaryTextColor,
                gridComponent: 10
            },
            axis: {
                stroke: secondaryTextColor
            },
            tickLabels: {               
                fill: secondaryTextColor,
                fontSize: 22.5
                },
            Labels: {
                stroke: secondaryTextColor
                },
            },
        },
    };

    return (
        <div className="candle-graph">
            <div className="candle-graph-conteiner">
                <div className="title-candle-graph">
                    <span className="main-text"> Gender / Age </span>
                    <div className="candle-box-legend">
                    <img src={women} className="" alt=""/>
                    <span className="small-text"> women </span>
                    <img src={men} className="" alt=""/>
                    <span className="small-text"> men </span>
                    </div>
                </div>

                <VictoryChart height={ 300 } tick   domainPadding={{ x: 0 }}  width={ 1250 } theme={ chartTheme } domain={{ x: [0, 9], y:[0 , 80] }}>
                     <VictoryGroup vertical                  
                            offset={50}
                            style={{ data: { width: 50 } }}
                            colorScale={["#E786D7", "#7F7FD5"]}
                        >

                        <VictoryBar
                            cornerRadius={{ topLeft: 15, topRight: 15 }}
                            data={dataWomen}
                            
                        />
                        <VictoryBar
                            cornerRadius={{ topLeft: 15, topRight: 15 }}
                            data={dataMen}
                        />
                    </VictoryGroup>
               </VictoryChart>
            </div>
        </div>
         )
    ;
};

export default BodyCandleGraph;

