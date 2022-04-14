const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 4000;

//each index in the array corresponds to the same match, eg index 0 is for Match 1, index 1 is for Match 2, and so on


let Player = new Schema({
    player_name: {
        type: String
    },
    player_team: {
        type: String
    },
    player_dob: {
        type: Date
    },
    player_goals: {
        type: Array,
    }
    player_goal_attempts: {
        type: Array
    }

    player_passes: {
        type: Array
    }
    player_pass_attempts: {
        type: Array
    }
});

module.exports = mongoose.model('Player', Player);