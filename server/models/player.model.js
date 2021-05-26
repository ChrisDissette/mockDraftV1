const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({

    playerName:{
        type: String,
        required:[true, "⛔ must include a player name"],
        validate:{
            validator: (input) => {
                return input.length >= 1;
            },
            message: (input) => `${input.value} is not 3 characters or more!`
        }
    },
    teamName:{
        type: String,
        required:[true, "⛔must include an image url"],
        validate:{
            validator: (input) => {
                return input.length >= 1;
            },
            message: (input) => `${input.value} is not a valid URL!`
        }
    },
    ranking:{
        type: Number,
        required:[true, "⛔ Cannot be ranked lower than 1"],
        validate:{
            validator: (input) => {
                return input => 0;
            },
            message: (input) => `Player must be ranked higher than ${input.value}!`
        }
    },
    aDP:{
        type: Number,
        required:[true, "⛔ Cannot be be drafted lower than 1"],
        validate:{
            validator: (input) => {
                return input => 0;
            },
            message: (input) => `Player must be ranked higher than ${input.value}!`
        }
    },
    ptsLastYear:{
        type: Number,
        required:[true, "⛔ This field is required"],
    },
    isSelected:{
        type: Boolean,
        default: false,
    },
    playerPosition:{
        type: String,
        required:[true, "⛔must include crew position"],
        validate:{
            validator: (input) => {
                return input.length >= 1;
            },
            message: (input) => `${input.value} is not 3 characters or more!`
        }
    },
})

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;