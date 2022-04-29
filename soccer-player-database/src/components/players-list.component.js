import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';

//Populates the table data for each player in the database
const Player = props => (
  <tr>
      <td>{props.player.player_name}</td>
      <td className="d-none d-sm-table-cell">{props.player.player_position}</td>
      <td>{props.player.player_team}</td>
      <td className="d-none d-sm-table-cell"  className="text-center">{props.player.matches.length}</td>
      <td>
          <Link to={"/edit/"+props.player._id}>Edit</Link>
      </td>
      <td>
          <Link to={"/addmatch/"+props.player._id}>Add</Link>
      </td>
      <td>
          <Link to={"/datavis/"+props.player._id}>Data Vis</Link>
      </td>
  </tr>
)



export default class PlayersList extends Component {
//initializes this state with an empty players array
  constructor(props) {
      super(props);
      this.state = {players: []};
  }
//get request for all players, that sets this array in state to the returned player objects
  componentDidMount() {

    
      axios.get('http://localhost:4000/players/')
          .then((response) => {
              this.setState({ players: response.data 
           });
          })
          .catch(function (error){
              console.log(error);
          })
  }

  //maps through each player and returns table data for each
  playerList() {
      return this.state.players.map(function(currentPlayer, i){
          return <Player player={currentPlayer} key={i} />;
      })
  }
//what the player sees including links
  render() {
      return (
          <div>
              <h3>Players List</h3>
              <table className="table table-striped" style={{ marginTop: 20 }} >
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th className="d-none d-sm-table-cell">Position</th>
                          <th >Team</th>
                          <th className="d-none d-sm-table-cell">No of Matches Played</th>
                          <th>Edit Player Info</th>
                          <th>Add Match</th>
                          <th>View Player Data Visualization</th>
                      </tr>
                  </thead>
                  <tbody>
                      { this.playerList() }
                  </tbody>
              </table>
          </div>
      )
  }
}