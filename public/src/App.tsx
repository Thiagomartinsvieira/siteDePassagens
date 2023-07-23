import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Destinations from './components/Destinations';
import Benefits from './components/Benefits';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Home />
        <Destinations />
        <Benefits />
      </BrowserRouter>
    </div>
  );
}

export default App;
