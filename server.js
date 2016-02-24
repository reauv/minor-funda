var webpack = require('webpack');
var config = require('./webpack.config');
var WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack(config), {
	hot: true,
	historyApiFallback: true,
	contentBase: './src/templates/',
}).listen(8080, '0.0.0.0', function (err, result) {
	if (err) {
		console.log(err);
	}

	console.log('Listening at 0.0.0.0:8080');
});
