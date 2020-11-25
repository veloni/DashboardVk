import { useEffect } from 'react';
import './App.scss';
import Aside from './components/Aside/Aside';

const App = () => {

  useEffect(() => {
    console.log();
  });


  return (
    <section className="App">
      <header className="App-header">
        
      </header>
      <Aside/>
     
    </section>
  );
}

export default App;
