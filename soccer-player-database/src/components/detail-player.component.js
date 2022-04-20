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
  ],
};

//Logging simple infrormation from the object
console.log("Player object name: " + playerObject1.player_name);
console.log("Player has played in " + playerObject1.matches.length + " matches.");
console.log("Match 1 Goals for this player: " + playerObject1.matches[0].goals);
console.log("Listing all goals for each match this plaer has done! ")

//Listing all goals in sequence
for (let i = 0; i < playerObject1.matches.length; i++){

  console.log(playerObject1.matches[i].goals)

}
      


//Creating an Array of Goals

for (let i = 0; i < playerObject1.matches.length; i++){

  console.log(playerObject1.matches[i].goals)


}

//Summing this Array of Goals


//Creating an Array of Goal Attempts


//Summing this Array of Goal Attempts


//Creating an Array of Passess


//Summing this Array of Passes


//Creating an Array of Pass Attempts


//Summing this Array of Pass Attempts 


//Creating an array of 

//I want to them sum this array as I need both! 










function SampleDetailPlayer() {
  return (
   
    <div>
    <p>Here we go!</p>
    </div>
    );
  }
  
  export default SampleDetailPlayer;





// //tallying goals by creating a goal total Array

// //tallying goal attempts
// var goalAttemptsTotal = 0;
// for (let i = 0; i < playerObject1.goalAttempts.length; i++) {
//   goalAttemptsTotal = +playerObject1.goalAttempts[i];
// }
// console.log("Goal Attempts:" + goalAttemptsTotal);

// //getting a goal percentage:

// var goalPercentage = Math.floor(
//   (goalTotal / (goalAttemptsTotal + goalTotal)) * 100
// );

// //tallying passes

// var passTotal = 0;
// for (let j = 0; j < playerObject1.passes.length; j++) {
//   passTotal = +playerObject1.passes[j];
// }
// console.log("Pass Total:" + passTotal);

// //tallying passes attempts

// var passAttemptsTotal = 0;
// for (let k = 0; k < playerObject1.passAttempts.length; k++) {
//   passAttemptsTotal = +playerObject1.passAttempts[k];
// }
// console.log("Pass Attempts:" + passAttemptsTotal);

// //getting a pass percentage:

// var passPercentage = Math.floor(
//   (passTotal / (passAttemptsTotal + passTotal)) * 100
// );

// //Generating GoalPie Data

// const GoalPieData = {
//   labels: ["Goals", "Goal Attempts"],
//   datasets: [
//     {
//       label: "Goals and Goal Attempts",
//       backgroundColor: ["#B21F00", "#C9DE00"],
//       hoverOffset: 4,
//       data: [goalTotal, goalAttemptsTotal],
//     },
//   ],
// };

// //Generating PassPie Data

// const PassPieData = {
//   labels: ["Passes", "Pass Attempts"],

//   datasets: [
//     {
//       label: "Passes and Pass Attempts",
//       backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
//       hoverOffset: 4,

//       data: [passTotal, passAttemptsTotal],
//     },
//   ],
// };

// //Naming an average goal percentage

// var overallGoalAverage = 25;

// //Naming the average pass percentage

// var overallPassAverage = 35;

// //Conditional Rendering
// function GoalConditionalCheck() {
//   if (goalPercentage > overallGoalAverage) {
//     return (
//       <li>
//         This is better than the average of <b> {overallGoalAverage}%.</b>
//       </li>
//     );
//   } else if (goalPercentage == overallGoalAverage) {
//     return <li>This is the goal success average.</li>;
//   } else
//     return (
//       <li>
//         This is worse than the average of <b> {overallGoalAverage}%.</b>
//       </li>
//     );
// }

// function PassConditionalCheck() {
//   if (passPercentage > overallPassAverage) {
//     return (
//       <li>
//         This is better than the average of <b> {overallPassAverage}%.</b>
//       </li>
//     );
//   } else if (passPercentage == overallPassAverage) {
//     return <li>This is the pass success average.</li>;
//   } else
//     return (
//       <li>
//         This is worse than the average of <b> {overallPassAverage}%.</b>
//       </li>
//     );
// }

// //Line chart data

