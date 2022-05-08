import React, { Component } from "react";
import './Navbar.css'
import github from './github.png'
import linkedin from './linkedin1.png'

export default class Navbar extends React.Component {
   render() {
      return (
         <div className="navbar">
            <a href="https://github.com/ericamarghescu">
               <img className="github-button" src={github} />
            </a>
            <a href="https://www.linkedin.com/in/ericamarghescu/">
               <img className="linkedin-button" src={linkedin} />
            </a>
            <h2 className="email">erica.marghescu@gmail.com</h2>
         </div>
      );
   }
}