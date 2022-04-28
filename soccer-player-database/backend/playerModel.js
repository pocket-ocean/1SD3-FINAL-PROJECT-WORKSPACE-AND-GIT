const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Player = new Schema({
    player_name: {
        type: String
    },
    player_team: {
        type: String
    },
 

    player_position: {
        type: String
    },
    player_dob: {

        type: Date },

        matches:[
            {
          
              goals: {
                type: Number,
              },
              goalAttempts: {
                type: Number,
              },
          
              passes: {
                type: Number,
              },
          
              passAttempts: {
                type: Number,
              },
            }
          ]
});

module.exports = mongoose.model('Player', Player);