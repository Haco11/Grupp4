const mongoose = require("mongoose");
const Sandbox = require("./sandbox");

const CommentSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: Date,
  createdBy: String,
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "like",
    },
  ],
});

const Comment = mongoose.model("comment", CommentSchema);
module.exports = Comment;
