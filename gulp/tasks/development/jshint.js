var gulp = require('gulp')
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	config = require('../../config');

/**
* Run jslinter over all js
*/
gulp.task('lint', function(){
	return gulp.src( config.folders.publicAssetsJs + '/**/*.js' )
		.pipe(jshint())
		.pipe(jshint.reporter( stylish , { verbose: true }))
		.pipe(jshint.reporter('fail'))
});