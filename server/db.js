const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mindful', {
  useMongoClient: true
});
mongoose.Promise = require('bluebird');


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connection is open');
});

module.exports = db;