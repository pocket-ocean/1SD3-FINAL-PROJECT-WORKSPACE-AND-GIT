import React, { Component } from "react";
import axios from "axios";


//Gets the url id for the get method, slicing "/edit/" out of the result
let idToBeSliced = window.location.pathname;
let id = idToBeSliced.substring(10);
console.log(idToBeSliced);
console.log(id);

export default class AddMatch extends Component {
  constructor(props) {
    super(props);

    //bindings

    this.onChangeGoals = this.onChangeGoals.bind(this);
    this.onChangeGoalAttempts = this.onChangeGoalAttempts.bind(this);
    this.onChangePasses = this.onChangePasses.bind(this);
    this.onChangePassAttempts = this.onChangePassAttempts.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    //initalizting state
    this.state = {
      player_name: "",

      player_team: "",

      player_dob: "",

      player_position: "",

      matches: [],

      goals: "",
      goalAttempts: "",
      passes: "",
      passAttempts: "",
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
  onChangeGoals(e) {
    this.setState({
      goals: e.target.value,
    });
  }

  onChangeGoalAttempts(e) {
    this.setState({
      goalAttempts: e.target.value,
    });
  }

  onChangePasses(e) {
    this.setState({
      passes: e.target.value,
    });
  }

  onChangePassAttempts(e) {
    this.setState({
      passAttempts: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    //input validation on goal sumission

    const obj = {
      player_name: this.state.player_name,
      player_team: this.state.player_team,
      player_dob: this.state.player_dob,
      player_position: this.state.player_position,
      matches: this.state.matches,
    };

    console.log("Stringify checking the object:" + JSON.stringify(obj));

    const match = {   
      goals: this.state.goals,
      goalAttempts: this.state.goalAttempts,
      passes: this.state.passes,
      passAttempts: this.state.passAttempts,
    };
    console.log(match);

    //Adding match to matches array
    obj.matches.push(match);
    console.log(obj);

    axios
      .post("http://localhost:4000/players/update/" + id, obj)
      .then((res) => console.log(res.data));
      this.state = {
        player_name: "",
  
        player_team: "",
  
        player_dob: "",
  
        player_position: "",
  
        matches: [],
  
        goals: "",
        goalAttempts: "",
        passes: "",
        passAttempts: "",
      };
  
    alert("Match added to: " + obj.player_name)

    //this.props.}history.push("/");
  
  }

  render() {
    
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add a match to {this.state.player_name}: </h3>
        <p>Please note that goal and passes cannot be greater than their respective attempt values, that breaks the data visualization!</p>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Match Goals: </label>
            <input
              type="number"
              min="0"
              className="form-control"
              value={this.state.goals}
              onChange={this.onChangeGoals}
              placeholder="enter number of goals scored this match"
            />
          </div>
          <div className="form-group">
            <label>Match Goal Attempts: </label>
            <input
              type="number"
              min="0"
              className="form-control"
              value={this.state.goalAttempts}
              onChange={this.onChangeGoalAttempts}
              placeholder="enter number of attempted goals this match"
            />
          </div>

          <div className="form-group">
            <label>Match Passes: </label>
            <input
              type="number"
              min="0"
              className="form-control"
              value={this.state.passes}
              onChange={this.onChangePasses}
              placeholder="enter number of successful passes this match"
            />
          </div>
          <div className="form-group">
            <label>Match Pass Attempts: </label>
            <input
              type="number"
              min="0"
              className="form-control"
              value={this.state.passAttempts}
              onChange={this.onChangePassAttempts}
              placeholder="enter number of pass attempts this match"
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Add Match"
              className="btn btn-primary"
            />
          </div>
        </form>{" "}
      </div>
    );
  }
}
