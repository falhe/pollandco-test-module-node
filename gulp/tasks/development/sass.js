var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	browsersync = require('browser-sync'),
	sass = require('gulp-ruby-sass'),
	gulpFilter = require('gulp-filter'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps   = require('gulp-sourcemaps'),
	config       = require('../../config');

/**
 * Generate CSS from SCSS
 * Build sourcemaps
 */

gulp.task('sass', function(){

	var sassConfig = config.sass.options;
	
	sassConfig.onError = browsersync.notify;

	// Don’t write sourcemaps of sourcemaps
	var filer = gulpFilter(['*.css', '!*.map'], { restore: true });

	browsersync.notify('Compiling Sass');

/*	return sass(config.sass.src, sassConfig)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(autoprefixer(config.autoprefixer))
		.pipe(filter) // Don’t write sourcemaps of sourcemaps
		.pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '../../../public/dist/css' }))
		.pipe(filer.restore()) // Restore original files*/
		.pipe(gulp.dest(config.sass.dest))*/
})

