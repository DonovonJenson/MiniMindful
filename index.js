const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.post('/sessionEnd', (req, res) =>{
  const sessionData = req.body;
  res.send('I got it');
});

app.post('/login', (req, res) => {
  const loginData = req.body;
  if (true) {
    res.send({user_id: 4});
  }
  //Needs to check for existence of username/password combo
  //If correct, return logged in status
  //If incorrect redirect to login page
});

app.post('/signup', (req, res) => {
  const signUpData = req.body;
  //Needs to check for existence of username
  //If username exists, say there's a problem
  //If no username, add to database
});


app.listen(PORT, function() {
  console.log(`listening at http://localhost:${PORT}!`);
});


// Pings heroku app server to avoid sleep
// setInterval(() => {
//   http.get(INSERT_HEROKU_APP_URL_HERE);
// }, 300000); // every 5 minutes (300000)