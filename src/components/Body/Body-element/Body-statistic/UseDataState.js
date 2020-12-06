import { useEffect, useState } from 'react';

const UseDataState = (
  people,
  percent,
) => {

  const [isArrowUp, setIsArrowUp] = useState(true);
  const [peopleCounter, setPeopleCounter] = useState(people);
  const [percentCounter, setPercentCounter] = useState(percent);
  let saveValuePeople = peopleCounter;

  const changeData = () => {

    const randomPeopleGenerate = () => {
      return ((Math.random() < 0.5) ? -1 : 1) * Math.floor(Math.random() * Math.floor(100));
     } 

     let randomPeople = randomPeopleGenerate();

     const comparisonPeople = () => {
      return ((saveValuePeople <= saveValuePeople + randomPeople ? -1 : 1));
    };

    const differencePeople = ((((saveValuePeople - randomPeople) * (comparisonPeople())/saveValuePeople)).toFixed(2));

    setPeopleCounter(peopleCounter + randomPeople);
    setPercentCounter(differencePeople);
    setIsArrowUp((comparisonPeople() < 0 ? false : true));
  
    saveValuePeople = saveValuePeople + randomPeople;

  };

  return {
    isArrowUp,
    peopleCounter,
    percentCounter,
    changeData,
  }
}

export default UseDataState;

//{ useEffect(() => setInterval(changeData(),10000))}

