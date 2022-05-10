import React from "react";
import arrow from './arrow.png';
import backarrow from './backarrow.png';
import {Link } from "react-router-dom";
import './RF.css';
import './Section3BG.css';
import rfdisplay from './rfdisplay.png';
import rfpopup from './rfpopup.png';

export default class RF extends React.Component {

  constructor(props) {
    super(props);
    this.state = {animate: false};
  }
  
  componentDidMount(){
    this.setState({animate: true})
  }

  render() {
    return (
      <div className="RF"> 
         <div className= "PanelRF">
         <Link className="Linkbg" to="/Skills">
               <img className="backarrow3bg" src={backarrow}/>
           </Link>
            <h1 className="Projectsbg">P R O J E C T S</h1>
            <div className="RF-Boxbg">
               <div className="RF-Titleboxbg">
                  <h1 className="Titlebg">Recipe Finder</h1>
                  <h2 className="Stampbg">Technica Hackathon 2021</h2>
               </div>
               <Link className="Linkprojbg" to="/Recipe-Finder">
                  <img className="arrowprojbg" src={arrow}/>
               </Link>
            </div>
            <div className="HP-Boxbg">
               <div className="HP-Titleboxbg">
                  <h1 className="Titlebg">Honeypot Experiment</h1>
                  <h2 className="Stampbg">University of Maryland</h2>
               </div>
               <Link className="Linkprojbg" to="/Honeypot-Experiment">
                  <img className="arrowprojbg" src={arrow}/>
               </Link>
            </div>
            <div className="Sudoku-Boxbg">
               <div className="Sudoku-Titleboxbg">
                  <h1 className="Titlebg">Sudoku App</h1>
                  <h2 className="Stampbg">Personal Project</h2>
               </div>
               <Link className="Linkprojbg" to="/Sudoku">
                  <img className="arrowprojbg" src={arrow}/>
               </Link>
            </div>
            <Link className="Linkbg" to="/Coursework">
               <img className="arrow3bg" src={arrow}/>
           </Link>
            <div className="Panel-layerRF">
               <div className="RF-BoxRF">
                  <Link className="LinkRF" to="/Projects">
                     <img className="arrowRF" src={backarrow}/>
                  </Link>
                  <div className="RF-TitleboxRF">
                     <h1 className="TitleRF">R E C I P E</h1>
                     <h1 className="TitleRF">F I N D E R</h1>
                     <h2 className="StampRF">Technica Hackathon 2021</h2>
                  </div>
                  <div className="rfdisplaybackground">
                     <img className="rfdisplay" src={rfdisplay} />
                  </div>
                  <div className="rfpopupbackground">
                     <img className="rfpopup" src={rfpopup} />
                  </div>
                  <div className="rfdescbg">
                     <div className="rfdesc">
                        <h1 className="desc-title">D E S C R I P T I O N</h1>
                        <p className="award">Winner of M&#38;T Bank's Best Hack for Influencing Human Behavior at Home</p>
                        <p className="desc">Website designed to take user's dietary preferences as input and generate either
                           a list of possible recipes of interest, or a meal plan for the week.</p>
                     </div>
                  </div>
                  <div className="rftechbg">
                     <div className="rftech">
                        <h1 className="desc-title">T E C H N O L O G I E S</h1>
                        <div className="tech-box">React</div>
                        <div className="tech-box">JSX</div>
                        <div className="tech-box">CSS</div>
                        <div className="tech-box">Spoonacular API</div>
                     </div>
                  </div>
               </div>
            </div>
        </div>
      </div>
    );
  }
}
