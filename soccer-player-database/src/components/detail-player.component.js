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



export const playerStats = {
  goals: 20,
  attempts: 100,

  matchGoals: [ 2,3,4,0,]
  
};



const state = {
  labels: ['M1', 'M2', 'M3',
           'M4', ],
  datasets: [
    {
      label: 'Goals Per Match',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [playerStats.matchGoals[0], playerStats.matchGoals[1],  playerStats.matchGoals[2],  playerStats.matchGoals[3]]
    }
  ]
}






export const playerData = {
  labels: ["goals", "attempts"],
  datasets: [
    {
      label: "testPlayer",
      data: [playerStats.goals, playerStats.attempts],
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
        <Pie
          data={playerData}
          height="200px"
          width="200px"
          options={{ responsive: false }}
        />
      </div>

      <div>   
        <h1>Accessing Player Match Statistics, Line Graph</h1>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
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
