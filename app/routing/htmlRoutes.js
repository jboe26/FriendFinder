
var path = require("path");

module.exports = function(app) {
	// routes to the survey HTML file
	app.get("/survey", function(req, res) {
		res.sendFile(path.join('/app/public/survey.html'));
	});

	// route for homepage
	app.use(function(req, res) {
		res.sendFile(path.join('/app/public/home.html'));
	});
};