const Thread = require("../model/thread");
const Comment = require("../model/comment");
const Like = require("../model/like");

module.exports = {
  postForThread: async (req, res) => {
    const thread = await Thread.findById(req.params.threadId);

    if (!thread) {
      res.status(404).send("Thread not found");
    } else {
      req.body.createdAt = new Date();
      const like = new Like(req.body);
      thread.likes.push(like);
      await like.save();
      await thread.save();
      res.status(201).json(like);
    }
  },
  postForComment: async (req, res) => {
    const comment = await Comment.findById(req.params.commentId);

    if (!comment) {
      res.status(404).send("Comment not found");
    } else {
      req.body.createdAt = new Date();
      const like = new Like(req.body);
      comment.likes.push(like);
      await like.save();
      await comment.save();
      res.status(201).json(like);
    }
  },
};
