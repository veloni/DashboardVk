import './Body-medium-graph.scss';
import '../../../../vars_and_mixins/colors.scss';
import '../../../../App.scss';
import '../../../../vars_and_mixins/colors.scss';
import iconFollower from './svg/icon-follower.svg';
import iconTotal from './svg/icon-total.svg';
import smallArrowDown from './svg/small-arrow-down.svg';
import * as V from 'victory';
import { VictoryLine } from 'victory';
import { VictoryChart } from 'victory';
import { VictoryScatter } from 'victory';

const BodyMediumGraph = () => {

    const data = [
        { x: 0, y: 1 },
        { x: 1, y: 4 },
        { x: 2, y: 2 },
        { x: 3, y: 6 },
        { x: 4, y: 7 },
        { x: 5, y: 2 },
        { x: 6, y: 3 },
        { x: 7, y: 5 },
        { x: 8, y: 9 },
        { x: 9,y: 2 },

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
        <div className="lineal-graph">
            <div className="lineal-graph-continer">
                <div className="title-graph">
                    <span className="main-text"> Audiende reach</span>
                    <div className="box-date">
                        <span className="date"> 31/01/2020 – 06/02/2020 </span>
                    <img src={smallArrowDown} className="" alt=""/>
                    </div>
                   
                    <div className="box-legend">
                        <img src={iconTotal} className="" alt=""/>
                        <span className="small-text"> Total </span>
                        <img src={iconFollower} className="" alt=""/>
                        <span className="small-text"> Follower </span>
                    </div>
                </div>
                <VictoryChart height={ 300 }  width={ 1250 } theme={ chartTheme } domain={{ x: [0, 9.5] , y:[0, 12] }}>
                   <VictoryLine 
                        interpolation="natural"
                        style={{data: { stroke: "#7F7FD5", strokeWidth: 4 } }}
                        data={data}
                   />
                    <VictoryScatter
                        style={{ data: { fill: "#E786D7" } }}
                        size={6}
                        data={data}
                    />
               </VictoryChart>
            </div>
        </div>
        
         )
    ;
};

export default BodyMediumGraph;
