const User = require('../model/user');


module.exports = {
    post: async (req, res) => {
        const existingUser = await User.findOne({ username: req.body.username })
        if (existingUser) {
            res.status(409).send("Username is already taken")
        } else {
            const user = new User(req.body);
            const createdUser = await user.save();
            res.status(201).json(createdUser)
        }
        
    }
}