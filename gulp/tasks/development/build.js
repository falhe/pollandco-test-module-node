var gulp = require('gulp'),
	runSequence = require('run-sequence'),
	gutil       = require('gulp-util');

/**
* Run all tasks needed for a build in defined order
*/
gulp.task('build', function(){
	gutil.log('build task');
	/*runSequence('delete',
		[
			'sass',
			'scripts',
			'images'
		],
		'base64'
		);*/
});