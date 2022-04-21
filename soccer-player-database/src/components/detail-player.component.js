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
  player_dob: "2022-04-05",

  matches: [
    {
      goals: 2,
      goalAttempts: 10,
      passes: 12,
      passAttempts: 21,
    },

    {
      goals: 4,
      goalAttempts: 6,
      passes: 16,
      passAttempts: 23,
    },

    {
      goals: 6,
      goalAttempts: 15,
      passes: 22,
      passAttempts: 27,
    },

    {
      goals: 3,
      goalAttempts: 22,
      passes: 33,
      passAttempts: 45,
    },
    {
      goals: 10,
      goalAttempts: 25,
      passes: 45,
      passAttempts: 55,
    },

    {
      goals: 10,
      goalAttempts: 25,
      passes: 45,
      passAttempts: 55,
    },
  ],
};

//Logging simple infrormation from the object
console.log("Player object name: " + playerObject1.player_name);
console.log(
  "Player has played in " + playerObject1.matches.length + " matches."
);
console.log("Match 1 Goals for this player: " + playerObject1.matches[0].goals);

// console.log("Listing all goals for each match this player has done! ")
// //Listing all goals in sequence
// for (let i = 0; i < playerObject1.matches.length; i++){
//   console.log(playerObject1.matches[i].goals)
// }

//Creating an Array of Goals

const goalArray = [];

for (let i = 0; i < playerObject1.matches.length; i++) {
  goalArray.push(playerObject1.matches[i].goals);
}
console.log("Array of goals:" + goalArray);

//Summing this Array of Goals

var goalTotal = 0;

for (let i = 0; i < goalArray.length; i++) {
  goalTotal += goalArray[i];
}

console.log("Total goals:" + goalTotal);

//Creating an Array of Goal Attempts

const goalAttemptsArray = [];

for (let i = 0; i < playerObject1.matches.length; i++) {
  goalAttemptsArray.push(playerObject1.matches[i].goalAttempts);
}

console.log("Array of goal attempts:" + goalAttemptsArray);

//Summing this Array of Goal Attempts

var goalAttemptsTotal = 0;
for (let i = 0; i < goalAttemptsArray.length; i++) {
  goalAttemptsTotal += goalAttemptsArray[i];
}

console.log("Total goal Attempts:" + goalAttemptsTotal);

//getting a goal percentage:

var goalPercentage = Math.floor(
  (goalTotal / (goalAttemptsTotal + goalTotal)) * 100
);

//Creating an Array of Passess

const passArray = [];

for (let i = 0; i < playerObject1.matches.length; i++) {
  passArray.push(playerObject1.matches[i].passes);
}
console.log("Aray of Passes:" + passArray);

//Summing this Array of Passes

var passTotal = 0;

for (let i = 0; i < passArray.length; i++) {
  passTotal += passArray[i];
}
console.log("Total Passes:" + passTotal);

//Creating an Array of Pass Attempts

const passAttemptsArray = [];

for (let i = 0; i < playerObject1.matches.length; i++) {
  passAttemptsArray.push(playerObject1.matches[i].passAttempts);
}
console.log("Aray of Pass Attempts:" + passAttemptsArray);

//Summing this Array of Pass Attempts

var passAttemptsTotal = 0;

for (let i = 0; i < passAttemptsArray.length; i++) {
  passAttemptsTotal += passAttemptsArray[i];
}
console.log("Total Pass Attempts:" + passAttemptsTotal);

var passPercentage = Math.floor(
  (passTotal / (passAttemptsTotal + passTotal)) * 100
);

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

//Creating an Array of Labels for substituting into labels:

const goalLabelArray = [];

for (let i = 0; i < playerObject1.matches.length; i++) {
  goalLabelArray.push("M" + (i + 1));
}
console.log("Array of match labels:" + goalLabelArray);

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

//Naming an average goal percentage

var overallGoalAverage = 25;

