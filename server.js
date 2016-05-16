var webpack = require('webpack');
var express = require('express');
var config = {
	client: require('./webpack.client.config.js'),
	server: require('./webpack.server.config.js'),
};

var server = express();
var bundleValid = false;
var compiler = webpack(config.server);

// Set up the compiler
compiler.plugin('compile', function () {
	if (bundleValid) {
		bundleValid = false;
		delete require.cache[require.resolve('./build/bundle.server.js')];
	}

	console.log('Bundling...');
});

compiler.plugin('done', function (stats) {
	console.log('Bundling completed!');
	console.log(stats.toString({
		colors: true,
		chunks: false,
		children: false,
	}));
	console.log('');

	bundleValid = true;
});

compiler.watch({}, function (error, stats) {
	if (error) {
		console.log('Something went wrong while building the server bundle.');
		console.log(error);
	}


});

// Set up the regular server
server.use(express.static('build'));
server.use(express.static('public'));

server.use(function (request, response) {
	var app;

	if (!bundleValid) {
		return response.status(400).end('Bundle not valid');
	}

	app = require('./build/bundle.server.js');

	return app.default(request, response);
});

console.log('Listening at localhost on port 8080');
server.listen('8080');
