import './Body-medium-graph.scss';
import '../../../../vars_and_mixins/colors.scss';
import '../../../../App.scss';
import iconFollower from './svg/icon-follower.svg';
import iconTotal from './svg/icon-total.svg';
import smallArrowDown from './svg/small-arrow-down.svg';
import * as V from 'victory';
import { VictoryBar } from 'victory';

const BodyMediumGraph = () => {
    const data = [
        {quarter: 1, earnings: 13000},
        {quarter: 2, earnings: 16500},
        {quarter: 3, earnings: 14250},
        {quarter: 4, earnings: 19000},
    ];

    return (
        <div className="lineal-graph">
            <div className="lineal-graph-continer">
                <div className="title-graph">
                    <span className="main-text"> Audiende reach</span>
                    <div className="box-date">
                        <span className="date"> 31/01/2020 – 06/02/2020 </span>
                    <img src={smallArrowDown} className="" alt=""/>
                    <div style={{ paddingTop: '130px'}}>
                    <VictoryBar
                        data={data}
                        // data accessor for x values
                        x="quarter"
                        // data accessor for y values
                        y="earnings"
                    />
                    </div>
                    </div>
                    <div className="box-legend">
                        <img src={iconTotal} className="" alt=""/>
                        <span className="small-text"> Total </span>
                        <img src={iconFollower} className="" alt=""/>
                        <span className="small-text"> Follower </span>
                    </div>
                </div>
            </div>
        </div>
         )
    ;
};

export default BodyMediumGraph;
