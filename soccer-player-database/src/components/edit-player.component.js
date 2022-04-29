import React, { Component } from "react";
import axios from "axios";
import { Link, Router } from "react-router-dom";
import { TimeScale } from "chart.js";

//Gets the url id for the get method, slicing "/edit/" out of the result
var idToBeSliced = window.location.pathname;
const id = idToBeSliced.substring(6);
console.log(idToBeSliced);
console.log(id);

export default class EditPlayer extends Component {
  constructor(props) {
    super(props);

    this.onChangePlayerName = this.onChangePlayerName.bind(this);
    this.onChangePlayerTeam = this.onChangePlayerTeam.bind(this);
    this.onChangePlayerPosition = this.onChangePlayerPosition.bind(this);
    this.onChangePlayerDob = this.onChangePlayerDob.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //initalizting state
    this.state = {
      player_name: "",

      player_team: "",

      player_dob: "",

      player_position: "",

      matches: [],
    };
    console.log(
      "Checking current state:" +
        JSON.stringify(this.state) +
        " this has an array of length " +
        this.state.matches.length
    );
  }

  componentDidMount() {
    //console.log("url id" +  id );
    axios
      .get("http://localhost:4000/players/" + id)

      .then((response) => {
        this.setState({
          player_name: response.data.player_name,
          player_position: response.data.player_position,
          player_team: response.data.player_team,
          player_dob: response.data.player_dob,
          matches: response.data.matches,
        });
        console.log(this.state);
      })

      .catch(function (error) {
        console.log(error);
      });
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

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      player_name: this.state.player_name,
      player_team: this.state.player_team,
      player_dob: this.state.player_dob,
      player_position: this.state.player_position,
      matches: this.state.matches,
    };

    console.log(
      "Checking edited player:" +
        JSON.stringify(obj) +
        " this player has an array of " +
        obj.matches.length
    );
console.log("Player- " + obj.player_name + " - created!")
    axios
      .post("http://localhost:4000/players/update/" + id, obj)
      .then((res) => console.log(res.data));

    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        {" "}
        <h3> This is where you edit or update player information: </h3>
        <h3 align="center">Update Player</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Player Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.player_name}
              onChange={this.onChangePlayerName}
            />
          </div>
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

          <div className="form-group">
            <input
              type="submit"
              value="Update Player"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
