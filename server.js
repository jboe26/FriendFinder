
var express = require("express");
var path = require('path');


var app = express();

var app = path();

var PORT = 5000;


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});