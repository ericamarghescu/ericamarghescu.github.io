import React, { Component } from "react";
import './Navbar.css';
import github from './github.png';
import linkedin from './linkedin1.png';
import {Link } from "react-router-dom";
import headshot from '../headshot.jpg';
import menu from './menu.png';

export default function Navbar({ showIcons }) {
   const showNav = {
      display: showIcons ? 'flex' : 'none'
   }

   const showIcon = {
      display: showIcons ? 'none' : 'flex',
   }

   const closeGap = {
      gap: showIcons ? 50 : 10
   }

   return (
      <div className="navbar" style={closeGap}>
         <Link to="/">
            <img className="headshotmini" src={headshot} style={showNav}/>
         </Link>
         <a href="https://github.com/ericamarghescu">
            <img className="github-button" src={github} style={showNav}/>
         </a>
         <a href="https://www.linkedin.com/in/ericamarghescu/">
            <img className="linkedin-button" src={linkedin} style={showNav}/>
         </a>
         <h2 className="email" style={showNav}>erica.marghescu@gmail.com</h2>
         <img className="menu" src={menu} style={showIcon}/>
      </div>
   );
}