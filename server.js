/*
eslint-env node
*/
const express = require('express');
const server = express();

server.use(express.static('build'));
server.use(express.static('public'));

server.use((request, response) => {
	const app = require('./build/bundle.server.js');

	return app.default(request, response);
});

console.log('Listening at localhost on port 8080');
server.listen('8080');
