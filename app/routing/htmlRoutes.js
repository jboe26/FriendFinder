
var path = require("path");

module.exports = function(app) {
	// routes to the survey HTML file
	app.get("/survey", function(req, res) {
		res.sendFile(path.join('../public/survey.html'));
	});

	// route for homepage
	app.get(function(req, res) {
		res.sendFile(path.join('/../public/home.html'));
	});
};