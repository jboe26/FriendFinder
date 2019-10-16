// Dependencies

var express = require('express');
// var app = express.createServer();

var path = require('path');

// Sets up the Express App

var app = express();
// var app2 = path();
var PORT = 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static('./app/public'))

// For serving of static CSS
app.use(express.static(__dirname + "/app/data/style.css"));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

