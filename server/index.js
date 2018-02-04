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

app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // create new user in users table
  // res.send(201, { user_id: 0 });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // lookup in users table of db
  // if username and password match record in db,
  //   res.send(200, { user_id: 0 });
  // else
  //   res.send(401, 'login failed')
});

app.post('/session', (req, res) => {
  const { user_id, duration, focusTimestamps, maxFocus } = req.body;

  // create new session in sessions table
  // res.send(201, 'session logged');
});

app.listen(PORT, function() {
  console.log(`listening at http://localhost:${PORT}!`);
});

// Pings heroku app server to avoid sleep
// setInterval(() => {
//   http.get(INSERT_HEROKU_APP_URL_HERE);
// }, 300000); // every 5 minutes (300000)