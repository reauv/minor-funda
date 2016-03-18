var webpack = require('webpack');
var express = require('express');
var config = {
	client: require('./webpack.client.config.js'),
	server: require('./webpack.server.config.js'),
};

var server = express();

webpack(config.server, function (err) {
	console.log(err);
});

server.use(express.static('build'));

server.use(function (request, response) {
	var app = require('./build/bundle.server.js');

	return app.default(request, response);
});

console.log('Listening at localhost on port 8080');
server.listen('8080');
