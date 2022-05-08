import React, { Component } from "react";
import './Navbar.css'
import github from './github.png'
import linkedin from './linkedin1.png'
import {Link } from "react-router-dom";
import headshot from '../headshot.jpg';

export default class Navbar extends React.Component {
   render() {
      return (
         <div className="navbar">
            <Link to="/">
               <img className="headshotmini" src={headshot}/>
           </Link>
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