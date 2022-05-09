import React from "react";
import arrow from './arrow.png';
import {Link } from "react-router-dom";
import './Section5.css';
import backarrow from './backarrow.png';

export default class Section5 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {animate: false};
  }
  
  componentDidMount(){
    this.setState({animate: true})
  }

  render() {
    return (
      <div className="section5"> 
         <div className="Panel5">
            <Link className="Link5" to="/Coursework">
               <img className="backarrow5" src={backarrow}/>
           </Link>
            <div className="webox">
               <h1 className="wetitle">E X P E R I E N C E</h1>
               <h1 className="wetitle">W O R K</h1>
            </div>
            <div className="threeexps">
               <div className="exp">
                  <h1 className="jobname">Software Engineer</h1>
                  <p className="location">Palo Alto Networks</p>
                  <p className="jobdesc"></p>
               </div>
               <div className="exp">
                  <h1 className="jobname">Math Instructor</h1>
                  <p className="location">Mathnasium</p>
                  <p className="jobdesc">Taught a range of 10-30 students weekly, with content ranging from basic addition to complex
                     geometry proofs. Used interpersonal communication skills to bond with students and better adapt to each individual's learning
                     style.</p>
               </div>
               <div className="exp">
                  <h1 className="jobname">Computer Science Tutor</h1>
                  <p className="location">Freelance</p>
                  <p className="jobdesc">Taught computer science fundamentals in Python and Java. Developed over 20 projects for the
                     student to solve weekly to better understand concepts such as recursion, inheritance, and algorithms.</p>
               </div>
            </div>
            <div className="exp4">
               <h1 className="jobname">Biology Tutor</h1>
               <p className="location">Freelance</p>
               <p className="jobdesc">Taught Biology weekly to a student in Biology Honors. Developed a personalized lesson plan 
                  for targeting weaker concepts and practicing memorization techniques. Raised overall grade from an 82% to a 94%.</p>
            </div>
            <div className="exp5">
               <h1 className="jobname">Hostess/Waitress</h1>
               <p className="location">California Pizza Kitchen</p>
               <p className="jobdesc">Welcomed customers into the restaurant and waited on tables. Practiced communication skills
                  and adaptability due to the unpredictability of the service industry.</p>
            </div>
            <Link className="Link5" to="/Resume">
               <img className="arrow5" src={arrow}/>
           </Link>
        </div>
      </div>
    );
  }
}
