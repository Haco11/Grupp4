const Sandbox = require("../model/sandbox");

const sandboxMiddleware = async (req, res, next) => {
  if (!req.params.sandboxName) {
    next();
  } else {
    const sandbox = await Sandbox.findOne({ name: req.params.sandboxName });
    if (sandbox) {
      req.sandbox = sandbox;
      next();
    } else {
      res.status(404).send("Sandbox does not exists").end();
    }
  }
};

module.exports = sandboxMiddleware;