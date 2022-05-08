import React from 'react';
import Navbar from './Components/Navbar.js';
import Homepage from './Components/Homepage.js'
import Section1 from './Components/Section1.js';
import Section2 from './Components/Section2.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


class App extends React.Component {

  render () {
    return (
      <div className="app">
        <Navbar/>
        <Router>
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/Section2' element={<Section2/>} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;