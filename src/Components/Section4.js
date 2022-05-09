import React from "react";
import arrow from './arrow.png';
import {Link } from "react-router-dom";
import './Section4.css';
import backarrow from './backarrow.png';

export default class Section4 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {animate: false};
  }
  
  componentDidMount(){
    this.setState({animate: true})
  }

  render() {
    return (
      <div className="section4"> 
         <div className= "Panel4">
            <Link className="Link4" to='/Projects'>
               <img className="backarrow4" src={backarrow}/>
           </Link>
            <h1 className="cwbox">C O U R S E W O R K</h1>
            <div className="courses">
               <h2 className="sem4">S P R I N G 2 0 2 2</h2>
               <p className="course4">Organization of Programming Languages</p>
               <p className="course4">Algorithms</p>
               <p className="course4">Intro to Matlab</p>
               <p className="course4">Cybersecurity Data Analysis</p>
               <p className="course4">Cybersecurity Current Issues</p>  
            </div>
            <div className="courses">
               <h2 className="sem3">F A L L 2 0 2 1</h2>    
               <p className="course3">Intro to Computer Systems</p>
               <p className="course3">Linear Algebra</p>
               <p className="course3">Statistics</p> 
               <p className="course3">Applied Cybersecurity Foundations II</p>     
            </div>
            <div className="courses">
               <h2 className="sem2">S P R I N G 2 0 2 1</h2> 
               <p className="course2">Discrete Structures</p>
               <p className="course2">Economic Aspects of Cybersecurity</p>
               <p className="course2">Applied Cybersecurity Foundations I</p>          
            </div>
            <div className="courses">
               <h2 className="sem1">F A L L 2 0 2 0</h2>  
               <p className="course1">Object-Oriented Programming II</p>
               <p className="course1">Cybersecurity Policy</p>
               <p className="course1">Intro to Cybersecurity</p>       
            </div>
            <Link className="Link4" to='/Work-Experience'>
               <img className="arrow4" src={arrow}/>
           </Link>
        </div>
      </div>
    );
  }
}
