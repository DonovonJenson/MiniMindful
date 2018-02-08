const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');

const dbUsers = require('./db-users.js');
const dbSessions = require('./db-sessions.js');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  dbUsers.createUser(username, password, (user) => {
    !user && res.status(503).send('signup failed');
    user && res.status(201).send({user_id: user.id});
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  dbUsers.verifyUser(username, password, (user) => {
    !user && res.status(401).send('login failed');
    user && res.status(200).send({user_id: user.id});
  });
});

app.post('/session', (req, res) => {
  dbSessions.createSession(req.body, (session) => {
    !session && res.status(503).send('session logging failed');
    session && res.status(201).send('session logged');
  });
});

app.listen(PORT, function() {
  console.log(`listening at http://localhost:${PORT}!`);
});

// Pings heroku app server to avoid sleep
// setInterval(() => {
//   http.get(INSERT_HEROKU_APP_URL_HERE);
// }, 300000); // every 5 minutes (300000)