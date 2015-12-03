var gulp = require('gulp'),
	del = require('del'),
	gutil = require('gulp-util'),
	config = require('../../config').delete;

/**
* Delete folders and files before build for fresh build
*/
gulp.task('delete', function(){
	gutil.log(config.src);
	return del(config.src);
});