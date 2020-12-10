import './Body-geo-statistic.scss';
import '../../../../vars_and_mixins/colors.scss';
import '../../../../App.scss';


const BodyGeoStatistic = () => {
    const country = ["Russia", "China", "Ucraine", "USA", "Mongolia", "Other"];
    const valueCountry=[60, 10, 20, 0.26, 0.20, 0.50]

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
                <div className="box-container-meter">

            {    
                country.map((item,index) => (
                <div className="box-small-container-meter"> 
                    <div className="box-small-container-meter-title titlte-text"> 
                     <span> {item} </span>
                     <span> {valueCountry[index]}%</span>
                    </div>
                    <meter className="meter" value={valueCountry[index]} max="100" low="10" high="60"></meter>
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

