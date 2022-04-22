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
  ],
};



//Logging simple infrormation from the object
console.log("Player object name: " + playerObject1.player_name);
console.log(
  "Player has played in " + playerObject1.matches.length + " matches."
);
console.log("Match 1 Goals for this player: " + playerObject1.matches[0].goals);

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

//Declaring useful variables:
var overallGoalAveragePerMatch = 3;

var overallGoalAverageAttemptPerMatch = 12;
// What is shown to the user!

//Conditional Rendering

function GoalConditionalCheck() {
  if (goalPercentage > overallGoalAverage) {
    return (
      <li>
        <h5>This is better than the average of <b> {overallGoalAverage}%.</b> </h5>
      </li>
    );
  } else if (goalPercentage == overallGoalAverage) {
    return <li> <h5>This is the goal success average.</h5></li>
  } else
    return (
      <li>
        <h5>This is worse than the average of <b> {overallGoalAverage}%.</b></h5>
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
        <h4>This is worse than the average of <b> {overallPassAverage}%.</b></h4>
      </li>
    );
}

//Trends for linear graphs over time

//GoalTrendConditionalCheck

function GoalTrendsCheck() {
  var goalsPositiveTrend = 0;
  var goalsNegativeTrend = 0;

  for (let i = 1; i <= goalArray.length; i++) {
    if (goalArray[i] > goalArray[i - 1]) {
      goalsPositiveTrend += goalArray[i] - goalArray[i - 1];
    }

    if (goalArray[i] < goalArray[i - 1]) {
      goalsNegativeTrend += goalArray[i - 1] - goalArray[i];
    }
  }

  console.log("Goals Negative Trend: " + goalsNegativeTrend);
  console.log("Goals Positive Trend: " + goalsPositiveTrend);

  if (goalsPositiveTrend > goalsNegativeTrend) {
    return (
      <li>
        <h4>This player is scoring more goals over time.</h4>
      </li>
    );
  } else if (goalsNegativeTrend > goalsPositiveTrend) {
    return (
      <li>
        <h4>This player is making less goals over time.</h4>
      </li>
    );
  } else
    return (
      <li>
        <h4>This player is not improving their goal success over time.</h4>
      </li>
    );
}

function GoalAttemptsTrendsCheck() {
  var goalsAttemptsPositiveTrend = 0;
  var goalsAttemptsNegativeTrend = 0;

  for (let i = 1; i <= goalAttemptsArray.length; i++) {
    if (goalAttemptsArray[i] > goalAttemptsArray[i - 1]) {
      goalsAttemptsPositiveTrend +=
        goalAttemptsArray[i] - goalAttemptsArray[i - 1];
    }

    if (goalAttemptsArray[i] < goalAttemptsArray[i - 1]) {
      goalsAttemptsNegativeTrend +=
        goalAttemptsArray[i - 1] - goalAttemptsArray[i];
    }
  }

  console.log("Goal Attempts Negative Trend: " + goalsAttemptsNegativeTrend);
  console.log("Goal Attempts Positive Trend: " + goalsAttemptsPositiveTrend);

  if (goalsAttemptsPositiveTrend > goalsAttemptsNegativeTrend) {
    return (
      <li>
        <h4>This player is making more goal attempts over time.</h4>
      </li>
    );
  } else if (goalsAttemptsNegativeTrend > goalsAttemptsPositiveTrend) {
    return (
      <li>
        <h4>This player is making less goal attempts over time.</h4>
      </li>
    );
  } else
    return (
      <li>
        <h4>This player is not making more goal attempts over time.</h4>
      </li>
    );
}

function PassesTrendsCheck() {
  var passesPositiveTrend = 0;
  var passesNegativeTrend = 0;

  for (let i = 1; i <= passArray.length; i++) {
    if (passArray[i] > passArray[i - 1]) {
      passesPositiveTrend += passArray[i] - passArray[i - 1];
    }

    if (passArray[i] < passArray[i - 1]) {
      passesNegativeTrend += passArray[i - 1] - passArray[i];
    }
  }

  console.log("Passes Negative Trend: " + passesNegativeTrend);
  console.log("Passes Positive Trend: " + passesPositiveTrend);

  if (passesPositiveTrend > passesNegativeTrend) {
    return (
      <li>
        <h4>This player is making more sucessful passes over time.</h4>
      </li>
    );
  } else if (passesNegativeTrend > passesPositiveTrend) {
    return (
      <li>
        <h4>This player is making less sucessful passes over time.</h4>
      </li>
    );
  } else
    return (
      <li>
        <h4>This player is not improving over time</h4>
      </li>
    );
}

