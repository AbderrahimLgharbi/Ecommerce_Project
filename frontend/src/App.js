import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App '>
      <Navbar />
      <Menu />
    </div>

  );
}

export default App;
