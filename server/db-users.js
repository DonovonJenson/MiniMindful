const db = require('./db.js');

const userSchema = mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model('User', userSchema);

const createUser = (username, password, cb) => {
  const user = new User({
    username: username,
    password: password
  });

  user.save((err, user) => {
    err && console.error(err);
    user && console.log(username, ' was saved');
    cb(user);
  });
};

const verifyUser = (username, password, cb) => {
  User.findOne({ username: username, password: password }, (err, user) => {
    err && cb(null);
    user && cb(user);
  });
};