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
  Title,  Filler
} from "chart.js";

import { Pie, Line  } from "react-chartjs-2";


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





export const Player = {

  player_name: "Brian O'Brien",
  player_dob: "08/06/1992",
  player_team: "Galway Lions",
  player_goals = [2,3,4,0],
  player_goal_attempts = [22, 44, 32, 11],
  player_passes = [10, 14, 16, 8],
  player_pass_attempts [15, 17, 19, 12],

  totalgoals: player_goals.reduce((a, b) => a + b, 0),
  totalgoalattempts: player_goal_attempts.reduce((a, b) => a + b, 0),

  totalpasses: player_passes.reduce((a, b) => a + b, 0),
  totalpassattempts: player_pass_attempts.reduce((a, b) => a + b, 0),

};






const lineData = {
  labels: ["M1", "M2", "M3", "M4",],
  datasets: [
    {
      label: "Goals Per Match",
      data: [Player.player_goals[0], Player.player_goals[1],  Player.player_goals[2], Player.player_goals[3]],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Goal Attempts Per Match",
      data: [Player.player_goal_attempts[0], Player.player_goal_attempts[1],  Player.player_goal_attempts[2], Player.player_goal_attempts[3]],
      fill: false,
      borderColor: "#742774"
    }
  ]
};



export const PieData = {
  labels: ["goals", "attempts"],
  datasets: [
    {
      label: "testPlayer",
      data: [Player.totalgoals, Player.totalgoalattempts],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],

      borderWidth: 1,
    },
  ],
};





function DetailPlayer() {
  return (
    <div>

      <div>
        <h1>Accessing Player Object Pie!</h1>
        <h3>{Player.player_name}'s Statistics</h3>
        <Pie
          data={PieData}
          height="200px"
          width="200px"
          options={{ responsive: false }}
        />
      </div>

      <div>   
        <h1>Accessing Player Goal and Goal Attempts LINE GRAPH</h1>
        <Line
          data={lineData}
          options={{
            title:{
              display:true,
              text:'Player Goals and Attempts',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
          height="200px"
          width="200px"
          options={{ responsive: false }}  />
      </div>
    </div>
  );
}

export default DetailPlayer;
