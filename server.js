
var express = require("express");
var path = require('path');


var app = express();

// var app = path();

var PORT = 3838;


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});