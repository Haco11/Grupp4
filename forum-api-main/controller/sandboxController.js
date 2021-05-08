const Sandbox = require("../model/sandbox");

module.exports = {
  post: async (req, res) => {
    req.body.createdAt = new Date();
    const sandbox = new Sandbox(req.body);

    //Check if name is existing
    const existingSandbox = await Sandbox.findOne({ name: req.body.name });
    if (existingSandbox) {
      res
        .status(409)
        .send(
          `Sandbox name '${req.body.name}' is already taken. Try another name.`
        );
    } else {
      const createdSandbox = await sandbox.save();
      res.status(201).json(createdSandbox);
    }
  },
  delete: async (req, res) => {
    try {
      await Animal.deleteOne({ _id: req.params.id });
    } catch (e) {
      res.status(400).send("Bad request");
    }
    res.status(200).end();
  },
  put: async (req, res) => {
    let animal;
    try {
      await Animal.findByIdAndUpdate(req.params.id, req.body);
      animal = await Animal.findById(req.params.id);
    } catch (e) {
      res.status(400).send("Bad request");
    }
    if (animal) {
      res.json(animal);
    }
  },
  getById: async (req, res) => {
    let animal;
    try {
      animal = await Animal.findById(req.params.id);
    } catch (e) {
      res.status(400).send("Bad request");
    }

    if (animal) {
      res.json(animal);
    } else {
      res.status(404).send("Not found");
    }
  },
};
