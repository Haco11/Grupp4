const mongoose = require("mongoose");

const SandboxSchema = new mongoose.Schema({
  name: String,
  ownerEmail: String,
  createdAt: Date,
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category'
  }],
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }],
})

const Sandbox = mongoose.model(
    "sandbox",
    SandboxSchema
  );
module.exports = Sandbox;   