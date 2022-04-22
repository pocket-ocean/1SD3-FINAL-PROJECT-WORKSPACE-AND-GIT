import React, { Component } from "react";
import axios from 'axios';

export default class EditPlayer extends Component {
constructor(props) {
  super(props);

  //bindings
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
  }
}

componentDidMount(){
  axios.get('http://localhost:4000/players/'+this.props.match.params.id).then(response =>{

  this.setState({
      player_name: response.data.player_name,
      player_position: response.data.player_position,
      player_team: response.data.player_team,
      player_dob: response.data.player_dob,
      matches: response.data.player_dob,

  })

  })
.catch(function(error){
  console.log(error);

})

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
      player_position: this.state.player_position
    };

    console.log(obj);

  axios.post('http://localhost:4000/players/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }




render(){

  return (
    <div>
      <p>Welcome to Edit Todo Component!!</p>
    </div>
  );
}



 
}



