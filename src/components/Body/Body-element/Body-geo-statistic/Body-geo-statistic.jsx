import './Body-geo-statistic.scss';
import '../../../../vars_and_mixins/colors.scss';
import '../../../../App.scss';


const BodyGeoStatistic = () => {
    const country = ["Russia", "China", "Ucraine", "USA", "Mongolia", "Other"];
    const valueCountry=[94, 0.2, 0.13, 0.26, 0.20, 0.50]

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

              {   country.map(() => {
     
    })
 
  }

              
                    
                
                </div>
            </div>
        </div>
         )
    ;
};

export default BodyGeoStatistic;

