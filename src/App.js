import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar.js';
import Homepage from './Components/Homepage.js'
import Section2 from './Components/Section2.js';
import Section3 from './Components/Section3.js';
import RF from './Components/RF.js';
import HP from './Components/HP.js';
import Sudoku from './Components/Sudoku.js';
import Section4 from './Components/Section4.js';
import Section5 from './Components/Section5.js';
import Section6 from './Components/Section6.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [width, setWindowWidth] = useState(0);

  useEffect( () => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const responsive = {
    showIcons: width > 1023
  }


  return (
    <div className="app">
      <Router>
        <Navbar showIcons={responsive.showIcons}/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/Skills' element={<Section2/>} />
          <Route path='/Projects' element={<Section3/>} />
          <Route path='/Recipe-Finder' element={<RF/>} />
          <Route path='/Honeypot-Experiment' element={<HP/>} />
          <Route path='/Sudoku' element={<Sudoku />} />
          <Route path='/Coursework' element={<Section4 />} />
          <Route path='/Work-Experience' element={<Section5 />} />
          <Route path='/Resume' element={<Section6 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;