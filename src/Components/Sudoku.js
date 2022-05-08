import React from "react";
import './Section2.css'
import backarrow from './backarrow.png'
import {Link } from "react-router-dom";
import './Sudoku.css'
import su1 from './su1.png'
import su2 from './su2.png'

export default class Sudoku extends React.Component {

  constructor(props) {
    super(props);
    this.state = {animate: false};
  }
  
  componentDidMount(){
    this.setState({animate: true})
  }

  render() {
    return (
      <div className="SU"> 
         <div className= "PanelSU">
            <div className="Sudoku-BoxSU">
               <Link className="LinkSU" to="/Projects">
                  <img className="arrowSU" src={backarrow}/>
               </Link>
               <div className="Sudoku-TitleboxSU">
                  <h1 className="TitleSU">S U D O K U</h1>
                  <h1 className="TitleSU">W E B A P P</h1>
                  <h2 className="StampSU">Personal Project 2021</h2>
               </div>
               <div className="sudisplaybackground">
                  <img className="sudisplay" src={su1} />
               </div>
               <div className="supopupbackground">
                  <img className="supopup" src={su2} />
               </div>
               <div className="sudescbg">
                  <div className="sudesc">
                     <h1 className="su-desc-title">D E S C R I P T I O N</h1>
                     <p className="su-desc">Website designed to populate grids with Sudoku games so the user can
                        interactively solve the game. Includes functionality to solve the grid itself. </p>
                  </div>
               </div>
               <div className="sutechbg">
                  <div className="sutech">
                     <h1 className="su-desc-title">T E C H N O L O G I E S</h1>
                     <div className="sutech-box">React</div>
                     <div className="sutech-box">JSX</div>
                     <div className="sutech-box">CSS</div>
                     <div className="sutech-box">Java API</div>
                  </div>
               </div>
            </div>
        </div>
      </div>
    );
  }
}
