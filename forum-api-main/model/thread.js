const mongoose = require("mongoose");
const Category = require('./category');
const Like = require('./like');
const Comment = require('./comment');

const ThreadSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdBy: String,
  createdAt: Date,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "like",
    },
  ],
});

ThreadSchema.post('remove', async (doc, next) => {
  //remove thread from category
  // const category = await Category.findOne({ categories: doc._id });
  
  // if (category) {
  //   category.threads = category.threads.filter(thread => thread.toString() != doc._id.toString());
  //   category.markModified("threads");
  //   await category.save();
  // }

  //remove likes
  await doc.likes.forEach(async (likeId) => {
    const like = await Like.findById(likeId);
    like.remove();
  });

  //remove comments
  await doc.comments.forEach(async (commentId) => {
    const comment = await Comment.findById(commentId);
    comment.remove();
  });

  next();
})

const Thread = mongoose.model(
  "thread",
  ThreadSchema
);
module.exports = Thread;
