const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username:{type: String, required: true},
    description:{type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date, required: true},
}, {
    timestamps: true, // auto create fields for when it was created/modified
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;