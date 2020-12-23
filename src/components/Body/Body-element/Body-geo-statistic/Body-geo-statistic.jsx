import './Body-geo-statistic.scss';
import '../../../../vars_and_mixins/colors.scss';


const BodyGeoStatistic = () => {
    const country = ["Russia", "China", "Ucraine", "USA", "Mongolia", "Other"];
    const valueCountry = [60, 15, 20, 0.26, 0.20, 0.50]

    return (
        <div className="geo-statistic">
            <div className="geo-statistic-conteiner">
                <div className="title-geo-statistic-graph">
                   <span className="main-text"> Geo</span>

                    <div className="candle-graph-box-text">
                        <span className="small-text"> Country </span>
                        <span className="secondary-small-text"> City </span>
                    </div>
                </div>
                <div className="box-container-meter">

            {    
                country.map((item,index) => (
                <div className="box-small-container-meter"> 
                    <div className="box-small-container-meter-title titlte-text"> 
                     <span className="text-country"> {item} </span>
                     <span className="value-country"> {valueCountry[index]}%</span>
                    </div>
                    <div className="meter">
                        <div className="skale-meter" style={{width: valueCountry[index]+'%'}}>
                        </div>
                    </div>
                </div>
                ))
            }
                </div>
            </div>
        </div>
         )
    ;
};

export default BodyGeoStatistic;

