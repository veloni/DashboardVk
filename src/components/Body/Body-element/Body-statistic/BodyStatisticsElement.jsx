import { useEffect } from 'react';
import point from '../../../../svg/point.svg';
import arrowUp from './svg/arrow-up.svg';
import arrowDown from './svg/arrow-down.svg';
import UseDataState from './UseDataState';

const BodyStatisticsElement = ({
  data,
}) => {

  const { title, people, percent } = data;

  const {
    isArrowUp,
    peopleCounter,
    percentCounter,
    changeData,
    isStatsShow,
  } = UseDataState(people, percent);

  useEffect(() => {
    const interval = setInterval(() => {
      changeData();
    }, 2000);
    
    return () => clearInterval(interval);
    }, [changeData]
  );

  return (
    <div className="body-top-box">
      <div className="body-top-box-container">
        <div className="body-top-box-container-text">
            <span className="main-text">
            {title}
            </span>
            <div className="box-point">
              {[...Array(3)].map((key) => (
                <img 
                  key={key}
                  src={point} 
                  className="point" 
                  alt=""/>
              ))}
            </div>
        </div>
        <div
          className={`body-top-box-container-text ${isStatsShow ? 'is-hide' : 'is-show'}`}
        >
          <span className="secondary-text">
            {peopleCounter} people
          </span>
          <span className="percentage-text">
            <span className="percentage-text-counter">
              {percentCounter}
            </span>
            <img 
              src={isArrowUp ? arrowUp : arrowDown} 
              className="point" 
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BodyStatisticsElement;