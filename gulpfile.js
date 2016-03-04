var gulp = require('gulp');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var historyApiFallback = require('connect-history-api-fallback')

var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var webpackDevConfig = require('./webpack.dev.config');
var bundlerDev = webpack(webpackDevConfig);
var webpackProductionConfig = require('./webpack.production.config');
var bundlerProduction = webpack(webpackProductionConfig);

var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var nano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');

var browserSync = require('browser-sync').create();


/**************************************************
Development Tasks
***************************************************/
gulp.task('styles', function(){
	return gulp.src('src/styles/app.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest('public/styles'))
		.pipe(browserSync.stream({match: '**/*.css'}));
});


/**************************************************
Production Tasks
***************************************************/
gulp.task('styles-production', function(){
	return gulp.src('src/styles/app.scss')
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(autoprefixer())
		.pipe(nano())
		.pipe(gulp.dest('public/styles'))
});

gulp.task('scripts-production', function(){
	webpack(webpackProductionConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack", err);
		
		gutil.log("[webpack]", stats.toString({
			// output options
		}));
	});
});


/**************************************************
BrowserSync
***************************************************/
gulp.task('browser-sync', ['styles'], function() {
	browserSync.init({
		server: {
			baseDir: "public",

			middleware: [
				webpackDevMiddleware(bundlerDev, {
					// IMPORTANT: dev middleware can't access config, so we should
					// provide publicPath by ourselves
					publicPath: webpackDevConfig.output.publicPath,

					// pretty colored output
					stats: { colors: true }

					// for other settings see
					// http://webpack.github.io/docs/webpack-dev-middleware.html
				}),

				// bundlerDev should be the same as above
				webpackHotMiddleware(bundlerDev),

				// Always point to index for client side routing
				historyApiFallback()
			]
		},

		open: false // Don't automatically open a new window
	});

	gulp.watch('src/styles/**/*', ['styles']);
});

/**************************************************
Gulp Tasks
***************************************************/
gulp.task('default', ['browser-sync']);
gulp.task('production', ['styles-production', 'scripts-production']);
