import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import BusinessSection from './BusinessSection.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import SpaceBackground from './Components/S';

function App() {
  return (
    <Router>
      <div className="App">
        <SpaceBackground />
        <Navbar />
        <Home />
        <div><BusinessSection /></div>
      </div>
    </Router>
  );
}

export default App;
