import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const playerObject1 = {
  player_name: "Brian O'Brien",
  player_team: "Galway Lions",
  player_position: "Striker",

  goals: [2, 1, 0, 4],
  goalAttempts: [5, 6, 3, 9],
  passes: [10, 28, 15, 13],
  passAttempts: [30, 29, 20, 15],
};

const playerObject2 = {
  player_name: "Iosac Tierney",
  player_team: "Sligo Skylarks",
  player_position: "Striker",

  goals: [1, 3, 1, 5],
  goalAttempts: [10, 6, 12, 10],
  passes: [5, 10, 8, 17],
  passAttempts: [11, 14, 13, 20],
};



const playerObject3 = {
  player_name: "James Stewart",
  player_team: "Roscommon Bears",
  player_position: "Striker",

  goals: [4, 1, 0, 4],
  goalAttempts: [5, 6, 3, 9],
  passes: [10, 28, 15, 13],
  passAttempts: [30, 29, 20, 15],
};



function PlayersList() {
  return (
    <div>
      <p>Welcome to Players List Component!! (hardcoded)</p>

      
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
            <td>Detail</td>
            <td>Edit</td>
          </tr>

          <tr>
          <td>{playerObject2.player_name}</td>
            <td>{playerObject2.player_team}</td>
            <td>{playerObject2.player_position}</td>
            <td>Detail</td>
            <td>Edit</td>
          </tr>

          <tr>
          <td>{playerObject3.player_name}</td>
            <td>{playerObject3.player_team}</td>
            <td>{playerObject3.player_position}</td>
            <td>Detail</td>
            <td>Edit</td>
          </tr>
        </tbody>
      </table>

    <div>
      <p>Welcome to Players List Component! Pulling from MongoDB)</p>




    </div>



















    </div>
  );
}

export default PlayersList;
