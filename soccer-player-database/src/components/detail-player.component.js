import React, { Component } from "react";
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

//Creating a several player object with information and arrays, each index represents a match:

// This playerObject will be accessed and compared to the other player data
const playerObject1 = {
  player_name: "Brian O'Brien",
  player_team: "Galway Lions",
  player_position: "Striker",

  goals: [2, 1, 0, 4],
  goalAttempts: [10, 34, 4, 12],
  passes: [10, 28, 15, 13],
  passAttempts: [30, 29, 20, 15],
};

//tallying goals
var goalTotal = 0;
for (let h = 0; h < playerObject1.goals.length; h++) {
  goalTotal = +playerObject1.goals[h];
}
console.log("Goal Total:" + goalTotal);

//tallying goal attempts
var goalAttemptsTotal = 0;
for (let i = 0; i < playerObject1.goalAttempts.length; i++) {
  goalAttemptsTotal = +playerObject1.goalAttempts[i];
}
console.log("Goal Attempts:" + goalAttemptsTotal);

//getting a goal percentage:

var goalPercentage = Math.floor((goalTotal / (goalAttemptsTotal + goalTotal)) * 100);

//tallying passes

var passTotal = 0;
for (let j = 0; j < playerObject1.passes.length; j++) {
  passTotal = +playerObject1.passes[j];
}
console.log("Pass Total:" + passTotal);

//tallying passes attempts

var passAttemptsTotal = 0;
for (let k = 0; k < playerObject1.passAttempts.length; k++) {
  passAttemptsTotal = +playerObject1.passAttempts[k];
}
console.log("Pass Attempts:" + passAttemptsTotal);

//getting a pass percentage:

var passPercentage = Math.floor((passTotal / (passAttemptsTotal + passTotal)) * 100);

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

//Naming an average goal percentage

var overallGoalAverage = 25;

//Naming the average pass percentage

var overallPassAverage = 35;


//Conditional Rendering
function  GoalConditionalCheck(){

if(goalPercentage > overallGoalAverage) {
return(

<li>This is better than the average of <b> {overallGoalAverage}%.</b></li>

)}

else if (goalPercentage == overallGoalAverage) {

  return(

    <li>This is the goal success average.</li>
    
    )
  
}

else return (

<li>This is worse than the average of <b> {overallGoalAverage}%.</b></li>
)

};

function  PassConditionalCheck(){

  if(passPercentage > overallPassAverage) {
  return(
  
  <li>This is better than the average of <b> {overallPassAverage}%.</b></li>
  
  )}

  else if (passPercentage == overallPassAverage) {

    return(
  
      <li>This is the pass success average.</li>
      
      )
    
  }
  
  else return (
  
  <li>This is worse than the average of <b> {overallPassAverage}%.</b></li>
  )
  
  };




function DetailPlayer() {
  return (
    <div>
      <h3>This is a Player Data Vis Example</h3>

      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th> Player Name</th>
            <th> Player Team </th>
            <th> Player Position </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{playerObject1.player_name}</td>
            <td>{playerObject1.player_team}</td>
            <td>{playerObject1.player_position}</td>
          </tr>
        </tbody>
      </table>

      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h3>Total Goals and Goal Attempts</h3>
            <Pie
              data={GoalPieData}
              options={{
                title: {
                  display: true,
                  text: "Average Rainfall",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>

          <div className="col-sm -4">
            <h3>Total Passes and Pass Attempts</h3>
            <Pie
              data={PassPieData}
              options={{
                title: {
                  display: true,
                  text: "Average Rainfall",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>

          <div className="col-sm-4">
            <h3>Goal Breakdown</h3>
            <ul>
              <li>
                This player scores <b> {goalPercentage}%</b> of their goals
                attempts.
              </li>
              <br></br>
              <GoalConditionalCheck/>

              <br></br>

              <li>
                This player successfully passes <b> {passPercentage}% </b> of
                their pass attempts.
              </li>

              <br></br>
              <PassConditionalCheck/>

              <br></br>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPlayer;
