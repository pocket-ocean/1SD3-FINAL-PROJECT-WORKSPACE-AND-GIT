import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';

// const playerObject1 = {
//   player_name: "Brian O'Brien",
//   player_team: "Galway Lions",
//   player_position: "Striker",

//   goals: [2, 1, 0, 4],
//   goalAttempts: [5, 6, 3, 9],
//   passes: [10, 28, 15, 13],
//   passAttempts: [30, 29, 20, 15],
// };

// const playerObject2 = {
//   player_name: "Iosac Tierney",
//   player_team: "Sligo Skylarks",
//   player_position: "Striker",

//   goals: [1, 3, 1, 5],
//   goalAttempts: [10, 6, 12, 10],
//   passes: [5, 10, 8, 17],
//   passAttempts: [11, 14, 13, 20],
// };



// const playerObject3 = {
//   player_name: "James Stewart",
//   player_team: "Roscommon Bears",
//   player_position: "Striker",

//   goals: [4, 1, 0, 4],
//   goalAttempts: [5, 6, 3, 9],
//   passes: [10, 28, 15, 13],
//   passAttempts: [30, 29, 20, 15],
// };

const Player = props => (
  <tr>
      <td>{props.player.player_name}</td>
      <td>{props.player.player_position}</td>
      <td>{props.player.player_team}</td>
      <td>
          <Link to={"/edit/"+props.player._id}>Edit</Link>
      </td>
      <td>
          <Link to={"/detail/"+props.player._id}>Detail</Link>
      </td>
  </tr>
)


export default class PlayersList extends Component {

  constructor(props) {
      super(props);
      this.state = {players: []};
  }

  componentDidMount() {
      axios.get('http://localhost:4000/players/')
          .then(response => {
              this.setState({ players: response.data });
          })
          .catch(function (error){
              console.log(error);
          })
  }

  playerList() {
      return this.state.players.map(function(currentPlayer, i){
          return <Player player={currentPlayer} key={i} />;
      })
  }

  render() {
      return (
          <div>
              <h3>Players List</h3>
              <table className="table table-striped" style={{ marginTop: 20 }} >
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Team</th>
                          <th>Action 1</th>
                          <th>Action 2</th>
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