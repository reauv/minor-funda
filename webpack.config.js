const PATH = __dirname;
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	// Context of the app
	context: PATH,

	devtool: 'eval',

	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080',
		'webpack/hot/only-dev-server',
		'./src/index'
	],

	output: {
		path: `${PATH}/hot`,
		filename: 'bundle.js'
	},

	// Instructions to how resolve the modules
	resolve: {
		root: `${PATH}/src/app`,
		extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.css'],
		fallback: path.join(__dirname, 'node_modules'),
		alias: {
			env: path.join(PATH, 'env'),
		}
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: `${PATH}/src/templates/index.html`,
			inject: true
		}),
	],

	postcss: [
		require('postcss-modules-values'),
		require('postcss-nested'),
		require('autoprefixer'),
	],

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['react-hot', 'babel'],
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
			},
		],
	}
};
