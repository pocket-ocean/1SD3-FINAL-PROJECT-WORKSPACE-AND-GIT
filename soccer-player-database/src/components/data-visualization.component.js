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

function Testreturn() {
  return <h4>This is a test return!</h4>;
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
        console.log(this.state.matches);
      })

      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const obj = {
      player_name: this.state.player_name,
      player_team: this.state.player_team,
      player_dob: this.state.player_dob,
      player_position: this.state.player_position,
      matches: this.state.matches,
    };

console.log("Player object for analysis!" + JSON.stringify(obj))

//Declaring variables for rendering! 
//Naming an average goal percentage
var overallGoalAverage = 25;

//Naming the average pass percentage
var overallPassAverage = 35;

//Declaring useful variables:
var overallGoalAveragePerMatch = 3;
var overallGoalAverageAttemptPerMatch = 12;
var overallPassAverage = 23;
var overallPassAttemptsAverage = 37;

//Breaking down player goals

//Creating a goal Array
const goalArray = [];

for (let i = 0; i < obj.matches.length; i++) {
  goalArray.push(obj.matches[i].goals);
}

//Summing goalArray
var goalTotal = 0;

for (let i = 0; i < goalArray.length; i++) {
  goalTotal += goalArray[i];
}

console.log("Goal Array: " + goalArray)
console.log("Goal Total: " + goalTotal)

//Creating an Array of Goal Attempts

const goalAttemptsArray = [];

for (let i = 0; i < obj.matches.length; i++) {
  goalAttemptsArray.push(obj.matches[i].goalAttempts);
}

//Summing goalAttemptsArray

var goalAttemptsTotal = 0;
for (let i = 0; i < goalAttemptsArray.length; i++) {
  goalAttemptsTotal += goalAttemptsArray[i];
}

console.log("Goal Attempts Array: " + goalAttemptsArray)
console.log("Goal Total: " + goalAttemptsTotal)

//Getting a Goal Percentage

//getting a goal percentage:
var goalPercentage = Math.floor(
  (goalTotal / (goalAttemptsTotal + goalTotal)) * 100
);

console.log("Goal Percentage: " + goalPercentage)

//Creating an Array of Passess
const passArray = [];

for (let i = 0; i < obj.matches.length; i++) {
  passArray.push(obj.matches[i].passes);
}

//Summing this Array of Passes

var passTotal = 0;

for (let i = 0; i < passArray.length; i++) {
  passTotal += passArray[i];
}

console.log("Pass Array: " + passArray)
console.log("Pass Total: " + passTotal)

//Creating an Array of Pass Attempts

const passAttemptsArray = [];

for (let i = 0; i < obj.matches.length; i++) {
  passAttemptsArray.push(obj.matches[i].passAttempts);
}

//Summing this Array of Pass Attempts

var passAttemptsTotal = 0;

for (let i = 0; i < passAttemptsArray.length; i++) {
  passAttemptsTotal += passAttemptsArray[i];
}

console.log("Pass Attempts Array:" + passAttemptsArray)
console.log("Pass Total: " + passAttemptsTotal)

var passPercentage = Math.floor(
  (passTotal / (passAttemptsTotal + passTotal)) * 100
);

console.log("Pass Percentage: " + passPercentage)

//Generating GoalPie Data

const GoalPieData = {
  labels: ["Goals", "Goal Attempts"],
  datasets: [
    {
      label: "Goals and Goal Attempts",
      backgroundColor: ["#B21F00", "#C9DE00"],
      hoverOffset: 4,
      data: [goalTotal, goalAttemptsTotal],
    },
  ],
};

//Generating PassPie Data

const PassPieData = {
  labels: ["Passes", "Pass Attempts"],

  datasets: [
    {
      label: "Passes and Pass Attempts",
      backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
      hoverOffset: 4,

      data: [passTotal, passAttemptsTotal],
    },
  ],
};

//Creating an Array of Labels for substituting into line charts:

const goalLabelArray = [];

for (let i = 0; i < obj.matches.length; i++) {
  goalLabelArray.push("M" + (i + 1));
}

//Line chart data Goals

const GoalLineData = {
  labels: goalLabelArray,
  datasets: [
    {
      label: "Goals",
      data: goalArray,
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "#B21F00",
    },
    {
      label: "Attempted Goals",
      data: goalAttemptsArray,
      fill: false,
      borderColor: "#C9DE00",
    },
  ],
};

//Line chart data Passes

const PassLineData = {
  labels: goalLabelArray,
  datasets: [
    {
      label: "Passes",
      data: passArray,
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Attempted Passes",
      data: passAttemptsArray,
      fill: false,
      borderColor: "rgb(54, 162, 235)",
    },
  ],
};



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
              <td>{obj.player_name}</td>
              <td>{obj.player_team}</td>
              <td>{obj.player_position}</td>
              <td>{obj.matches.length}</td>
            </tr>
          </tbody>
        </table>

        <li>
          <ul>
            {obj.player_name} has scored {goalTotal} goals so far.
          </ul>
        </li>
      </div>
    );
  }
}
