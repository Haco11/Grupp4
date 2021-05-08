const Thread = require("../model/thread");
const Comment = require("../model/comment");

module.exports = {
  get: async (req, res) => {
    try {
      const thread = await Thread.findById(req.params.threadId).populate(
        "comments"
      );

      if (!thread) {
        res.status(404).send("Thread not found");
      } else {
        res.json(thread.comments);
      }
    } catch (e) {
      console.log(e);
      res.status(500).end();
    }
  },
  post: async (req, res) => {
    const thread = await Thread.findById(req.params.threadId);
    console.log(req.params.threadId, thread);
    if (!thread) {
      res.status(404).send("Thread not found");
    } else {
      req.body.createdAt = new Date();
      const comment = new Comment(req.body);
      thread.comments.push(comment);
      await thread.save();
      await comment.save();
      res.status(201).json(comment);
    }
  },
  // delete: async (req, res) => {
  //   const thread = await Thread.findById(req.params.threadId);
  //   if (!thread) {
  //     res.status(404).send("Thread not found");
  //   } else {
  //     const deleteResult = await Comment.findByIdAndDelete(req.params.commentId);

  //     if (deleteResult) {
  //       thread.comments = thread.comments.filter(
  //         (commentId) => commentId != req.params.commentId
  //       );
  //       try {
  //         await thread.save();
  //       } catch (e) {
  //         res.send(500).end();
  //         console.log(e);
  //       }
  //       res.send(200).end();
  //     } else {
  //       res.send(404).end();
  //     }
  //   }
  // },
};
