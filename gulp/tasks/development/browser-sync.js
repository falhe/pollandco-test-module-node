var gulp        = require('gulp'),
	browsersync = require('browser-sync'),
	gutil       = require('gulp-util'),
	config      = require('../../config').browsersync.development;

/**
* Run the build task and start a server with BrowserSync
*/
gulp.task('browsersync', ['build'], function(){
	gutil.log('browsersync task');
	gutil.log(config);
	//browsersync(config);
	browsersync.init(config);
});