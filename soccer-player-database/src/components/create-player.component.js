import React, { Component } from 'react';

export default class CreatePlayer extends Component {

    constructor(props) {
        super(props);

        this.onChangePlayerName = this.onChangePlayerName.bind(this);
        this.onChangePlayerNationality = this.onChangePlayerNationality.bind(this);



        this.state = {
            player_name: "",
            
            player_nationality: '',

            
           
        }
    }

    onChangePlayerName(e) {
        this.setState({
          player_name: e.target.value,
        });
      }

    onChangePlayerNationality(e) {
        this.setState({
            player_nationality: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Player Created:`);
        console.log(`Player Name: ${this.state.player_name}`);
        console.log(`Player Nationality: ${this.state.player_nationality}`);
  
        
        this.setState({
            player_name: '',
            todo_responsible: '',
     
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
                        <label>Player Nationality: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.player_nationality}
                                onChange={this.onChangePlayerNationality}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Player" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}