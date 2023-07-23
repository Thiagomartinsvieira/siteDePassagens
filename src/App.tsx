import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Destinations from './components/Destinations';
import Benefits from './components/Benefits';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Home />
        <Destinations />
        <Benefits />
        <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
