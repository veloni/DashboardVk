import point from '../../../../svg/point.svg';
import './Body-statistic.scss';
import arrowUp from './svg/arrow-up.svg';
import arrowDown from './svg/arrow-down.svg';

const BodyStatistic = () => {
    const points = [1,1,1];
    const titleBox = ["Friends", "Unique visitors", "Folowers"];
    const dataPeople = [1,2,3];
    const dataPeopleProcent = [1,2,3];
    return (
        titleBox.map((item,index) => (
        <div className="body-top-box">
            <div className="body-top-box-container">
                <div className="body-top-box-container-text"> 
                    <span className="main-text">
                    {item}
                    </span>
                    <div className="box-point">
                    {points.map(() => (
                        <img src={point} className="point" alt=""/>
                        ))}
                    </div>
                </div>
                <div className="body-top-box-container-text"> 
                    <span className="secondary-text">
                        {dataPeople[index]}
                    </span>
                   <span className="percentage-text">
                        <img src={arrowUp} className="point" alt=""/>
                   </span>
                </div>
            </div>
        </div>
          ))
    );
};

export default BodyStatistic;

