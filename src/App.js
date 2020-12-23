import { useEffect, useState } from 'react';
import './App.scss';
import './vars_and_mixins/media.scss';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Body from './components/Body/Body';

const App = () => {

  const [isWhite,setIsWhite] = useState(false);
  useEffect(() => {
  });


  return (
    <section className= {`App ${isWhite ? 'white-theme' : 'black-theme'}`}>
      <Header/>
      <Aside
        switchTheme={setIsWhite}
      />
      <Body/>
    </section>
     
  );
}
export default App;
