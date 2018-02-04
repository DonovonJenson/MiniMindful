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

app.listen(PORT, function() {
  console.log(`listening at http://localhost:${PORT}!`);
});


// Pings heroku app server to avoid sleep
// setInterval(() => {
//   http.get(INSERT_HEROKU_APP_URL_HERE);
// }, 300000); // every 5 minutes (300000)