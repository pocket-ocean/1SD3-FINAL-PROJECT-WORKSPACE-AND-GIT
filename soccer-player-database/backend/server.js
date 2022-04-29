//creating an Express server, attching the cors and body-parser middleware

//the server is listening on port 4000

//You can start the server using nodemon - you should see in your terminal:
//[nodemon] starting `node server.js`
//Server is running on Port: 4000

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const playerRoutes = express.Router();
const PORT = 4000;

let Player = require("./playerModel");

app.use(cors());
app.use(bodyParser.json());

//method for connecting to the mongodb database
mongoose.connect("mongodb://127.0.0.1:27017/players", {
  useNewUrlParser: true,
});
const connection = mongoose.connection;

//outputting a string to the console when the connection is established
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

//this is an end point which is delivering a available todos items
playerRoutes.route("/").get(function (req, res) {
  Player.find(function (err, players) {
    if (err) {
      console.log(err);
    } else {
      res.json(players);
    }
  });
});

//gets a single player by their id
playerRoutes.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Player.findById(id, function (err, player) {
    res.json(player);
  });
});

//updates a single player by their id
playerRoutes.route("/update/:id").post(function (req, res) {
  Player.findById(req.params.id, function (err, player) {
    if (!player) res.status(404).send("data is not found");
    else player.player_name = req.body.player_name;
    player.player_team = req.body.player_team;
    player.player_position = req.body.player_position;
    player.player_dob = req.body.player_dob;
    player.matches = req.body.matches;

    player
      .save()
      .then((player) => {
        res.json("Player Updated!");
      })
      .catch((err) => {
        res.status(400).send("Edit not possible");
      });
  });
});

//allows you to add a player 
playerRoutes.route("/add").post(function (req, res) {
  console.log(req.body);
  let player = new Player(req.body);
  player
    .save()
    .then((player) => {
      res.status(200).json({ player: "player added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new player failed");
    });
});

app.use("/players", playerRoutes);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
