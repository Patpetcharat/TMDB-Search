// For instructions about this file refer to
// webpack and webpack-hot-middleware documentation
var webpack = require('webpack');
var path = require('path');

module.exports = {
	debug: false,
	context: path.join(__dirname, 'src', 'scripts'),

	entry: './app',

	output: {
		path: path.join(__dirname, 'public', 'scripts'),
		publicPath: '/scripts/',
		filename: 'bundle.js'
	},

	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),
    	new webpack.optimize.UglifyJsPlugin()
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

    