//Passing Attempts Tends Check
function PassAttemptsTrendsCheck() {
  var passAttemptsPositiveTrend = 0;
  var passAttemptsNegativeTrend = 0;

  for (let i = 1; i <= passAttemptsArray.length; i++) {
    if (passAttemptsArray[i] > passAttemptsArray[i - 1]) {
      passAttemptsPositiveTrend +=
        passAttemptsArray[i] - passAttemptsArray[i - 1];
    }

    if (passAttemptsArray[i] < passAttemptsArray[i - 1]) {
      passAttemptsNegativeTrend +=
        passAttemptsArray[i - 1] - passAttemptsArray[i];
    }
  }

  console.log("Pass Attempts Negative Trend: " + passAttemptsNegativeTrend);
  console.log("Pass Attempts Positive Trend: " + passAttemptsPositiveTrend);

  if (passAttemptsPositiveTrend > passAttemptsNegativeTrend) {
    return (
      <li>
        <h4>This player is making more pass attempts over time.</h4>
      </li>
    );
  } else if (passAttemptsNegativeTrend > passAttemptsPositiveTrend) {
    return (
      <li>
        <h4>This player is making less pass attempts over time.</h4>
      </li>
    );
  } else
    return (
      <li>
        <h4>This player is not improving over time.</h4>
      </li>
    );
}


function PerMatchGoalConditional(){
    if(   Math.floor(goalTotal / playerObject1.matches.length) > overallGoalAveragePerMatch){
  return(<li>This is <b>better</b> than the average rate of {overallGoalAveragePerMatch} goals per match. </li>)
}

else if( Math.floor(goalTotal / playerObject1.matches.length) < overallGoalAveragePerMatch){

  return(<li>This is <b>worse</b> than the average rate of {overallGoalAveragePerMatch} goals per match </li>)
}

else return (<li>This is the average performance.</li>)

}


function PerMatchGoalAttemptConditional(){
  if(   Math.floor(goalAttemptsTotal / playerObject1.matches.length) > overallGoalAverageAttemptPerMatch){
    return(<li>This is <b>better</b> than the average rate of {overallGoalAverageAttemptPerMatch} goals per match </li>)
  }
  
  else if( Math.floor(goalAttemptsTotal / playerObject1.matches.length) < overallGoalAverageAttemptPerMatch){
  
    return(<li>This is <b>worse</b> than the average rate of {overallGoalAverageAttemptPerMatch} goals per match </li>)
  }
  
  else return (<li>This is the average performance.</li>)
  
  }
  

//Encompasing Component
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
                <h5>This player scores <b> {goalPercentage}%</b> of their goal
                attempts. </h5>
              </li>
              <br></br>
              <GoalConditionalCheck />

              <br></br>

              <br></br>
            </ul>
          </div>

          <div className="col-sm-4">
            <h3>Goals Comparison Across League</h3>
            <ul>
              <li>
                Per Match, this player scores
                <b> {Math.floor(goalTotal / playerObject1.matches.length)} </b>
                goals.
              </li>
              <br></br>
             <PerMatchGoalConditional/>

              <br></br>

              <li>
                Per Match, this player makes <b>
                  {Math.floor(goalAttemptsTotal / playerObject1.matches.length)}
                </b> goal attempts.
              </li>
              <br></br>
              
              <PerMatchGoalAttemptConditional/>

              <br></br>
            </ul>
          </div>
        </div>
        <hr class="bg-danger border-2 border-top border-danger"></hr>

        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <h3>Goals and Attempts Over Time</h3>
              <Line data={GoalLineData} />
            </div>

            <div className="col-sm-4">
              <h3>Goal Trends</h3>
              <ul>
                <GoalTrendsCheck />
                <br></br>
                <GoalAttemptsTrendsCheck />
              </ul>
            </div>
          </div>
        </div>
        <hr class="bg-danger border-2 border-top border-danger"></hr>
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
                <li>
                  <h5>This player successfully passes <b> {passPercentage}% </b> of
                  their pass attempts.</h5>
                </li>
                <br></br>

                <PassConditionalCheck />

                <br></br>
              </ul>
            </div>

            <div className="col-sm-4">
              <h3>Passing Comparison Across League</h3>

              <ul>
                <li>
                  Per Match, this player makes
                  <b> {Math.floor(passTotal / playerObject1.matches.length)}</b>
                  sucessful passes.
                </li>
                <br></br>
                <li>This is X Than the average</li>

                <br></br>

                <li>
                  Per Match, this player makes
                  <b>
                    {Math.floor(
                      goalAttemptsTotal / playerObject1.matches.length
                    )}
                  </b>
                  goal attempts.
                </li>
                <br></br>
                <li>This is X Than the average</li>

                <br></br>
              </ul>
            </div>
          </div>
          <hr class="bg-danger border-2 border-top border-danger"></hr>
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <h3>Passes and Attempts Over Time</h3>
                <Line data={PassLineData} />
              </div>

              <div className="col-sm-4">
                <h3>Passing Trends</h3>
                <ul>
                  <PassesTrendsCheck />
                  <br></br>
                  <PassAttemptsTrendsCheck />
                </ul>
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
