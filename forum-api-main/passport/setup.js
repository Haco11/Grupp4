const passport = require("passport");
const BasicStrategy = require("passport-http").BasicStrategy;
const User = require("../model/user");

passport.use(new BasicStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (user.password !== password) { return done(null, false); }
        return done(null, user);
      });
    }
  ));

module.exports = passport;