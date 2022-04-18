import React, { Component } from "react";

function PlayersList() {
  return (
    <div>
      <p>Welcome to Players List Component!!</p>


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
            <td>TestName</td>
            <td>TestTeam</td>
            <td>TestPosition</td>
            <td>Detail</td>
            <td>Edit</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default PlayersList;
