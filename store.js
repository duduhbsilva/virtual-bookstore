var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.post('/v1/public/payments', function(req, res) {
	var request1 = require('request');
	request1('http://localhost:8083/v1/public/users', function (error, response, body) {
		var request2 = require('request');
		request2('http://localhost:8084/v1/public/creditCards', function (error, response, body) {
			var request3 = require('request');
			request3('http://localhost:8082/v1/public/validations', function (error, response, body) {
				res.status(200);
			});
		});
	});
    res.status(400);
});

app.listen(8081, function() {
	console.log('Servidor rodando na porta 8081.');
});