// const GoalLineData = {
//   labels: ["M1", "M2", "M3", "M4"],
//   datasets: [
//     {
//       label: "Goals",
//       data: [
//         playerObject1.goals[0],
//         playerObject1.goals[1],
//         playerObject1.goals[2],
//         playerObject1.goals[3],
//       ],
//       fill: true,
//       backgroundColor: "rgba(75,192,192,0.2)",
//       borderColor: "#B21F00",
//     },
//     {
//       label: "Attempted Goals",
//       data: [
//         playerObject1.goalAttempts[0],
//         playerObject1.goalAttempts[1],
//         playerObject1.goalAttempts[2],
//         playerObject1.goalAttempts[3],
//       ],
//       fill: false,
//       borderColor: "#C9DE00",
//     },
//   ],
// };

// const PassLineData = {
//   labels: ["M1", "M2", "M3", "M4"],
//   datasets: [
//     {
//       label: "Passes",
//       data: [
//         playerObject1.passes[0],
//         playerObject1.passes[1],
//         playerObject1.passes[2],
//         playerObject1.passes[3],
//       ],
//       fill: true,
//       backgroundColor: "rgba(75,192,192,0.2)",
//       borderColor: "rgb(255, 99, 132)",
//     },
//     {
//       label: "Attempted Passes",
//       data: [
//         playerObject1.passAttempts[0],
//         playerObject1.passAttempts[1],
//         playerObject1.passAttempts[2],
//         playerObject1.passAttempts[3],
//       ],
//       fill: false,
//       borderColor:"rgb(54, 162, 235)",
//     },
//   ],
// };


// //GoalTrendConditionalCheck

// function GoalTrendConditionalCheck ()
// {

//   return (

//     <li>This will assess sucessful goals over time, they are either increasing or decreasing, and if the player's attempted goals are trending up or down over time. </li>

//     )

// };




// //PassTrendConditionalCheck


// function PassTrendConditionalCheck(){

//   return (

//     <li>This will assess sucessful passes over time, they are either increasing or decreasing, and if the player's attempted passess are trending up or down over time. </li>

//     )

// };


// // What is shown to the user! 


  
   
   
    // <div>
//       <h3>This is a Player Data Vis Example</h3>

//       <table className="table table-striped" style={{ marginTop: 20 }}>
//         <thead>
//           <tr>
//             <th> Player Name</th>
//             <th> Player Team </th>
//             <th> Player Position </th>
//           </tr>
//         </thead>

//         <tbody>
//           <tr>
//             <td>{playerObject1.player_name}</td>
//             <td>{playerObject1.player_team}</td>
//             <td>{playerObject1.player_position}</td>
//           </tr>
//         </tbody>
//       </table>

//       <div className="container">
//         <div className="row">
//           <div className="col-sm-4">
//             <h3>Total Goals and Goal Attempts</h3>
//             <Pie
//               data={GoalPieData}
//               options={{
//                 title: {
//                   display: true,
//                   text: "Goals and Attempts",
//                   fontSize: 20,
//                 },
//                 legend: {
//                   display: true,
//                   position: "right",
//                 },
//               }}
//             />
//           </div>

          
//           <div className="col-sm-4">
//             <h3>Goals and Attempts Over Time</h3>
//             <Line data={GoalLineData} />
//           </div>




//           <div className="col-sm-4">
//             <h3>Goal Breakdown</h3>
//             <ul>
//               <li>
//                 This player scores <b> {goalPercentage}%</b> of their goals
//                 attempts.
//               </li>
//               <br></br>
//               <GoalConditionalCheck />

//               <br></br>

//               <li>
//                 This player successfully passes <b> {passPercentage}% </b> of
//                 their pass attempts.
//               </li>

//               <br></br>
//               <PassConditionalCheck />

//               <br></br>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <br></br>

//       <div className="container">
      
//         <div className="row">
//         <div className="col-sm-4">
//             <h3>Total Passes and Pass Attempts</h3>
//             <Pie
//               data={PassPieData}
//               options={{
//                 title: {
//                   display: true,
//                   text: "Average Rainfall",
//                   fontSize: 20,
//                 },
//                 legend: {
//                   display: true,
//                   position: "right",
//                 },
//               }}
         


//             />
//           </div>

          

//           <div className="col-sm-4">
//             <h3>Passes and Attempts Over Time</h3>
//             <Line data={PassLineData} />
//           </div>

//           <div className="col-sm-4">
//             <h3>Passing Breakdown</h3>
            
//             <ul>  

//             <GoalTrendConditionalCheck/>

//                 <br></br>
//             <PassTrendConditionalCheck/>

//                 <br></br>

                


//             </ul>

//           </div>
//         </div>
//       </div>

      
//     </div>
//   );
// }

// export default SampleDetailPlayer;
