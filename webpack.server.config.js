// For instructions about this file refer to
// webpack and webpack-hot-middleware documentation
var webpack = require('webpack');
var path = require('path');
var fs = require('fs')

module.exports = {
	debug: false,

	entry: './server.js',

	// keep node_module paths out of the bundle
	externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
		'react-dom/server'
	]).reduce(function (ext, mod) {
		ext[mod] = 'commonjs ' + mod
		return ext
	}, {}),

	output: {
		filename: 'server.bundle.js'
	},

	target: "node",

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

    