var express = require("express");
var app = new express();
var api = require("./api");
var auth = require("./auth");
var config = require("../config");
var logger = require("../util/logger");

// TODO: seed database
// if (config.seed) {
// 	require("./util/seed");
// }

require("./middleware")(app);

// setup the api
app.use("/api", api);
app.use("/auth", auth);

// set up global error handling
app.use(function(err, req, res, next) {
	// if error thrown from jwt validation check
	if (err.name === "UnauthorizedError") {
		res.status(401).send("Invalid token");
		return;
	}

	logger.error(err.stack);
	res.status(500).send("Oops");
});

module.exports = app;
