import React, { Component } from "react";

// let Player = new Schema({
//     player_name: {
//         type: String
//     },
//     player_team: {
//         type: String
//     },
//     player_dob: {
//         type: Date
//     },
//     player_goals: {
//         type: Array,
//     }
//     player_goal_attempts: {
//         type: Array
//     }

//     player_passes: {
//         type: Array
//     }
//     player_pass_attempts: {
//         type: Array
//     }

export default class CreatePlayer extends Component {
                 constructor(props) {
                   super(props);

                   this.state = {
                     player_name: "",

                     player_team: "",

                     player_dob: "",

                     player_goals: "",

                     player_goal_attempts: "",

                     player_passes: "",

                     player_pass_attempts: "",
                   };

                   //bindings
                   this.onChangePlayerName = this.onChangePlayerName.bind(this);
                   this.onChangePlayerTeam = this.onChangePlayerTeam.bind(this);
                   this.onChangePlayerDob = this.onChangePlayerDob.bind(this);

                   this.onChangePlayerGoals = this.onChangePlayerGoals.bind(
                     this
                   );
                   this.onChangePlayerGoalAttempts = this.onChangePlayerGoalAttempts.bind(
                     this
                   );
                   this.onChangePlayerPasses = this.onChangePlayerPasses.bind(
                     this
                   );

                   this.onChangePlayerPassAttempts = this.onChangePlayerPassAttempts.bind(
                     this
                   );

                   this.onSubmit = this.onSubmit.bind(this);
                 }

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

                 //On Change, take in the string and break it up into an array
                 onChangePlayerGoals(e) {
                   // var GoalVariable = e.target.value,
                   // var GoalArray = constGoalVariable.split(',');

                   this.setState({
                     player_goals: e.target.value,
                   });
                 }

                 onChangePlayerGoalAttempts(e) {

                  
                   this.setState({
                     player_goal_attempts: e.target.value,

                    
                   });
                 }

                 onChangePlayerPasses(e) {
                   this.setState({
                     player_passes: e.target.value,
                   });
                 }

                 onChangePlayerPassAttempts(e) {
                   this.setState({
                     player_pass_attempts: e.target.value,
                   });
                 }

                 onSubmit(e) {
                   e.preventDefault();

                   console.log(`Player Created:`);
                   console.log(`Player Name: ${this.state.player_name}`);
                   console.log(`Player Team: ${this.state.player_team}`);
                   console.log(`Player Dob: ${this.state.player_dob}`);
                   console.log(`Player Goals: ${this.state.player_goals}`);
                   console.log(
                     `Player Goal Attempts: ${this.state.player_goal_attempts}`
                   );
                   console.log(`Player Passes: ${this.state.player_passes}`);
                   console.log(`Player Pass Attempts: ${this.state.player_pass_attempts}`);

                   this.setState({
                     player_name: "",

                     player_team: "",

                     player_dob: "",

                     player_goals: [],

                     player_goal_attempts: [],

                     player_passes: [],

                     player_pass_attempts: [],
                   });
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
                           />
                         </div>
                         <br></br>
                         <div className="form-group">
                           <label for="Teams">Player Team:</label>
                           <select
                             id="teams"
                             name="teams"
                             onChange={this.onChangePlayerTeam}
                           >
                             <option value="Galway Lions">Galway Lions</option>
                             <option value="Leitrim Larks">
                               Leitrim Larks
                             </option>
                             <option value="Mayo Mongeese">
                               Mayo Mongeese
                             </option>
                             <option value="Sligo Skylarks">
                               Sligo Skylarks
                             </option>
                             <option value="Roscommon Bears">
                               Roscommon Bears
                             </option>
                           </select>
                         </div>
                         <br></br>
                         <label for="start">Player Birthdate:</label>
                         <input
                           type="date"
                           id="start"
                           name="trip-start"
                           value={this.state.player_dob}
                           onChange={this.onChangePlayerDob}
                         />
                         <br></br>
                         <br></br>
                         <label for="Matches">
                           <h3>
                             4 Most Recent Match Performances, separate each
                             number by a ' , '
                           </h3>
                         </label>{" "}
                         <br></br>
                         <p>
                           Succesful Goals:{" "}
                           <input
                             type="text"
                             name="array[]"
                             value={this.state.player_goals}
                             onChange={this.onChangePlayerGoals}
                           />
                         </p>{" "}
                         <br></br>
                         <p>
                           All Goal Attempts:{" "}
                           <input
                             type="text"
                             name="array[]"
                             value={this.state.player_goal_attempts}
                             onChange={this.onChangePlayerGoalAttempts}
                           />
                         </p>
                         <br></br>
                         <p>
                           Sucessful Passes:{" "}
                           <input
                             type="text"
                             name="array[]"
                             value={this.state.player_passes}
                             onChange={this.onChangePlayerPasses}
                           />
                         </p>
                         <br></br>
                         <p>
                           All Pass Attempts:{" "}
                           <input type="text" name="array[]" value={this.state.player_pass_attempts}
                             onChange={this.onChangePlayerPassAttempts}/>
                         </p>{" "}
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
