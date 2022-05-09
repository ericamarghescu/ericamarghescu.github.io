import React from "react";
import headshot from '../headshot.jpg'
import './Section1.css'
import arrow from './arrow.png'
import {Link } from "react-router-dom";

export default class Section1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {animate: false};
  }
  
  componentDidMount(){
    this.setState({animate: true})
  }

  render() {
    return (
      <div className="section1">
        <div className= "Panel1">
           <div className="Panel-Rectangle">
              <img className="Headshot" src={headshot} width="400" height="400"/>
           </div>
           <div className={this.state.animate ? "tag-slide" : ""} />
           <Link to="/Skills">
            <img className="arrow1" src={arrow}/>
           </Link>
           <h1 className={this.state.animate ? "name" : ""}> Erica Marghescu </h1>
           <h3 className={this.state.animate ? "description" : ""}>CS and Cybersecurity student at UMD</h3>
        </div>
      </div>
    );
  }
}