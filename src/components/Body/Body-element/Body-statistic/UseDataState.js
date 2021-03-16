import { useState } from 'react';

const UseDataState = (
  people,
  percent,
) => {

  const [isArrowUp, setIsArrowUp] = useState(true);
  const [peopleCounter, setPeopleCounter] = useState(people);
  const [percentCounter, setPercentCounter] = useState(percent);
  const [saveValuePeople, setSaveValuePeople] = useState(peopleCounter);
  const [isStatsShow, setIsStatsShow] = useState(true);
  
  const randomPeopleGenerate = () => {
    return ((Math.random() < 0.5) ? -1 : 1) * Math.floor(Math.random() * Math.floor(50));
  }

  const randomPeople = randomPeopleGenerate();

  const comparisonPeople = () => {
    return ((saveValuePeople <= saveValuePeople + randomPeople ? -1 : 1));
  };

  const calculationPercents = () =>{
    return (((100 * randomPeople / saveValuePeople)).toFixed(2));
  };

  const changeData = () => {
    setIsStatsShow(!isStatsShow);

    const overValuePeople = peopleCounter + randomPeople;
    const overSaveValuePeople = saveValuePeople + randomPeople;

    setSaveValuePeople(overSaveValuePeople >= 0 ? overSaveValuePeople : 10);

    if (isStatsShow) {
      setPeopleCounter(overValuePeople >= 0 ? overValuePeople : 10);
      setPercentCounter(overSaveValuePeople >= 0 ? calculationPercents() : 0);
      setIsArrowUp(comparisonPeople() < 0);
    }
  };
  
  return {
    isArrowUp,
    peopleCounter,
    percentCounter,
    changeData,
    isStatsShow,
  }
}

export default UseDataState;