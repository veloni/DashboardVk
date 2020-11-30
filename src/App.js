import { useEffect } from 'react';
import './App.scss';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Body from './components/Body/Body';


const App = () => {

  useEffect(() => {
    console.log();
  });


  return (
    <section className="App">
      <Header/>
      <Aside/>
      <Body/>
    </section>
  );
}

export default App;
