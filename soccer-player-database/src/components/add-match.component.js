import React, { Component } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";



export default class AddMatch extends Component {
    constructor(props) {
      super(props);
     

    //initalizting state
    this.state = {
      player_name: "",

      player_team: "",

      player_dob: "",

      player_position: "",

      matches: [],
    };

//     //bindings
//     this.onChangeGoal = this.onChangeGoal.bind(this);
//     this.onChangeGoalAttempts = this.onChangeGoalAttempts.bind(this);
//     this.onChangePasses = this.onChangePasses.bind(this);
//     this.onChangePassAttempts = this.onChangePassAttempts.bind(this);

//     this.onSubmit = this.onSubmit.bind(this); 
  
//   }

//  //methods for updating the state properties
//  onChangeGoal(e) {
//   this.setState({
//     goals: e.target.value,
//   });
// }

// onChangeGoalAttempts(e) {
//   this.setState({
//     goal_attempts: e.target.value,
//   });
// }

// onChangePasses(e) {
//   this.setState({
//     passes: e.target.value,
//   });
// }

// onChangePassAttempts(e) {
//   this.setState({
//     pass_attempts: e.target.value,
//   });
// }

// onSubmit(e) {
//     e.preventDefault();

    // const obj = {
    //   player_name: this.state.player_name,
    //   player_team: this.state.player_team,
    //   player_dob: this.state.player_dob,
    //   player_position: this.state.player_position,
    //   matches: this.state.matches,
    // };

    // if(this.state.goals >= this.state.goalAttempts && this.state.passes >= this.state.passAttempts){

    // const match = {
    //   matchid = uuidv4();
    //   goals: this.state.goals,
    //   goalAttempts: this.state.goalAttempts,
    //   passes: this.state.passes,
    //   passAttempts: this.state.passAttempts,
    // };
    // console.log(match);

    //Adding the match to the state object
    // obj.matches.push(match)

//     componentDidMount() {
//       axios
//         .get("http://localhost:4000/players/" + this.props.match.params.id)
//         .then(response => {
//           this.setState({
//             player_name: response.data.player_name,
//             player_position: response.data.player_position,
//             player_team: response.data.player_team,
//             player_dob: response.data.player_dob,
//             matches: response.data.player_dob,
//           });
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
     
//     }

// else alert("Goals cannot be more than pass attempts, and passes cannot be more than goal attempts")
//   }



  
//     //Take in input into an object, and store in object, add it to state.matches.push 

//     //HTTP Post request like in edit player component 
//     axios
//     .post(
//       "http://localhost:4000/players/update/" + this.props.match.params.id,
//       obj
//     )
//     .then((res) => console.log(res.data));




  }
  
    render() {
      return (
        <div style={{ marginTop: 10 }}>
        <h3>Add a match to this player</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Match Goals: </label>
            <input
              type="number"  min="0"
              className="form-control"
              value={this.state.goals}
              onChange={this.onChangeGoals} placeholder="enter number of goals scored this match"
              />
             
            </div>
            <div className="form-group">
            <label>Match Goal Attempts: </label>
            <input
              type="number"  min="0" 
              className="form-control" placeholder="enter number of attempted goals this match"/>
            </div>

            <div className="form-group">
            <label>Match Passes: </label>
            <input
              type="number"  min="0"
              className="form-control" placeholder="enter number of successful passes this match"/>
            </div>
            <div className="form-group">
            <label>Match Pass Attempts: </label>
            <input
              type="number"  min="0"
              className="form-control" placeholder="enter number of pass attempts this match"/>
            </div>

            <div className="form-group">
            <input
              type="submit"
              value="Add Match"
              className="btn btn-primary"
            />
          </div>

            </form> </div>
        

      );
    }
  }