const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mindful');
mongoose.Promise = require('bluebird');


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connection is open');
});

const userSchema = mongoose.Schema({
  username: String,
  password: String
});

const sessionSchema = mongoose.Schema({
  user_id: Number,
  createdAt: Date,
  duration: Number,
  focusTimestamps: Array,
  maxFocus: Number
});

module.exports = {
  User: mongoose.model('User', userSchema),
  Session: mongoose.model('Session', sessionSchema),
};
