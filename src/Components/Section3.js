import React from "react";
import './Section2.css'
import arrow from './arrow.png'
import {Link } from "react-router-dom";
import './Section3.css'

export default class Section3 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {animate: false};
  }
  
  componentDidMount(){
    this.setState({animate: true})
  }

  render() {
    return (
      <div className="section3"> 
         <div className= "Panel3">
            <h1 className="Projects">P R O J E C T S</h1>
            <div className="RF-Box">
               <div className="RF-Titlebox">
                  <h1 className="Title">Recipe Finder</h1>
                  <h2 className="Stamp">Technica Hackathon 2021</h2>
               </div>
               <Link className="Linkproj" to="/Recipe-Finder">
                  <img className="arrowproj" src={arrow}/>
               </Link>
            </div>
            <div className="HP-Box">
               <div className="HP-Titlebox">
                  <h1 className="Title">Honeypot Experiment</h1>
                  <h2 className="Stamp">University of Maryland</h2>
               </div>
               <Link className="Linkproj" to="/Honeypot-Experiment">
                  <img className="arrowproj" src={arrow}/>
               </Link>
            </div>
            <div className="Sudoku-Box">
               <div className="Sudoku-Titlebox">
                  <h1 className="Title">Sudoku App</h1>
                  <h2 className="Stamp">Personal Project</h2>
               </div>
               <Link className="Linkproj" to="/Sudoku">
                  <img className="arrowproj" src={arrow}/>
               </Link>
            </div>
            <Link className="Link" to="/Coursework">
            <img className="arrow3" src={arrow}/>
           </Link>
        </div>
      </div>
    );
  }
}
