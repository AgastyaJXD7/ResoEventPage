import './App.css';
import DummyCard2 from './Cards/DummyCard2';
import Day1_Events from './Components/Day1_Events';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    
      <div className="App">
      <Day1_Events/>
      <DummyCard2/>
    </div>
    
  );
}

export default App;
