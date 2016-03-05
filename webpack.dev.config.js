// For instructions about this file refer to
// webpack and webpack-hot-middleware documentation
var webpack = require('webpack');
var path = require('path');

module.exports = {
	debug: true,
	devtool: '#eval-source-map',
	context: path.join(__dirname, 'src', 'scripts'),

	entry: [
		'webpack/hot/dev-server',
		'webpack-hot-middleware/client',
		'./app'
	],

	output: {
		path: path.join(__dirname, 'public', 'scripts'),
		publicPath: '/scripts/',
		filename: 'bundle.js'
	},

	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],

	module: {
		loaders: [
			{
				test: /\.jsx?$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader',
				query: {
	                presets: ['react', 'es2015']
	            }
			}
		]
	}
};

    