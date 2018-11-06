var signToken = require("./auth").signToken;

exports.signin = function(req, res, next) {
	var token = signToken(req.user._id);
	res.json({ token: token });

	/*
	var username = req.body.username;
    var password = req.body.password;

	if (!username || !password) {
		res.sendStatus(400);
	}

	// TODO: check user exist on db
	// res.sendStatus(401);


	return jwt.sign(
		{_id: id},
		config.secrets.jwt,
		{expiresInMinutes: config.expireTime}
	  );
	

	res.json({
		message: "TEST"
	});
	*/
};
