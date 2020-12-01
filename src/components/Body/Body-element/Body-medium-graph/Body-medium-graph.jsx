import './Body-medium-graph.scss';
import '../../../../vars_and_mixins/colors.scss';
import '../../../../App.scss';
import iconFollower from './svg/icon-follower.svg';
import iconTotal from './svg/icon-total.svg';
import smallArrowDown from './svg/small-arrow-down.svg';

const BodyMediumGraph = () => {

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
            </div>
        </div>
         )
    ;
};

export default BodyMediumGraph;