//Naming the average pass percentage

var overallPassAverage = 35;

//GoalTrendConditionalCheck

function GoalTrendConditionalCheck() {
  return (
    <li>
      This will assess sucessful goals over time, they are either increasing or
      decreasing, and if the player's attempted goals are trending up or down
      over time.{" "}
    </li>
  );
}

//PassTrendConditionalCheck

function PassTrendConditionalCheck() {
  return (
    <li>
      This will assess sucessful passes over time, they are either increasing or
      decreasing, and if the player's attempted passess are trending up or down
      over time.{" "}
    </li>
  );
}

// What is shown to the user!

//Conditional Rendering

function GoalConditionalCheck() {
  if (goalPercentage > overallGoalAverage) {
    return (
      <li>
        This is better than the average of <b> {overallGoalAverage}%.</b>
      </li>
    );
  } else if (goalPercentage == overallGoalAverage) {
    return <li>This is the goal success average.</li>;
  } else
    return (
      <li>
        This is worse than the average of <b> {overallGoalAverage}%.</b>
      </li>
    );
}

function PassConditionalCheck() {
  if (passPercentage > overallPassAverage) {
    return (
      <li>
        This is better than the average of <b> {overallPassAverage}%.</b>
      </li>
    );
  } else if (passPercentage == overallPassAverage) {
    return <li>This is the pass success average.</li>;
  } else
    return (
      <li>
        This is worse than the average of <b> {overallPassAverage}%.</b>
      </li>
    );
}

function GoalTrendsCheck() {
  return (
    <li>
      This will say if a player is getting more or less goals and goaol
      opportunites over time.
    </li>
  );
}

function PassesTrendsCheck() {
  return (
    <li>
      This will say if a player is getting more or less passes and pass
      opportunites over time.
    </li>
  );
}

function SampleDetailPlayer() {
  return (
    <div>
      <h3>Sample Player Data Vis</h3>

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
            <td>{playerObject1.player_name}</td>
            <td>{playerObject1.player_team}</td>
            <td>{playerObject1.player_position}</td>
            <td>{playerObject1.matches.length}</td>
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
                  text: "Goals and Attempts",
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
              <GoalConditionalCheck />

              <br></br>

              <li>
                This player successfully passes <b> {passPercentage}% </b> of
                their pass attempts.
              </li>

              <br></br>
             

              <br></br>
            </ul>
          </div>

          <div className="col-sm-4">
            <h3>Goal Breakdown Cont</h3>
            <ul>
              <li>
                Per Match, this player scores <b> {Math.floor(goalTotal/playerObject1.matches.length)}</b> goals.
              </li>
              <br></br>
              <li>

                This is X Than the average

              </li>

              <br></br>

              <li>
                Per Match, this player makes <b> {Math.floor(goalAttemptsTotal/playerObject1.matches.length)}</b> goal attempts.
              </li>
              <br></br>
              <li>

                This is X Than the average

              </li>

              <br></br>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <h3>Goals and Attempts Over Time</h3>
              <Line data={GoalLineData} />
            </div>

            <div className="col-sm-4">
              <h3>Goal Trends</h3>
              <ul>
                <GoalTrendConditionalCheck />
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-4">
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
              <h3>Passing Breakdown</h3>

              <ul>
              <PassConditionalCheck />

                <br></br>
                <PassTrendConditionalCheck />
                <br></br>
              </ul>
            </div>

            <div className="col-sm-4">
              <h3>Passing Breakdown</h3>

              <ul>
                <GoalTrendConditionalCheck />

                <br></br>
                <PassTrendConditionalCheck />
                <br></br>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <h3>Passes and Attempts Over Time</h3>
                <Line data={PassLineData} />
              </div>

              <div className="col-sm-4">
              <h3>Passing Trends</h3>
              <PassesTrendsCheck/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>
    </div>
  );
}

export default SampleDetailPlayer;
