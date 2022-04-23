import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreatePlayer from "./components/create-player.component";
import AddMatch from "./components/add-match.component";
import PlayersList from "./components/players-list.component";
import SampleDetailPlayer from "./components/detail-player.component";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <Link to="/" className="navbar-brand">Soccer League Player Datavis Project</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">All Players</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Player</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/chart" className="nav-link">Sample Player Datavisualization</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Routes>
          <Route path="/" element={<PlayersList/>}/>
          <Route path="/create" element={<CreatePlayer/>} />
          <Route path="/AddMatch/:id" element={<AddMatch/>} />
          <Route path="/chart/" element={<SampleDetailPlayer/>} />
         
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;