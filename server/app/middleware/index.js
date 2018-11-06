var morgan = require("morgan");
var bodyParser = require("body-parser");
var config = require("../../config");

module.exports = function(app) {
	if (process.env.NODE_ENV === config.dev) {
		app.use(morgan("dev"));
	}
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
};
