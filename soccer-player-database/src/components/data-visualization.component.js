import React, { Component } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
} from "chart.js";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Pie, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // 1. Register Filler plugin
);


var idToBeSliced = window.location.pathname;
const id = idToBeSliced.substring(9);
console.log(idToBeSliced);
console.log("Checking id!" + id);


function Testreturn(){



  
  return <h4>This is a test return!</h4>
}



export default class DataVis extends Component {
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

     console.log(
      "Checking current state:" +
        JSON.stringify(this.state) +
        " this has an array of length " +
        this.state.matches.length)
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




render(){
  return (
    <div>
  <h3>Data Visualization</h3>

<table className="table table-striped" style={{ marginTop: 20 }}>
  <thead>
    <tr>
      <th> Player Name</th>
      <th> Player Team </th>
      <th> Player Position </th>
      <th> Matches Played</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>{this.state.player_name}</td>
      <td>{this.state.player_team}</td>
      <td>{this.state.player_position}</td>
      <td>{this.state.matches.length}</td>
    </tr>
  </tbody>
</table>
</div>
  )

}

}



