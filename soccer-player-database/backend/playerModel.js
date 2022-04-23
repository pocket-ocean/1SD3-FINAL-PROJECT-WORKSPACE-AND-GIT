const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Potentially add a match array to the schema, what each field is:

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
              MatchID: {
                  type: String,
              },
              Goals: {
                type: Number,
              },
              GoalAttempts: {
                type: Number,
              },
          
              Passes: {
                type: Number,
              },
          
              PassAttempts: {
                type: Number,
              },
            }
          ]
});

module.exports = mongoose.model('Player', Player);