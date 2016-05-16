const webpack = require('webpack');
const config = require('./webpack.server.config.js');

const compiler = webpack(config);

compiler.watch({}, (err, stats) => {
	if (err) {
		console.log('Something went wrong while building the server bundle.');
		console.log(err);
	}

	console.log('\x1b[34m%s\x1b[0m', 'New server bundle');
	console.log(stats.toString({
		colors: true,
		chunks: false,
		children: false,
	}));
	console.log('');
});
