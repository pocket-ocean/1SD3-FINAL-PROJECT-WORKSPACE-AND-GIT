import React, { Component } from "react";
import axios from 'axios';


export default class CreatePlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player_name: "",

      player_team: "",

      player_dob: "",

      player_position: "",

      matches: [],
    };

    //bindings
    this.onChangePlayerName = this.onChangePlayerName.bind(this);
    this.onChangePlayerTeam = this.onChangePlayerTeam.bind(this);
    this.onChangePlayerPosition = this.onChangePlayerPosition.bind(this);
    this.onChangePlayerDob = this.onChangePlayerDob.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  //methods for updating the state properties

  onChangePlayerName(e) {
    this.setState({
      player_name: e.target.value,
    });
  }

  onChangePlayerTeam(e) {
    this.setState({
      player_team: e.target.value,
    });
  }

  onChangePlayerDob(e) {
    this.setState({
      player_dob: e.target.value,
    });
  }

  onChangePlayerPosition(e) {
    this.setState({
      player_position: e.target.value,
    });
  }

  //Submit event handler that will log results and set the state to empty again
  onSubmit(e) {
    e.preventDefault();

    console.log(`Player Created:`);
    console.log(`Player Name: ${this.state.player_name}`);
    console.log(`Player Team: ${this.state.player_team}`);
    console.log(`Player Position: ${this.state.player_position}`);
    console.log(`Player Dob: ${this.state.player_dob}`);
    console.log(
      `Empty match array created of length: ${this.state.matches.length}`
    );

      const newPlayer = {

        player_name: this.state.player_name,
        player_team: this.state.player_team,
        player_position: this.state.player_position,
        player_dob: this.state.player_dob,
        matches: this.state.match

      }


//using an axios post request to send a HTTP post request to the backend end point which is http://localhost:4000/players/add

axios.post('http://localhost:4000/players/add', newPlayer)
            .then(res => console.log(res.data));

    this.setState({
      player_name: "",

      player_team: "",

      player_dob: "",

      player_position: "",

      matches: [],
    });

    alert("New Player Created!: " +  newPlayer.player_name)
  
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Player</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Player Name: </label> 
            <input
              type="text"
              className="form-control"
              value={this.state.player_name}
              onChange={this.onChangePlayerName}
              placeholder="Enter Player Name"
            />
          </div>
          <br></br>
          <div className="form-group">
            <label for="player_team">Player Team:</label>
            <select
              id="player_team"
              name="player_team"
              value={this.state.player_team}
              onChange={this.onChangePlayerTeam}
            >
              <option value="Galway Lions">Galway Lions</option>
              <option value="Leitrim Larks">Leitrim Larks</option>
              <option value="Mayo Mongeese">Mayo Mongeese</option>
              <option value="Sligo Skylarks">Sligo Skylarks</option>
              <option value="Roscommon Bears">Roscommon Bears</option>
            </select>
          </div>
          <br></br>
          <div className="form-group">
            <label for="player_position">Player Position:</label>
            <select
              id="player_position"
              name="player_position"
              value={this.state.player_position}
              onChange={this.onChangePlayerPosition}
            >
              <option value="Striker">Striker</option>
              <option value="Centre Forward">Centre Forward</option>
            </select>
          </div>
          <br></br>

          <div className="form-group">
            <label for="player_position">Player Dob:</label>
            <input
              type="date"
              id="player_dob"
              name="player_dob"
              value={this.state.player_dob}
              onChange={this.onChangePlayerDob}
            ></input>
          </div>
          <br></br>
          <div className="form-group">
            <input
              type="submit"
              value="Create Player"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
