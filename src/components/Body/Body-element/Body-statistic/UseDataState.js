import { useState } from 'react';

const UseDataState = (
  people,
  percent,
) => {
  const [isArrowUp, setIsArrowUp] = useState(true);
  const [peopleCounter, setPeopleCounter] = useState(people);
  const [percentCounter, setPercentCounter] = useState(percent);

  const changeData = () => {
    setIsArrowUp(!isArrowUp);
    setPeopleCounter(percentCounter + 34);
    setPercentCounter(percentCounter + 52);
  };

  return {
    isArrowUp,
    peopleCounter,
    percentCounter,
    changeData,
  }
};

export default UseDataState;
