const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String, //type
        required: true,
        unique: true, //
        trim: true, // trim white spaces off the end
        minlength: 3 // minimum of 3 characters
    },
}, {
    timestamps: true, // auto create fields for when it was created/modified
});

const User = mongoose.model('User', userSchema);

module.exports = User;