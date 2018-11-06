var config = require("./config");
var app = require("./app/server");
var logger = require("./util/logger");

app.listen(config.port);
logger.log("listening on http://localhost:" + config.port);
