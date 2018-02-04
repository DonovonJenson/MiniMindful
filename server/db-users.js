const User = require('./db.js').User;

module.exports = {
  createUser: (username, password, cb) => {
    const user = new User({
      username: username,
      password: password
    });

    user.save((err, user) => {
      err && console.error(err);
      user && console.log(username, ' was saved');
      cb(user);
    });
  },

  verifyUser: (username, password, cb) => {
    User.findOne({ username: username, password: password }, (err, user) => {
      err && cb(null);
      user && cb(user);
    });
  }
};