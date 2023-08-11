import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Participate from './Components/Participate/Participate';
import Accordion from './Components/accordion/Accordion';
import Footer from './Components/Footer/Footer';
const App = ()=> {
  return (
    <> 
    <img src='/olympus_anim.gif' className='header-bg'/>  
<Header/>
<Body/>
<Participate/>
<Accordion/>
<Footer/>
    </>
  );
}

export default App;
