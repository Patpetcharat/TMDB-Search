var gulp = require('gulp');
var watch = require('gulp-watch');
var historyApiFallback = require('connect-history-api-fallback')

var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config');
var bundler = webpack(webpackConfig);

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
		.pipe(sass({outputStyle: 'expanded'}))
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
	return browserify("./src/scripts/app.js", {debug:false})
		.transform("babelify", {presets: ["es2015", "react"]})
		.bundle()
		.on('error', function(err) { console.error(err); this.emit('end'); })
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest('./public/scripts'));
});


/**************************************************
BrowserSync
***************************************************/
// gulp.task('browser-sync', ['html', 'styles', 'assets'], function() {
gulp.task('browser-sync', ['styles'], function() {
	browserSync.init({
		server: {
			baseDir: "public",

			middleware: [
				webpackDevMiddleware(bundler, {
					// IMPORTANT: dev middleware can't access config, so we should
					// provide publicPath by ourselves
					publicPath: webpackConfig.output.publicPath,

					// pretty colored output
					stats: { colors: true }

					// for other settings see
					// http://webpack.github.io/docs/webpack-dev-middleware.html
				}),

				// bundler should be the same as above
				webpackHotMiddleware(bundler),

				// For using React Router, or any client side router
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
