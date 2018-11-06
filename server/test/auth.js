process.env.NODE_ENV = "testing";

var app = require("../app/server");
var config = require("../config");
var chai = require("chai");
var chaiHttp = require("chai-http");
var should = chai.should();

chai.use(chaiHttp);

var token = "";

describe("🍄 AUTH", function() {
	describe("👉 signin", function() {
		it("should return a valid token for test user", function(done) {
			var data = {
				username: "test",
				password: "test"
			};
			chai.request(app)
				.post("/auth/signin")
				.send(data)
				.end(function(req, res) {
					res.should.have.status(200);
					res.body.should.have.property("token");
					token = "Bearer " + res.body.token;
					done();
				});
		});
	});
});
