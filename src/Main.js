import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Portfolio Alexis UWIMANA </h1>
          <ul className="header">
            <li><NavLink exact to="/home">Home</NavLink></li>
            <li><NavLink exact to="/project">Project</NavLink></li>
            <li><NavLink exact to="/contact">Contact</NavLink></li>
            
          </ul>
          <div className="content">
            <Route path="/home" component={Home}/>
            <Route path="/project" component={Project}/>
            <Route path="/contact" component={Contact}/>  
            
          </div>
        </div>
    </HashRouter>
    );
  }
}
 
export default Main;