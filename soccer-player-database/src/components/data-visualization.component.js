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


function GoalConditionalCheck() {
  
  if (goalPercentage > overallGoalAverage) {
    return (
      <li>
        <h5>
        This is better than the goal average of <b> {overallGoalAverage}%.</b>{" "}
        </h5>
      </li>
    );
  } else if (goalPercentage == overallGoalAverage) {
    return (
      <li>
        {" "}
        <h5>This is the goal success average.</h5>
      </li>
    );
  } else
    return (
      <li>
        <h5>
          This is worse than the average of <b> {overallGoalAverage}%.</b>
        </h5>
      </li>
    );
}

function PassConditionalCheck() {
  if (passPercentage > overallPassAverage) {
    return (
      <li>
        <h5>
          This is better than the average of <b> {overallPassAverage}%.</b>
        </h5>
      </li>
    );
  } else if (passPercentage == overallPassAverage) {
    return <li>This is the pass success average.</li>;
  } else
    return (
      <li>
        <h4>
          This is worse than the average of <b> {overallPassAverage}%.</b>
        </h4>
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
        <h4>This player is not making more or less goals over time.</h4>
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
  console.log("Pass Attempts Array: " + passAttemptsArray);
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

//Checking if the player is getting more accurate over time

function GoalAccuracyTrendsCheck() {
  const GoalAccuracyTrendsArray = [];

  for (let i = 0; i < obj.matches.length; i++) {
    GoalAccuracyTrendsArray.push(goalAttemptsArray[i] - goalArray[i]);
  }

  console.log("Goal Accuracy Trends Array: " + GoalAccuracyTrendsArray);
  //Now run the trend check!
  var goalAccuracyAttemptsPositiveTrend = 0;
  var goalAccuracyAttemptsNegativeTrend = 0;

  for (let i = 1; i <= GoalAccuracyTrendsArray.length; i++) {
    if (GoalAccuracyTrendsArray[i] > GoalAccuracyTrendsArray[i - 1]) {
      goalAccuracyAttemptsPositiveTrend +=
        GoalAccuracyTrendsArray[i] - GoalAccuracyTrendsArray[i - 1];
    }

    if (GoalAccuracyTrendsArray[i] < GoalAccuracyTrendsArray[i - 1]) {
      goalAccuracyAttemptsNegativeTrend +=
        GoalAccuracyTrendsArray[i - 1] - GoalAccuracyTrendsArray[i];
    }
  }

  console.log(
    "Goal Accuracy Trends Negative Total: " + goalAccuracyAttemptsNegativeTrend
  );
  console.log(
    "Goal Accuracy Trends Positive Total: " + goalAccuracyAttemptsPositiveTrend
  );

  if (goalAccuracyAttemptsPositiveTrend > goalAccuracyAttemptsNegativeTrend) {
    return (
      <li>
        <h4>
          This player is getting less accurate at scoring goals over time. For every goal they score, they make{" "}
          {Math.floor(
            goalAccuracyAttemptsPositiveTrend / GoalAccuracyTrendsArray.length
          )}{" "}
          more goal attempts.{" "}
        </h4>
      </li>
    );
  } else if (
    goalAccuracyAttemptsPositiveTrend < goalAccuracyAttemptsNegativeTrend
  ) {
    return (
      <li>
        <h4>
          This player is getting more accurate at scoring goals over time. For every goal they score, they make 
          {" "}
          {Math.floor(
            goalAccuracyAttemptsNegativeTrend / GoalAccuracyTrendsArray.length
          )}{" "}
          less goal attempts.
        </h4>
      </li>
    );
  } else if ( goalAccuracyAttemptsPositiveTrend == goalAccuracyAttemptsNegativeTrend){
    return (
      <li>
        <h4>This player is not getting more or less accurate over time. </h4>
      </li>
    );
  }
}

//Checking if the player is passing more accuractly over time
function PassingAccuracyTrendsCheck() {
  const PassingAccuracyTrendsArray = [];

  for (let i = 0; i < obj.matches.length; i++) {
    PassingAccuracyTrendsArray.push(passAttemptsArray[i] - passArray[i]);
  }
  //Now run the trend check!
  var passAccuracyAttemptsPositiveTrend = 0;
  var passAccuracyAttemptsNegativeTrend = 0;

  for (let i = 1; i <= PassingAccuracyTrendsArray.length; i++) {
    if (PassingAccuracyTrendsArray[i] > PassingAccuracyTrendsArray[i - 1]) {
      passAccuracyAttemptsPositiveTrend +=
        PassingAccuracyTrendsArray[i] - PassingAccuracyTrendsArray[i - 1];
    }

    if (PassingAccuracyTrendsArray[i] < PassingAccuracyTrendsArray[i - 1]) {
      passAccuracyAttemptsNegativeTrend +=
        PassingAccuracyTrendsArray[i - 1] - PassingAccuracyTrendsArray[i];
    }
  }

  console.log("Pass Accuracy Array:" + PassingAccuracyTrendsArray);

  console.log(
    "Pass Accuracy Attempts Negative Trend: " +
      passAccuracyAttemptsNegativeTrend
  );
  console.log(
    "Pass Accuracy Attempts Positive Trend: " +
      passAccuracyAttemptsPositiveTrend
  );

  if (passAccuracyAttemptsNegativeTrend > passAccuracyAttemptsPositiveTrend) {
    return (
      <li>
        <h4>
          This player is getting more accurate at passing over time. For each accurate Pass, they make on average make {" "}
          {passAccuracyAttemptsNegativeTrend /
            PassingAccuracyTrendsArray.length}{" "}
          less Passing Attempts.{" "}
        </h4>
      </li>
    );
  } else if (
    passAccuracyAttemptsPositiveTrend > passAccuracyAttemptsNegativeTrend
  ) {
    return (
      <li>
        <h4>
          This player is getting less accurate at passing over time. For each accurate pass, they on average make {" "}
          {Math.floor(
            passAccuracyAttemptsPositiveTrend /
              PassingAccuracyTrendsArray.length
          )}{" "}
          less Pass(es).{" "}
        </h4>
      </li>
    );
  } else
    return (
      <li>
        <h4>This player is not getting more or less accurate over time. </h4>
      </li>
    );
}

function PerMatchGoalConditional() {
  if (
    Math.floor(goalTotal / obj.matches.length) >
    overallGoalAveragePerMatch
  ) {
    return (
      <li>
        This is <b>better</b> than the average rate of{" "}
        {overallGoalAveragePerMatch} goals per match.{" "}
      </li>
    );
  } else if (
    Math.floor(goalTotal / obj.matches.length) <
    overallGoalAveragePerMatch
  ) {
    return (
      <li>
        This is <b>worse</b> than the average rate of{" "}
        {overallGoalAveragePerMatch} goals per match.{" "}
      </li>
    );
  } else return <li>This is the average performance.</li>;
}

function PerMatchGoalAttemptConditional() {
  if (
    Math.floor(goalAttemptsTotal / obj.matches.length) >
    overallGoalAverageAttemptPerMatch
  ) {
    return (
      <li>
        This is <b>better</b> than the average rate of{" "}
        {overallGoalAverageAttemptPerMatch} goals per match.{" "}
      </li>
    );
  } else if (
    Math.floor(goalAttemptsTotal / obj.matches.length) <
    overallGoalAverageAttemptPerMatch
  ) {
    return (
      <li>
        This is <b>worse</b> than the average rate of{" "}
        {overallGoalAverageAttemptPerMatch} goals per match.{" "}
      </li>
    );
  } else return <li>This is the average performance.</li>;
}


function PassingAverageConditionalCheck() {
  if (
    Math.floor(passTotal / obj.matches.length) > overallPassAverage
  ) {
    return (
      <li>
        This is better than the average of <b>{overallPassAverage}</b> sucessful
        passes per game.{" "}
      </li>
    );
  } else if (
    Math.floor(passTotal / obj.matches.length) < overallPassAverage
  ) {
    return (
      <li>
        This is worse than the average of <b>{overallPassAttemptsAverage}</b>{" "}
        sucessful passes per game.{" "}
      </li>
    );
  }
}

function PassAttemptsAverageConditional() {
  if (
    Math.floor((passTotal + passAttemptsTotal) / obj.matches.length) >
    overallPassAverage
  )
    return (
      <li>
        This is more than the average of <b>{overallPassAttemptsAverage}</b>{" "}
        pass attempts per game.{" "}
      </li>
    );
}

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

        <div className="container" data-testid="1stRow">
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
                <h5>
                  This player scores <b> {goalPercentage}%</b> of their goal
                  attempts.{" "}
                </h5>
              </li>

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
                <b> {Math.floor(goalTotal / obj.matches.length)} </b>
                goal(s).
              </li>
              <br></br>
              <PerMatchGoalConditional />

              <br></br>

              <li>
                Per Match, this player makes
                <b>
                  {" "}
                  {Math.floor(
                    (goalAttemptsTotal + goalTotal) /
                      obj.matches.length
                  )}{" "}
                </b>
                goal attempts.
              </li>
              <br></br>

              <PerMatchGoalAttemptConditional />

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
                <br></br>
                <GoalAccuracyTrendsCheck />
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
                    text: "Pass Data",
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
                  <h5>
                    This player successfully passes <b> {passPercentage}% </b>{" "}
                    of their pass attempts.
                  </h5>
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
                  Per Match, this player makes{" "}
                  <b>{Math.floor(passTotal / obj.matches.length)}</b>{" "}
                  sucessful passes.
                </li>
                <br></br>
                <PassingAverageConditionalCheck />

                <br></br>

                <li>
                  Per Match, this player makes{" "}
                  <b>
                    {Math.floor(
                      (passTotal + passAttemptsTotal) /
                        obj.matches.length
                    )}
                  </b>{" "}
                  pass attempts.
                </li>
                <br></br>
                <PassAttemptsAverageConditional />

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

                  <br></br>
                  <PassingAccuracyTrendsCheck />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      </div>
    );
  }
}
