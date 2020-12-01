import './Body-geo-statistic.scss';
import '../../../../vars_and_mixins/colors.scss';
import '../../../../App.scss';


const BodyGeoStatistic = () => {

    return (
        <div className="geo-statistic">
            <div className="geo-statistic-conteiner">
                <div className="title-geo-statistic-graph">
                   <span className="main-text"> Geo</span>

                    <div className="">
                        <span className="small-text"> Country </span>
                        <span className="secondary-small-text"> City </span>
                    </div>
                </div>
            </div>
        </div>
         )
    ;
};

export default BodyGeoStatistic;

