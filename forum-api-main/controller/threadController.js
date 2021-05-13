const Category = require("../model/category");
const Thread = require("../model/thread");

module.exports = {
  get: async (req, res) => {
    try {
      const category = await Category.findById(req.params.categoryId).populate(
        "threads"
      );

      if (!category) {
        res.status(404).send("Category not found");
      } else {
        res.json(category.threads);
      }
    } catch (e) {
      console.log(e);
      res.status(500).end();
    }
  },
  post: async (req, res) => {
    const category = await Category.findById(req.params.categoryId);

    if (!category) {
      res.status(404).send("Category not found");
    } else {
      req.body.createdAt = new Date();
      const thread = new Thread(req.body);
      category.threads.push(thread);
      await category.save();
      await thread.save();
      res.status(201).json(thread);
    }
  },
  delete: async (req, res) => {
    const category = await Category.findById(req.params.categoryId);
    if (!category) {
      res.status(404).send("Category not found");
    } else {
      const deleteResult = await Thread.findByIdAndDelete(req.params.threadId);

      if (deleteResult) {
        category.threads = category.threads.filter(
          (threadId) => threadId != req.params.threadId
        );
        try {
          await category.save();
        } catch (e) {
          res.send(500).end();
          console.log(e);
        }
        res.send(200).end();
      } else {
        res.send(404).end();
      }
    }
  },
};
