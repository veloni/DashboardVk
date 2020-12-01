import './Body-candle-graph.scss';
import '../../../../vars_and_mixins/colors.scss';
import '../../../../App.scss';
import women from './svg/women.svg';
import men from './svg/men.svg';



const BodyCandleGraph = () => {

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
            </div>
        </div>
         )
    ;
};

export default BodyCandleGraph;

