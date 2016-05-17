var webpack = require('webpack');
var config = require('./webpack.client.config');
var WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack(config), {
	hot: true,
	stats: {
		colors: true,
		chunks: false,
		children: false,
	},
	historyApiFallback: true,
	contentBase: './src/templates/',
}).listen(8888, '0.0.0.0', function (err) {
	if (err) {
		console.log(err);
	}

	console.log('Hot server listening at 0.0.0.0:8888');
});
