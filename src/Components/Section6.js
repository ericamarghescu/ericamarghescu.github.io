import React from "react";
import './Section6.css';
import resume from './Resume.png';
import backarrow from './backarrow.png';
import {Link } from "react-router-dom";

export default class Section6 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {animate: false};
  }
  
  componentDidMount(){
    this.setState({animate: true})
  }

  render() {
    return (
      <div className="section6"> 
         <img className="resume" src={resume} />
         <h1 className="resumebox">R E S U M E</h1>
         <Link className="Link5" to="/Work-Experience">
               <img className="backarrow6" src={backarrow}/>
         </Link>
      </div>
    );
  }
}
