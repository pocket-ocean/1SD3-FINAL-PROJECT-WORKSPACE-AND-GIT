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


var idToBeSliced = window.location.pathname;
const id = idToBeSliced.substring(9);
console.log(idToBeSliced);
console.log(id);



function getPlayer(){




}



function DataVis () {













  

  return (
    <div>
    <p>Welcome to the working data vis component!</p>
    <p>Player name etc</p>


</div>

  )

}





export default DataVis;