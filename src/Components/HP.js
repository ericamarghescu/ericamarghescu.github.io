import React from "react";
import arrow from './arrow.png'
import backarrow from './backarrow.png'
import {Link } from "react-router-dom";
import './HP.css';
import './Section3BG.css'
import hp1 from './hp1.png'
import hp2 from './hp2.png'

export default class HP extends React.Component {

  constructor(props) {
    super(props);
    this.state = {animate: false};
  }
  
  componentDidMount(){
    this.setState({animate: true})
  }

  render() {
    return (
      <div className="HP"> 
         <div className= "PanelHP">
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
            <div className="Panel-layerHP">
               <div className="HP-BoxHP">
                  <Link className="LinkHP" to="/Projects">
                     <img className="arrowHP" src={backarrow}/>
                  </Link>
                  <div className="HP-TitleboxHP">
                     <h1 className="TitleHP">H O N E Y P O T</h1>
                     <h1 className="TitleHP">E X P E R I M E N T</h1>
                     <h2 className="StampHP">University of Maryland 2021</h2>
                  </div>
                  <div className="hpdisplaybackground">
                     <img className="hpdisplay" src={hp1} />
                  </div>
                  <div className="hppopupbackground">
                     <img className="hppopup" src={hp2} />
                  </div>
                  <div className="hpdescbg">
                     <div className="hpdesc">
                        <h1 className="hp-desc-title">D E S C R I P T I O N</h1>
                        <p className="hp-desc">Experiment designed to determine how the delay in ssh login time can impact
                           an attacker's behavior. Multiple test honeypots were created inside containers with tools installed such as 
                           MITM and SnoopyLogger to monitor attacker behavior.</p>
                     </div>
                  </div>
                  <div className="hptechbg">
                     <div className="hptech">
                        <h1 className="hp-desc-title">T E C H N O L O G I E S</h1>
                        <div className="hptech-box">Bash Scripts</div>
                        <div className="hptech-box">Python</div>
                        <div className="hptech-box">MITM</div>
                        <div className="hptech-box">SnoopyLogger</div>
                     </div>
                  </div>
               </div>
            </div>
        </div>
      </div>
    );
  }
}
