import React, { Component } from 'react';



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
            
            player_team:'',

            player_dob:'',

            player_goals: [],

            player_goal_attempts: [],

            player_passes: [],

            player_pass_attempts: []
           
        }
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

      onChangePlayerTeam(e) {
        this.setState({
          player_dob: e.target.value,
        });
      }

      onChangePlayer_goals(e){
      }

      onChangePlayer_goal_attempts(e){}

      onChangePlayer_passes(e){}

      onChangePlayer_pass_attempts(e){}




    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Player Created:`);
        console.log(`Player Name: ${this.state.player_name}`);
        console.log(`Player Team: ${this.state.player_team}`);
        console.log(`Player Dob: ${this.state.player_dob}`);
  
        
        this.setState({
            player_name: "",
            
            player_team:'',

            player_dob:'',

            player_goals: [],

            player_goal_attempts: [],

            player_passes: [],

            player_pass_attempts: []
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Player</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Player Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.player_name}
                                onChange={this.onChangePlayerName}
                                />
                    </div>
                    <div className="form-group">
                    <label for="cars">Choose a car:</label>
  <select id="cars" name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat" selected>Fiat</option>
    <option value="audi">Audi</option>
  </select>
  <input type="submit">
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Player" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}