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
  } = UseDataState(people, percent);

useEffect(() => {
  
    const interval = setInterval(() => {
      changeData();
    }, 3000);

    return () => clearInterval(interval);
  }, [changeData]);

  return (
    <div className="body-top-box">
      <div className="body-top-box-container">
          <div className="body-top-box-container-text">
              <span className="main-text">
              {title}
              </span>
              <div className="box-point">
              {[...Array(3)].map(() => (
                  <img src={point} className="point" alt=""/>
              ))}
              </div>
          </div>
          <div className="body-top-box-container-text">
              <span className="secondary-text js-opacity">
                  {peopleCounter} people
              </span>
          <span className="percentage-text">
              <span className="percentage-text-counter js-opacity">
                  {percentCounter}
              </span>
              <img src={isArrowUp ? arrowUp : arrowDown} className="point js-opacity" alt=""/>
          </span>
          </div>
      </div>
    </div>
  );
};

export default BodyStatisticsElement;