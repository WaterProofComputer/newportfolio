import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import TietoaMinusta from './Components/Tietoa/tietoa';
import Koulutus from './Components/Koulutus/koulutus';
import Taidot from './Components/Taidot/taidot';
import Projektit from './Components/Projektit/projektit';
import Kontaktit from './Components/Kontaktit/kontaktit';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TietoaMinusta />
      <Koulutus />
      <Taidot />
      <Projektit />
      <Footer />
    </div>
  );
}

export default App;