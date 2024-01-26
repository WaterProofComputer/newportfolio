import React from 'react';
import './App.css';
import TietoaMinusta from './Components/Tietoa/tietoa';
import Koulutus from './Components/Koulutus/koulutus';
import Taidot from './Components/Taidot/taidot';
import Projektit from './Components/Projektit/projektit';
import Kontaktit from './Components/Kontaktit/kontaktit';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="App">
      <TietoaMinusta />
      <Koulutus />
      <Taidot />
      <Projektit />
      <Kontaktit />
      <Footer />
    </div>
  );
}

export default App;