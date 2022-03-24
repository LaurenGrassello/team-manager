const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Player name is required"],
        minlength: [2, "Player name must be at least two characters"]
    },
    position: {
        type: String,
        required: [false]
    }
}, {timestamps: true});

module.exports.Team = mongoose.model('Team', TeamSchema);