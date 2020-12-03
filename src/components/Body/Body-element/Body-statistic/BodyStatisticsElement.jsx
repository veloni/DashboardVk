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
              {
   useEffect(() => {
    // Обновляем название докуммента, используя API браузера
    UseDataState();
  })

}

              
         
               
                
                  
                
                
          


         
         
         
         
         


          <div className="body-top-box-container-text">
              <span className="secondary-text">
                  {peopleCounter} people
              </span>
          <span className="percentage-text">
              <span className={`percentage-text-counter ${'is-showed'}`}>
                  {percentCounter}
              </span>
              <img src={isArrowUp ? arrowUp : arrowDown} className="point" alt=""/>
          </span>
          </div>
      </div>
    </div>
  );
};

export default BodyStatisticsElement;