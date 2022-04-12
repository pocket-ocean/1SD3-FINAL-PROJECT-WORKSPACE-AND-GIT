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
  Legend
);


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const Linedata = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const playerStats = {
  goals: 20,
  attempts: 100,

  matches: [
    (match1 = { goals: 1 }),
    (match2 = { goals: 4 }),
    (match3 = { goals: 2 }),
    (match4 = { goals: 0 }),
  ],
};

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

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// <h1>Test Chart.js Default pie!</h1>
{
  /* <Pie
data={data}
height="200px"
width="200px"
options={{ responsive: false }}
/> */
}

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
        <h1>Accessing Player Match Statistics</h1>
        <Line options={options} data={Linedata} />
      </div>
    </div>
  );
}

export default DetailPlayer;
