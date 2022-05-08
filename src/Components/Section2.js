import React from "react";
import './Section2.css'
import arrow from './arrow.png'
import {Link } from "react-router-dom";
import Navbar from './Navbar.js'
export default class Section2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {animate: false};
  }
  
  componentDidMount(){
    this.setState({animate: true})
  }

  render() {
    return (
      <div className="section2"> 
         <div className= "Panel2">
            <h1 className={this.state.animate ? "Skills-Box" : ""}>S K I L L S</h1>
            <div className="Language-Boxes">
               <div className={this.state.animate ? "Prof-Langs" : ""}>
                  <h1 className="Prof-Langs-Title">MOST PROFICIENT LANGUAGES</h1>
                  <div className="prolangs">
                     <h3 className="Lang">Java</h3>
                     <h3 className="Lang">JavaScript</h3>
                     <h3 className="Lang">C</h3>
                  </div>
               </div>
               <div className={this.state.animate ? "Other-Langs" : ""}>
                  <h1 className="Other-Langs-Title">OTHER LANGUAGES</h1>
                  <div className="otherlangs">
                     <h3 className="Lang">HTML/CSS</h3>
                     <h3 className="Lang">UNIX</h3>
                     <h3 className="Lang">Ruby</h3>
                     <h3 className="Lang">OCaml</h3>
                     <h3 className="Lang">R</h3>
                     <h3 className="Lang">Matlab</h3>
                  </div>
               </div>
            </div>
            <Link to="/Section3">
            <img className="arrow2" src={arrow}/>
           </Link>
        </div>
      </div>
    );
  }
}
