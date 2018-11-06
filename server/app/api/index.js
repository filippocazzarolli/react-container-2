var router = require("express").Router();
var auth = require("../auth/auth");

var checkUser = [auth.decodeToken(), auth.getFreshUser()];

router.use("/todo", checkUser, require("./todo"));

module.exports = router;
