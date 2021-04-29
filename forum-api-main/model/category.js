const mongoose = require("mongoose");
const Sandbox = require('./sandbox');
const Thread = require("./thread");

const CategorySchema = new mongoose.Schema({
  name: String,
  createdAt: Date,
  threads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "thread",
    },
  ],
});

CategorySchema.post('remove', async (doc, next) => {
  //remove category from sandbox
  const sandbox = await Sandbox.findOne({ categories: doc._id });
  
  if (sandbox) {
    sandbox.categories = sandbox.categories.filter(category => category.toString() != doc._id.toString());
    sandbox.markModified("categories");
    await sandbox.save();
  }
  
  //remove threads
  await doc.threads.forEach(async (threadId) => {
    const thread = await Thread.findById(threadId);
    thread.remove();
  });

  next();
})

const Category = mongoose.model("category", CategorySchema);
module.exports = Category;