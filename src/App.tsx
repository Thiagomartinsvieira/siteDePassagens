import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
