const mongoose = require("mongoose");
const User = mongoose.model("user", new mongoose.Schema({
    username: String,
    password: String
}));
module.exports = User;



