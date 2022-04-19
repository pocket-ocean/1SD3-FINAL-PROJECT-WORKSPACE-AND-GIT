import React, { Component } from "react";


export default class CreatePlayer extends Component {
                 constructor(props) {
                   super(props);

                   this.state = {
                     player_name: "",

                     player_team: "",

                     player_postition: "",

                     player_dob: "",

                     matches: [],
                   };

                   //bindings
                   this.onChangePlayerName = this.onChangePlayerName.bind(this);
                   this.onChangePlayerTeam = this.onChangePlayerTeam.bind(this);
                   this.onChangePlayerDob = this.onChangePlayerDob.bind(this);
                   this.onChangePlayerPosition = this.onChangePlayerPosition(
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

                 onChangePlayerPosition(e) {
                   this.setState({
                     player_position: e.target.value,
                   });
                 }

                 onSubmit(e) {
                   e.preventDefault();

                   console.log(`Player Created:`);
                   console.log(`Player Name: ${this.state.player_name}`);
                   console.log(`Player Team: ${this.state.player_team}`);
                   console.log(`Player Dob: ${this.state.player_dob}`);
                   console.log(`Player Goals: ${this.state.player_position}`);

                   this.setState({
                     player_name: "",

                     player_team: "",

                     player_dob: "",

                     player_position: "",

                     matches: [],
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
