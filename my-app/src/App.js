import logo from './logo.svg';
import './App.css';
import Projektit from './Components/Projektit/projektit';
import Header from './Components/Header/header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Projektit></Projektit>
    </div>
  );
}

export default App;
